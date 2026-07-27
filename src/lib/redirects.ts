/**
 * Table de redirections 301 des anciennes URLs vers le nouveau site.
 *
 * Deux jeux d'URLs sont couverts (audit du 22/07/2026) :
 * 1. Le site historiquement EN LIGNE sur jcdrenovation.fr (Webkom) —
 *    URLs relevées dans son sitemap réel ;
 * 2. Le dossier local .com (ELM Digital) — atteignable si jcd-renovation.com
 *    est rattaché au projet Vercel avec redirection de domaine (chemin
 *    préservé), cf. DEPLOIEMENT.md.
 *
 * Testée par tests/redirects.test.ts : chaque destination existe dans le
 * registre de routes, zéro chaîne, zéro collision avec une route réelle.
 */

export type RedirectRule = {
  source: string;
  destination: string;
  permanent: boolean;
};

const anciennesVillesSecondaires = ["nemours-77140", "sully-sur-loire-45600"];
const anciennesVillesArticles = ["montargis", "nemours", "orleans", "sens", "sully-sur-loire"];

/**
 * Slugs de prestations migrés lors de la refonte SEO (juillet 2026) :
 * géolocalisés → génériques. Les destinations legacy ci-dessous pointent
 * DIRECTEMENT vers les nouveaux slugs : passer par l'ancien créerait une
 * chaîne à deux sauts, interdite par tests/redirects.test.ts.
 */
const migrationSlugs: ReadonlyArray<{ source: string; destination: string }> = [
  { source: "/demoussage-toiture-villemandeur", destination: "/demoussage-toiture" },
  { source: "/recherche-de-fuite-toiture-villemandeur", destination: "/recherche-fuite-toiture" },
  { source: "/zinguerie-villemandeur", destination: "/zinguerie" },
  { source: "/peinture-villemandeur", destination: "/peinture-facade" },
  { source: "/charpente-villemandeur", destination: "/charpente" },
  { source: "/couvreur-zingueur-montargis", destination: "/couvreur-montargis" },
];

/** Entrées « métier » : ancienne URL (sans extension) → nouvelle URL. */
export const legacyRedirectMap: ReadonlyArray<{
  source: string;
  destination: string;
}> = [
  ...migrationSlugs,

  // ── Jeu 1 : site en ligne jcdrenovation.fr (Webkom) ────────────────────
  { source: "/nettoyage-et-demoussage-de-toiture-45", destination: "/demoussage-toiture" },
  { source: "/urgence-fuite-de-toiture-45", destination: "/recherche-fuite-toiture" },
  { source: "/couverture-a-montargis-45200", destination: "/couvreur-montargis" },
  { source: "/couverture-a-nemours-77140", destination: "/zone-intervention" },
  { source: "/couverture-a-sens-89100", destination: "/couvreur-sens" },
  { source: "/couverture-a-sully-sur-loire-45600", destination: "/zone-intervention" },
  { source: "/contact", destination: "/devis-gratuit" },
  // Peinture et ravalement ont désormais leur page dédiée (refonte SEO).
  { source: "/peinture-interieur-et-exterieur-45", destination: "/peinture-facade" },
  { source: "/ravalement-de-facade-45", destination: "/peinture-facade" },
  // Prestation réellement abandonnée : espaces verts.
  { source: "/entretien-espace-vert-45", destination: "/" },

  // ── Jeu 2 : dossier local jcd-renovation.com (ELM) ──────────────────────
  { source: "/nettoyage-demoussage-45", destination: "/demoussage-toiture" },
  { source: "/fuite-toiture-45", destination: "/recherche-fuite-toiture" },
  { source: "/ravalement-facade-45", destination: "/peinture-facade" },
  { source: "/couverture-montargis-45200", destination: "/couvreur-montargis" },
  { source: "/couverture-sens-89100", destination: "/couvreur-sens" },
  ...anciennesVillesSecondaires.map((ville) => ({
    source: `/couverture-${ville}`,
    destination: "/zone-intervention",
  })),
  { source: "/realisation", destination: "/realisations" },
  // Hubs blog par ville → hub blog unique
  { source: "/blog-montargis-45200", destination: "/blog" },
  { source: "/blog-nemours-77140", destination: "/blog" },
  { source: "/blog-sens-89100", destination: "/blog" },
  { source: "/blog-sully-sur-loire", destination: "/blog" },
  // Articles par ville → équivalents thématiques du nouveau blog
  ...anciennesVillesArticles.map((ville) => ({
    source: `/article-couverture-${ville}`,
    destination: "/blog",
  })),
  ...anciennesVillesArticles.map((ville) => ({
    source: `/article-renovation-${ville}`,
    destination: "/blog",
  })),
  ...anciennesVillesArticles.map((ville) => ({
    source: `/guide-entretien-toiture-${ville}`,
    destination: "/blog/entretien-toiture-tuile-ardoise-zinc",
  })),
  ...anciennesVillesArticles.map((ville) => ({
    source: `/guide-ravalement-facade-${ville}`,
    destination: "/blog",
  })),
];

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
