import nodemailer from "nodemailer";
import { z } from "zod";

import { devisSchema, type DevisInput } from "@/lib/devis-schema";
import { getClientIp, rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const preferredRegion = ["cdg1"];

/** Limite serveur pour la photo (la limite body Vercel serverless est de 4,5 Mo). */
const MAX_PHOTO_BYTES = 4_000_000;

/** Un formulaire soumis moins de 3 s après affichage est un bot. */
const MIN_FILL_TIME_MS = 3000;

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildText(data: DevisInput, hasPhoto: boolean): string {
  return [
    "Nouvelle demande de devis reçue depuis jcdrenovation.fr",
    "",
    `Nom : ${data.nom}`,
    `Téléphone : ${data.telephone}`,
    `Email : ${data.email}`,
    `Ville : ${data.ville}`,
    `Prestation : ${data.prestation}`,
    `Photo jointe : ${hasPhoto ? "oui" : "non"}`,
    "",
    "Message :",
    data.message,
  ].join("\n");
}

function buildHtml(data: DevisInput, hasPhoto: boolean): string {
  const rows: [string, string][] = [
    ["Nom", data.nom],
    ["Téléphone", data.telephone],
    ["Email", data.email],
    ["Ville", data.ville],
    ["Prestation", data.prestation],
    ["Photo jointe", hasPhoto ? "oui" : "non"],
  ];
  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#6b7280;">${label}</td>` +
        `<td style="padding:6px 0;font-weight:600;color:#16213e;">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  return (
    `<div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#16213e;">` +
    `<h2 style="font-size:18px;margin:0 0 12px;">Nouvelle demande de devis</h2>` +
    `<table cellpadding="0" cellspacing="0" style="border-collapse:collapse;">${tableRows}</table>` +
    `<p style="margin:16px 0 4px;color:#6b7280;">Message :</p>` +
    `<p style="margin:0;white-space:pre-line;">${escapeHtml(data.message)}</p>` +
    `</div>`
  );
}

/** Configuration SMTP lue depuis l'environnement (jamais en dur dans le code). */
function readSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  const to = process.env.CONTACT_EMAIL_TO;
  const from = process.env.MAIL_FROM ?? user;
  if (!host || !user || !pass || !to || !from) return null;
  return {
    host,
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: process.env.SMTP_SECURE !== "false", // 465 = SSL par défaut
    user,
    pass,
    to,
    from,
    fromName: process.env.MAIL_FROM_NAME ?? "JCD Rénovation",
  };
}

export async function POST(request: Request): Promise<Response> {
  // Anti-spam 0 — limite de débit par IP (best-effort, défense en profondeur).
  if (!rateLimit(getClientIp(request))) {
    return Response.json({ ok: false, error: "rate" }, { status: 429 });
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  // Anti-spam 1 — honeypot : un bot qui remplit « website » reçoit un faux succès.
  const website = formData.get("website");
  if (typeof website === "string" && website.trim() !== "") {
    return Response.json({ ok: true });
  }

  // Anti-spam 2 — timestamp : soumission absente ou trop rapide = bot, faux succès aussi.
  const tsRaw = formData.get("ts");
  const ts = typeof tsRaw === "string" && tsRaw !== "" ? Number(tsRaw) : Number.NaN;
  if (!Number.isFinite(ts) || Date.now() - ts < MIN_FILL_TIME_MS) {
    return Response.json({ ok: true });
  }

  const parsed = devisSchema.safeParse({
    nom: formData.get("nom"),
    telephone: formData.get("telephone"),
    email: formData.get("email"),
    ville: formData.get("ville"),
    prestation: formData.get("prestation"),
    message: formData.get("message"),
    consentement: formData.get("consentement"),
  });
  if (!parsed.success) {
    return Response.json(
      { ok: false, errors: z.flattenError(parsed.error).fieldErrors },
      { status: 400 },
    );
  }

  // Photo optionnelle — type image/* et 4 Mo max, convertie en Buffer pour l'attachment.
  const photoEntry = formData.get("photo");
  let attachment: { filename: string; content: Buffer } | null = null;
  if (photoEntry !== null && typeof photoEntry !== "string" && photoEntry.size > 0) {
    if (!photoEntry.type.startsWith("image/") || photoEntry.size > MAX_PHOTO_BYTES) {
      return Response.json({ ok: false, error: "photo" }, { status: 413 });
    }
    attachment = {
      filename: photoEntry.name || "photo.jpg",
      content: Buffer.from(await photoEntry.arrayBuffer()),
    };
  }

  const smtp = readSmtpConfig();
  if (!smtp) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[api/devis] Configuration SMTP absente — envoi simulé (dev).");
      return Response.json({ ok: true, simulated: true });
    }
    return Response.json({ ok: false }, { status: 500 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtp.host,
      port: smtp.port,
      secure: smtp.secure,
      auth: { user: smtp.user, pass: smtp.pass },
      // Délais courts pour ne pas laisser la fonction serverless pendre.
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 15_000,
    });

    await transporter.sendMail({
      // From = compte SMTP authentifié (IONOS l'exige) ; réponses vers le visiteur.
      from: `"${smtp.fromName}" <${smtp.from}>`,
      to: smtp.to,
      replyTo: `"${parsed.data.nom}" <${parsed.data.email}>`,
      subject: `Nouvelle demande de devis : ${parsed.data.prestation} (${parsed.data.ville})`,
      text: buildText(parsed.data, attachment !== null),
      html: buildHtml(parsed.data, attachment !== null),
      ...(attachment ? { attachments: [attachment] } : {}),
    });

    return Response.json({ ok: true });
  } catch {
    // Jamais de détail d'erreur SMTP renvoyé au client (pas de fuite d'infos).
    return Response.json({ ok: false }, { status: 502 });
  }
}
