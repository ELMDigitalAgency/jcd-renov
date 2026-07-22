/**
 * Consentement cookies (mesure d'audience GA4 uniquement).
 * Posture CNIL : gtag n'est JAMAIS chargé avant un consentement explicite.
 * Si NEXT_PUBLIC_GA_ID n'est pas défini : aucun script, aucun bandeau.
 */

export type ConsentValue = "granted" | "denied";

export const CONSENT_STORAGE_KEY = "jcd-consent";
export const CONSENT_EVENT = "jcd:consent";

export function getStoredConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  return value === "granted" || value === "denied" ? value : null;
}

export function setStoredConsent(value: ConsentValue): void {
  window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
  window.dispatchEvent(new CustomEvent<ConsentValue>(CONSENT_EVENT, { detail: value }));
}
