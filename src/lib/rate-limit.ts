/**
 * Limiteur de débit best-effort en mémoire (par IP), pour freiner les bots et
 * les envois en rafale sur le formulaire de devis.
 *
 * En serverless, la mémoire n'est partagée que sur une instance « chaude » :
 * ce n'est pas une protection absolue, mais une couche supplémentaire qui
 * s'ajoute au honeypot, au time-trap et à la validation Zod.
 */

type Hit = { count: number; resetAt: number };

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_HITS = 5; // 5 envois max par IP et par fenêtre

const store = new Map<string, Hit>();

/** Retourne true si la requête est autorisée, false si la limite est atteinte. */
export function rateLimit(ip: string): boolean {
  const now = Date.now();
  const hit = store.get(ip);

  if (!hit || now > hit.resetAt) {
    store.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    // Purge opportuniste des entrées expirées pour éviter la fuite mémoire.
    if (store.size > 5000) {
      for (const [key, value] of store) {
        if (now > value.resetAt) store.delete(key);
      }
    }
    return true;
  }

  if (hit.count >= MAX_HITS) return false;
  hit.count += 1;
  return true;
}

/** Extrait l'IP client des en-têtes de proxy (Vercel renseigne x-forwarded-for). */
export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") ?? "unknown";
}
