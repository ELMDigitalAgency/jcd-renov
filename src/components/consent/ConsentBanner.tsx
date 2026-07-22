"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { getStoredConsent, setStoredConsent } from "@/lib/consent";

/**
 * Bandeau de consentement — rendu UNIQUEMENT si NEXT_PUBLIC_GA_ID est défini
 * et qu'aucun choix n'est enregistré. Monté après hydratation (localStorage).
 */
export function ConsentBanner() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (gaId && getStoredConsent() === null) {
      setVisible(true);
    }
  }, [gaId]);

  if (!gaId || !visible) return null;

  const choose = (value: "granted" | "denied") => {
    setStoredConsent(value);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Consentement aux cookies"
      className="fixed inset-x-0 bottom-0 z-[90] border-t border-white/10 bg-navy p-4 text-white"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-sm text-white/85">
          Nous souhaitons mesurer l&apos;audience de ce site (Google Analytics). Aucun cookie
          n&apos;est déposé sans votre accord.{" "}
          <Link href="/politique-de-confidentialite" className="underline hover:text-primary">
            En savoir plus
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => choose("denied")}
            className="rounded-full border border-white/30 px-5 py-2 text-sm font-semibold transition-colors hover:bg-white/10"
          >
            Refuser
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold transition-colors hover:bg-primary-dark"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
