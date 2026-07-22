/**
 * Table de redirections 301 des anciennes URLs vers le nouveau site.
 *
 * Deux jeux d'URLs sont couverts :
 * 1. Le site historiquement EN LIGNE sur www.jcd-renovation.fr (Webkom)
 * 2. Le dossier local .com (ELM Digital) — atteignable si jcd-renovation.com
 *    est rattaché au projet Vercel avec redirection de domaine
 *
 * La table est complétée en Phase 8 (finition SEO) et testée par
 * tests/redirects.test.ts (chaque destination existe, zéro chaîne).
 */

export type RedirectRule = {
  source: string;
  destination: string;
  permanent: boolean;
};

/** Entrées « métier » : ancienne URL (sans extension) → nouvelle URL. */
export const legacyRedirectMap: ReadonlyArray<{
  source: string;
  destination: string;
}> = [];

/**
 * Génère les règles Next.js : pour chaque entrée, la variante nue ET la
 * variante `.html` (redirection en un seul saut), plus les filets génériques.
 */
export function buildRedirects(): RedirectRule[] {
  const rules: RedirectRule[] = [];

  for (const { source, destination } of legacyRedirectMap) {
    rules.push({ source, destination, permanent: true });
    rules.push({ source: `${source}.html`, destination, permanent: true });
  }

  // Endpoints PHP de l'ancien site
  rules.push({ source: "/index.php", destination: "/", permanent: true });
  rules.push({ source: "/contact.php", destination: "/devis-gratuit", permanent: true });
  rules.push({ source: "/devis.php", destination: "/devis-gratuit", permanent: true });

  // Filet générique : toute URL `.html` restante perd son extension
  rules.push({ source: "/:slug.html", destination: "/:slug", permanent: true });

  return rules;
}
