"use client";

import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import Link from "next/link";
import { useId, useState } from "react";
import { z } from "zod";

import { FileInput } from "@/components/devis/FileInput";
import { Card } from "@/components/ui/Card";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { devisSchema, PRESTATION_OPTIONS, type DevisInput } from "@/lib/devis-schema";

type Status = "idle" | "pending" | "success" | "error";
type FieldErrors = Partial<Record<keyof DevisInput, string>>;

const inputClass =
  "mt-2 block w-full rounded-2xl border border-navy/15 bg-white px-4 py-3 text-navy placeholder:text-body/50 focus:border-primary focus:outline-primary";
const labelClass = "block font-medium text-navy";

const TEXT_FIELDS = [
  { name: "nom", label: "Nom", type: "text", autoComplete: "name", placeholder: "Jean Dupont" },
  {
    name: "telephone",
    label: "Téléphone",
    type: "tel",
    autoComplete: "tel",
    placeholder: "06 12 34 56 78",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    autoComplete: "email",
    placeholder: "jean.dupont@exemple.fr",
  },
  {
    name: "ville",
    label: "Ville",
    type: "text",
    autoComplete: "address-level2",
    placeholder: "Villemandeur",
  },
] as const;

/** Formulaire de demande de devis — validation Zod partagée avec /api/devis. */
export function DevisForm() {
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [photo, setPhoto] = useState<File | null>(null);
  /** Posé au montage — le serveur rejette silencieusement les envois < 3 s (bots). */
  const [ts] = useState(() => Date.now());

  function errorProps(name: keyof DevisInput) {
    const message = fieldErrors[name];
    return {
      "aria-invalid": message ? true : undefined,
      "aria-describedby": message ? `${id}-${name}-error` : undefined,
    };
  }

  function fieldError(name: keyof DevisInput) {
    const message = fieldErrors[name];
    if (!message) return null;
    return (
      <p id={`${id}-${name}-error`} className="mt-1.5 text-sm font-medium text-red-600">
        {message}
      </p>
    );
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const parsed = devisSchema.safeParse({
      nom: String(formData.get("nom") ?? ""),
      telephone: String(formData.get("telephone") ?? ""),
      email: String(formData.get("email") ?? ""),
      ville: String(formData.get("ville") ?? ""),
      prestation: String(formData.get("prestation") ?? ""),
      message: String(formData.get("message") ?? ""),
      consentement: formData.get("consentement") === "on",
    });

    if (!parsed.success) {
      const flat = z.flattenError(parsed.error).fieldErrors;
      const next: FieldErrors = {};
      for (const key of Object.keys(flat) as (keyof DevisInput)[]) {
        const message = flat[key]?.[0];
        if (message) next[key] = message;
      }
      setFieldErrors(next);
      setStatus("idle");
      return;
    }

    setFieldErrors({});
    setStatus("pending");

    // FormData (pas de JSON) : le payload peut contenir une photo.
    const payload = new FormData();
    payload.set("nom", parsed.data.nom);
    payload.set("telephone", parsed.data.telephone);
    payload.set("email", parsed.data.email);
    payload.set("ville", parsed.data.ville);
    payload.set("prestation", parsed.data.prestation);
    payload.set("message", parsed.data.message);
    payload.set("consentement", "true");
    payload.set("website", String(formData.get("website") ?? ""));
    payload.set("ts", String(ts));
    if (photo) payload.set("photo", photo, photo.name);

    try {
      const response = await fetch("/api/devis", { method: "POST", body: payload });
      const result = (await response.json()) as { ok?: boolean };
      setStatus(response.ok && result.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <Card variant="cream" className="text-center">
        <span className="inline-flex size-14 items-center justify-center rounded-full bg-primary/10">
          <TaskAltRoundedIcon fontSize="inherit" className="text-[28px] text-primary" aria-hidden />
        </span>
        <p role="status" className="mt-5 font-heading text-2xl font-extrabold text-navy">
          Votre demande est bien partie.
        </p>
        <p className="mt-3 leading-relaxed">Nous vous rappelons sous 24 à 48 h.</p>
        <p className="mt-6 text-sm font-medium text-navy">Besoin d&apos;une réponse immédiate ?</p>
        <div className="mt-3 flex justify-center">
          <PhoneLink />
        </div>
      </Card>
    );
  }

  const hasErrors = Object.keys(fieldErrors).length > 0;

  return (
    <Card variant="white">
      <form onSubmit={handleSubmit} noValidate className="relative space-y-5">
        {hasErrors ? (
          <div
            role="alert"
            className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
          >
            Veuillez corriger les champs signalés ci-dessous.
          </div>
        ) : null}
        {status === "error" ? (
          <div
            role="alert"
            className="rounded-2xl border border-red-200 bg-red-50 px-4 py-4 text-sm text-red-700"
          >
            <p className="font-medium">
              L&apos;envoi a échoué. Réessayez dans un instant ou appelez-nous directement.
            </p>
            <PhoneLink className="mt-3" />
          </div>
        ) : null}

        {/* Honeypot anti-spam : invisible pour les humains, rempli par les bots. */}
        <div className="absolute -left-[9999px]" aria-hidden="true">
          <label htmlFor={`${id}-website`}>Ne pas remplir ce champ</label>
          <input
            id={`${id}-website`}
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        <input type="hidden" name="ts" value={ts} readOnly />

        <div className="grid gap-5 sm:grid-cols-2">
          {TEXT_FIELDS.map((field) => (
            <div key={field.name}>
              <label htmlFor={`${id}-${field.name}`} className={labelClass}>
                {field.label}{" "}
                <span aria-hidden="true" className="text-primary">
                  *
                </span>
              </label>
              <input
                id={`${id}-${field.name}`}
                name={field.name}
                type={field.type}
                autoComplete={field.autoComplete}
                placeholder={field.placeholder}
                aria-required="true"
                className={inputClass}
                {...errorProps(field.name)}
              />
              {fieldError(field.name)}
            </div>
          ))}
        </div>

        <div>
          <label htmlFor={`${id}-prestation`} className={labelClass}>
            Type de prestation{" "}
            <span aria-hidden="true" className="text-primary">
              *
            </span>
          </label>
          <select
            id={`${id}-prestation`}
            name="prestation"
            defaultValue=""
            aria-required="true"
            className={inputClass}
            {...errorProps("prestation")}
          >
            <option value="" disabled>
              Choisissez une prestation
            </option>
            {PRESTATION_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {fieldError("prestation")}
        </div>

        <div>
          <label htmlFor={`${id}-message`} className={labelClass}>
            Votre message{" "}
            <span aria-hidden="true" className="text-primary">
              *
            </span>
          </label>
          <textarea
            id={`${id}-message`}
            name="message"
            rows={5}
            placeholder="Décrivez vos travaux : type de toiture, problème constaté, surface approximative…"
            aria-required="true"
            className={inputClass}
            {...errorProps("message")}
          />
          {fieldError("message")}
        </div>

        <FileInput onChange={setPhoto} />

        <div>
          <div className="flex items-start gap-3">
            <input
              id={`${id}-consentement`}
              name="consentement"
              type="checkbox"
              aria-required="true"
              className="mt-1 size-4 shrink-0 accent-primary focus-visible:outline-2 focus-visible:outline-primary"
              {...errorProps("consentement")}
            />
            <label htmlFor={`${id}-consentement`} className="text-sm leading-relaxed">
              J&apos;accepte que mes données soient utilisées pour traiter ma demande de devis,
              conformément à la{" "}
              <Link
                href="/politique-de-confidentialite"
                className="font-medium text-navy underline decoration-primary/60 underline-offset-2 transition-colors hover:text-primary"
              >
                politique de confidentialité
              </Link>
              .{" "}
              <span aria-hidden="true" className="text-primary">
                *
              </span>
            </label>
          </div>
          {fieldError("consentement")}
        </div>

        <button
          type="submit"
          disabled={status === "pending"}
          className="inline-flex w-full items-center justify-center rounded-full bg-primary-ink px-7 py-3.5 font-semibold text-white transition-colors hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {status === "pending" ? "Envoi en cours…" : "Envoyer ma demande de devis"}
        </button>

        {/* Rangée de confiance : lève les dernières hésitations au moment du clic */}
        <ul className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs font-medium text-navy">
          <li className="flex items-center gap-1.5">
            <span aria-hidden className="size-1.5 rounded-full bg-primary" />
            Gratuit et sans engagement
          </li>
          <li className="flex items-center gap-1.5">
            <span aria-hidden className="size-1.5 rounded-full bg-primary" />
            Réponse sous 24-48 h
          </li>
          <li className="flex items-center gap-1.5">
            <span aria-hidden className="size-1.5 rounded-full bg-primary" />
            Vos données restent privées
          </li>
        </ul>
        <p className="text-xs text-body">
          <span aria-hidden="true" className="text-primary">
            *
          </span>{" "}
          Champs obligatoires.
        </p>
      </form>
    </Card>
  );
}
