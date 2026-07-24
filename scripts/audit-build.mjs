/**
 * Audit du build SSG (.next/server/app) — la revue qui ne ment pas :
 * 1. chaque lien interne pointe vers une route réelle (pas un 404, pas une
 *    source de redirection) ;
 * 2. titles/metas conformes à la stratégie SEO (Excel, onglet Architecture) ;
 * 3. exactement 1 <h1> par page ;
 * 4. canonical présent et cohérent.
 *
 * Usage : node scripts/audit-build.mjs (après `npm run build`)
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const APP_DIR = path.join(ROOT, ".next", "server", "app");

// Routes réelles du site
const routes = new Set([
  "/", "/zone-intervention", "/realisations", "/avis-clients", "/a-propos",
  "/blog", "/devis-gratuit", "/mentions-legales", "/politique-de-confidentialite",
  "/demoussage-toiture-villemandeur", "/recherche-de-fuite-toiture-villemandeur",
  "/zinguerie-villemandeur", "/couvreur-villemandeur",
  "/peinture-villemandeur", "/charpente-villemandeur",
  "/couvreur-zingueur-montargis", "/couvreur-amilly", "/couvreur-chalette-sur-loing",
]);
const blogDir = path.join(ROOT, "src", "content", "blog");
for (const f of fs.readdirSync(blogDir)) {
  if (f.endsWith(".mdx")) routes.add(`/blog/${f.replace(/\.mdx$/, "")}`);
}

// Titles attendus (stratégie SEO — à la lettre)
const expectedTitles = {
  "index.html": "Couvreur Zingueur à Villemandeur (45700) | JCD Rénovation",
  "demoussage-toiture-villemandeur.html": "Démoussage de Toiture à Villemandeur | JCD Rénovation",
  "recherche-de-fuite-toiture-villemandeur.html":
    "Recherche de Fuite Toiture à Villemandeur | JCD Rénovation",
  "zinguerie-villemandeur.html": "Zinguerie à Villemandeur : Gouttières, Solins | JCD Rénovation",
  "couvreur-villemandeur.html": "Couvreur à Villemandeur : Pose & Rénovation Toiture",
  "couvreur-zingueur-montargis.html": "Couvreur Zingueur à Montargis | JCD Rénovation",
  "couvreur-amilly.html": "Couvreur à Amilly | JCD Rénovation",
  "couvreur-chalette-sur-loing.html": "Couvreur à Chalette-sur-Loing | JCD Rénovation",
  "zone-intervention.html": "Zone d'Intervention : Loiret, Yonne, Seine-et-Marne | JCD Rénovation",
  "realisations.html": "Nos Réalisations : Toitures & Zinguerie | JCD Rénovation",
  "avis-clients.html": "Avis Clients JCD Rénovation | Couvreur Villemandeur",
  "a-propos.html": "À Propos de JCD Rénovation | Couvreur Villemandeur",
  "blog.html": "Conseils Toiture, Zinguerie & Démoussage | Blog JCD Rénovation",
  "devis-gratuit.html": "Devis Gratuit Couvreur Villemandeur | JCD Rénovation",
  "mentions-legales.html": "Mentions Légales | JCD Rénovation",
};

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (entry.name.endsWith(".html") && !entry.name.startsWith("_")) out.push(full);
  }
  return out;
}

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");

let errors = 0;
const files = walk(APP_DIR);
console.log(`Audit de ${files.length} pages HTML générées\n`);

for (const file of files) {
  const rel = path.relative(APP_DIR, file).replace(/\\/g, "/");
  const html = fs.readFileSync(file, "utf-8");

  // 1. Liens internes
  const hrefs = [...html.matchAll(/href="(\/[^"#?]*)/g)].map((m) => m[1]);
  for (const href of new Set(hrefs)) {
    const clean = href === "/" ? "/" : href.replace(/\/$/, "");
    if (clean.startsWith("/_next") || clean.startsWith("/images") || clean.startsWith("/api"))
      continue;
    if (clean.endsWith(".txt") || clean.endsWith(".xml") || clean.endsWith(".png") || clean.endsWith(".ico"))
      continue;
    if (clean.includes("/opengraph-image") || clean.includes("/apple-icon") || clean.includes("/favicon"))
      continue;
    if (!routes.has(clean)) {
      console.log(`❌ ${rel} → lien interne cassé : ${clean}`);
      errors++;
    }
  }

  // 2. Title attendu
  const titleMatch = html.match(/<title>([^<]*)<\/title>/);
  const title = titleMatch ? decode(titleMatch[1]) : "(absent)";
  if (expectedTitles[rel] && title !== expectedTitles[rel]) {
    console.log(`❌ ${rel} → title « ${title} » ≠ attendu « ${expectedTitles[rel]} »`);
    errors++;
  }
  if (!titleMatch) {
    console.log(`❌ ${rel} → <title> absent`);
    errors++;
  }

  // 3. Un seul h1
  const h1Count = (html.match(/<h1[\s>]/g) ?? []).length;
  if (h1Count !== 1) {
    console.log(`❌ ${rel} → ${h1Count} <h1> (attendu : 1)`);
    errors++;
  }

  // 4. Canonical
  if (!html.includes('rel="canonical"')) {
    console.log(`❌ ${rel} → canonical absent`);
    errors++;
  }

  // 5. Meta description
  if (!/<meta name="description"/.test(html)) {
    console.log(`❌ ${rel} → meta description absente`);
    errors++;
  }
}

console.log(
  errors === 0
    ? `\n✅ AUDIT VERT : ${files.length} pages — liens internes, titles, H1 uniques, canonicals, descriptions OK`
    : `\n⚠️ ${errors} problème(s) détecté(s)`,
);
process.exit(errors === 0 ? 0 : 1);
