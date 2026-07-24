// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { devisSchema } from "@/lib/devis-schema";

/**
 * Tests de la route POST /api/devis : anti-spam silencieux, validation Zod,
 * limites photo, envoi SMTP (Nodemailer mocké). L'environnement node (pragma
 * ci-dessus) garantit des Request/FormData/File natifs undici, sans interop jsdom.
 */

type SendPayload = {
  from: string;
  to: string | string[];
  replyTo?: string;
  subject: string;
  text: string;
  html: string;
  attachments?: { filename: string; content: Buffer }[];
};

const { sendMailMock } = vi.hoisted(() => ({
  sendMailMock: vi.fn<(payload: SendPayload) => Promise<{ messageId: string }>>(),
}));

vi.mock("nodemailer", () => ({
  default: { createTransport: () => ({ sendMail: sendMailMock }) },
}));

// Import APRÈS le vi.mock (hoisté) pour que la route reçoive le mock.
import { POST } from "@/app/api/devis/route";

type ApiResponse = {
  ok: boolean;
  errors?: Record<string, string[]>;
  error?: string;
  simulated?: boolean;
};

const VALID_FIELDS = {
  nom: "Jean Dupont",
  telephone: "06 12 34 56 78",
  email: "jean.dupont@example.com",
  ville: "Villemandeur",
  prestation: "Démoussage",
  message: "Ma toiture est couverte de mousse côté nord, merci de me rappeler pour un devis.",
  consentement: "true",
  website: "",
} as const;

function buildFormData(overrides: Partial<Record<string, string | File>> = {}): FormData {
  const formData = new FormData();
  const fields: Record<string, string | File> = {
    ...VALID_FIELDS,
    // Formulaire affiché depuis 10 s — passe le contrôle anti-bot de 3 s.
    ts: String(Date.now() - 10_000),
    ...overrides,
  };
  for (const [key, value] of Object.entries(fields)) {
    if (typeof value === "string") formData.set(key, value);
    else formData.set(key, value, value.name);
  }
  return formData;
}

// IP unique par requête : chaque test a son propre compteur de rate-limit.
let ipCounter = 0;
function makeRequest(formData: FormData): Request {
  ipCounter += 1;
  return new Request("http://localhost/api/devis", {
    method: "POST",
    body: formData,
    headers: { "x-forwarded-for": `10.0.0.${ipCounter}` },
  });
}

describe("POST /api/devis", () => {
  beforeEach(() => {
    vi.stubEnv("SMTP_HOST", "smtp.test");
    vi.stubEnv("SMTP_USER", "relay@example.com");
    vi.stubEnv("SMTP_PASSWORD", "secret");
    vi.stubEnv("MAIL_FROM", "relay@example.com");
    vi.stubEnv("CONTACT_EMAIL_TO", "client@example.com");
    sendMailMock.mockReset();
    sendMailMock.mockResolvedValue({ messageId: "test-id" });
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("payload valide → 200 et un email envoyé avec le bon subject et replyTo", async () => {
    const response = await POST(makeRequest(buildFormData()));
    const body = (await response.json()) as ApiResponse;

    expect(response.status).toBe(200);
    expect(body.ok).toBe(true);
    expect(sendMailMock).toHaveBeenCalledTimes(1);

    const payload = sendMailMock.mock.calls[0]?.[0];
    expect(payload?.subject).toBe("Nouvelle demande de devis : Démoussage (Villemandeur)");
    expect(payload?.replyTo).toContain("jean.dupont@example.com");
    expect(payload?.to).toBe("client@example.com");
    expect(payload?.attachments).toBeUndefined();
  });

  it("honeypot rempli → 200 silencieux, aucun email envoyé", async () => {
    const response = await POST(makeRequest(buildFormData({ website: "https://spam.example" })));
    const body = (await response.json()) as ApiResponse;

    expect(response.status).toBe(200);
    expect(body.ok).toBe(true);
    expect(sendMailMock).not.toHaveBeenCalled();
  });

  it("soumission trop rapide (< 3 s) → 200 silencieux, aucun email envoyé", async () => {
    const response = await POST(makeRequest(buildFormData({ ts: String(Date.now()) })));
    const body = (await response.json()) as ApiResponse;

    expect(response.status).toBe(200);
    expect(body.ok).toBe(true);
    expect(sendMailMock).not.toHaveBeenCalled();
  });

  it("timestamp absent → 200 silencieux, aucun email envoyé", async () => {
    const formData = buildFormData();
    formData.delete("ts");
    const response = await POST(makeRequest(formData));

    expect(response.status).toBe(200);
    expect(sendMailMock).not.toHaveBeenCalled();
  });

  it("email invalide → 400 avec l'erreur du champ", async () => {
    const response = await POST(makeRequest(buildFormData({ email: "pas-un-email" })));
    const body = (await response.json()) as ApiResponse;

    expect(response.status).toBe(400);
    expect(body.ok).toBe(false);
    expect(body.errors?.email).toBeDefined();
    expect(sendMailMock).not.toHaveBeenCalled();
  });

  it("message trop court → 400", async () => {
    const response = await POST(makeRequest(buildFormData({ message: "fuite" })));
    const body = (await response.json()) as ApiResponse;

    expect(response.status).toBe(400);
    expect(body.errors?.message).toBeDefined();
    expect(sendMailMock).not.toHaveBeenCalled();
  });

  it("photo de plus de 4 Mo → 413", async () => {
    const bigPhoto = new File([new Uint8Array(4_000_001)], "toiture.jpg", {
      type: "image/jpeg",
    });
    const response = await POST(makeRequest(buildFormData({ photo: bigPhoto })));
    const body = (await response.json()) as ApiResponse;

    expect(response.status).toBe(413);
    expect(body).toEqual({ ok: false, error: "photo" });
    expect(sendMailMock).not.toHaveBeenCalled();
  });

  it("photo valide → jointe en attachment", async () => {
    const photo = new File([new Uint8Array(50_000)], "gouttiere.jpg", { type: "image/jpeg" });
    const response = await POST(makeRequest(buildFormData({ photo })));

    expect(response.status).toBe(200);
    const payload = sendMailMock.mock.calls[0]?.[0];
    expect(payload?.attachments).toHaveLength(1);
    expect(payload?.attachments?.[0]?.filename).toBe("gouttiere.jpg");
  });

  it("configuration SMTP absente en production → 500", async () => {
    vi.stubEnv("SMTP_HOST", "");
    vi.stubEnv("NODE_ENV", "production");

    const response = await POST(makeRequest(buildFormData()));
    const body = (await response.json()) as ApiResponse;

    expect(response.status).toBe(500);
    expect(body.ok).toBe(false);
    expect(sendMailMock).not.toHaveBeenCalled();
  });

  it("erreur SMTP → 502 sans détail sensible", async () => {
    sendMailMock.mockRejectedValue(new Error("SMTP down"));

    const response = await POST(makeRequest(buildFormData()));
    const body = (await response.json()) as ApiResponse;

    expect(response.status).toBe(502);
    expect(body).toEqual({ ok: false });
  });
});

describe("devisSchema — formats de téléphone", () => {
  const base = {
    nom: "Jean Dupont",
    email: "jean@example.com",
    ville: "Villemandeur",
    prestation: "Couverture",
    message: "Une tuile est cassée au-dessus du garage, pouvez-vous passer ?",
    consentement: true,
  };

  it.each(["06 12 34 56 78", "+33 6 12 34 56 78", "0612345678", "06.12.34.56.78"])(
    "accepte %s",
    (telephone) => {
      expect(devisSchema.safeParse({ ...base, telephone }).success).toBe(true);
    },
  );

  it.each(["123", "06 12 34", "812345678", "telephone"])("rejette %s", (telephone) => {
    expect(devisSchema.safeParse({ ...base, telephone }).success).toBe(false);
  });

  it('accepte le consentement en string "true" (FormData) mais pas false', () => {
    const valid = { ...base, telephone: "06 12 34 56 78" };
    expect(devisSchema.safeParse({ ...valid, consentement: "true" }).success).toBe(true);
    expect(devisSchema.safeParse({ ...valid, consentement: false }).success).toBe(false);
  });
});
