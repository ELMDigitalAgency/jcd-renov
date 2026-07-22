"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { CONSENT_EVENT, getStoredConsent, type ConsentValue } from "@/lib/consent";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Charge gtag UNIQUEMENT après consentement explicite (posture CNIL la plus
 * stricte : pas de Consent Mode, pas de script du tout avant accord).
 * Suit les soft-navigations App Router via usePathname.
 */
export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const [granted, setGranted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!gaId) return;
    setGranted(getStoredConsent() === "granted");
    const onConsent = (event: Event) => {
      const detail = (event as CustomEvent<ConsentValue>).detail;
      setGranted(detail === "granted");
    };
    window.addEventListener(CONSENT_EVENT, onConsent);
    return () => window.removeEventListener(CONSENT_EVENT, onConsent);
  }, [gaId]);

  // Injection du script une seule fois après consentement.
  useEffect(() => {
    if (!gaId || !granted || window.gtag) return;
    window.dataLayer = window.dataLayer ?? [];
    window.gtag = (...args: unknown[]) => {
      window.dataLayer?.push(args);
    };
    window.gtag("js", new Date());
    window.gtag("config", gaId);
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    script.async = true;
    document.head.appendChild(script);
  }, [gaId, granted]);

  // page_view sur chaque navigation interne.
  useEffect(() => {
    if (!gaId || !granted || !window.gtag) return;
    window.gtag("event", "page_view", { page_path: pathname });
  }, [gaId, granted, pathname]);

  return null;
}
