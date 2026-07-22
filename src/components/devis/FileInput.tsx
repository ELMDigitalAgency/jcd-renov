"use client";

import { ImageIcon, X } from "lucide-react";
import { useId, useRef, useState } from "react";

import { compressImage, MAX_UPLOAD_BYTES } from "@/lib/image-compress";

type FileInputProps = {
  /** Fichier prêt à l'envoi (déjà compressé) ou null si retiré/invalide. */
  onChange: (file: File | null) => void;
};

function formatSize(bytes: number): string {
  if (bytes >= 1_000_000) return `${(bytes / 1_000_000).toFixed(1).replace(".", ",")} Mo`;
  return `${Math.max(1, Math.round(bytes / 1000))} Ko`;
}

/** Champ photo optionnel du formulaire de devis : compresse côté client avant envoi. */
export function FileInput({ onChange }: FileInputProps) {
  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;

  function reset() {
    if (inputRef.current) inputRef.current.value = "";
    setFile(null);
    onChange(null);
  }

  async function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const selected = event.target.files?.[0] ?? null;
    setError(null);
    if (!selected) {
      reset();
      return;
    }

    setBusy(true);
    const compressed = await compressImage(selected);
    setBusy(false);

    if (compressed.size > MAX_UPLOAD_BYTES) {
      setError("Photo trop lourde même compressée (max 3,5 Mo).");
      reset();
      return;
    }

    setFile(compressed);
    onChange(compressed);
  }

  return (
    <div>
      <label htmlFor={id} className="block font-medium text-navy">
        Photo de votre toiture (optionnel)
      </label>
      <p id={hintId} className="mt-1 text-sm text-body">
        Une photo du problème nous aide à préparer le devis — 3,5 Mo max.
      </p>
      <input
        ref={inputRef}
        id={id}
        type="file"
        accept="image/*"
        disabled={busy}
        onChange={handleChange}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${hintId} ${errorId}` : hintId}
        className="mt-2 block w-full cursor-pointer rounded-2xl border border-navy/15 bg-white px-4 py-3 text-sm text-body file:mr-4 file:rounded-full file:border-0 file:bg-navy file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-primary focus:border-primary focus:outline-primary"
      />
      {busy ? <p className="mt-2 text-sm text-body">Compression de la photo…</p> : null}
      {file ? (
        <p className="mt-2 flex items-center gap-2 text-sm text-navy">
          <ImageIcon className="size-4 shrink-0 text-primary" aria-hidden />
          <span className="min-w-0 truncate font-medium">{file.name}</span>
          <span className="shrink-0 text-body">({formatSize(file.size)})</span>
          <button
            type="button"
            onClick={reset}
            className="inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-1 font-semibold text-navy transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-primary"
          >
            <X className="size-3.5" aria-hidden />
            Retirer<span className="sr-only"> la photo {file.name}</span>
          </button>
        </p>
      ) : null}
      {error ? (
        <p id={errorId} role="alert" className="mt-2 text-sm font-medium text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}
