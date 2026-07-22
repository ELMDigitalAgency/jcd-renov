/**
 * Import one-shot des photos de chantier de l'ancien site :
 * 1. copie les photos "hero" choisies (revue visuelle) sous leur nom SEO ;
 * 2. dédoublonne (MD5) les ~80 photos de chantier et les copie renommées ;
 * 3. relève les dimensions (sharp) et émet un manifest JSON pour
 *    src/content/realisations.ts.
 *
 * Usage : node scripts/import-legacy-images.mjs
 */
import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const LEGACY_IMAGES = path.join(ROOT, "legacy", "images");
const OUT_BASE = path.join(ROOT, "public", "images");
const OUT_REALISATIONS = path.join(OUT_BASE, "realisations");

/** Photos hero (revue visuelle du 22/07/2026) → noms SEO. */
const heroes = [
  ["jcd-renov (11).jpeg", "couvreurs-chantier-villemandeur-01.jpeg"],
  ["photo_renov_toiture.jpeg", "demoussage-toiture-villemandeur-01.jpeg"],
  ["jcd-renovation-60.jpeg", "recherche-fuite-toiture-villemandeur-01.jpeg"],
  ["jcd-renov (26).jpeg", "zinguerie-gouttiere-villemandeur-01.jpeg"],
  ["image_toiture.jpeg", "renovation-toiture-villemandeur-01.jpeg"],
  ["image_toiture_acc.jpeg", "renovation-toiture-avant-apres-02.jpeg"],
  ["jcd-renov (40).jpeg", "remaniement-toiture-loiret-01.jpeg"],
];

/** Fichiers template/stock à exclure de la galerie. */
const EXCLUDED = /^(project-|slide-|index-|139|photocontact)/;

fs.mkdirSync(OUT_REALISATIONS, { recursive: true });

// 1. Heroes + logo/favicon
for (const [src, dest] of heroes) {
  fs.copyFileSync(path.join(LEGACY_IMAGES, src), path.join(OUT_REALISATIONS, dest));
}
fs.copyFileSync(
  path.join(LEGACY_IMAGES, "Logo-jcd-renovation.png"),
  path.join(OUT_BASE, "logo-jcd-renovation.png"),
);

// 2. Galerie : dédoublonnage MD5 + renommage séquentiel
const heroSources = new Set(heroes.map(([src]) => src));
const files = fs
  .readdirSync(LEGACY_IMAGES)
  .filter((f) => /\.(jpe?g)$/i.test(f))
  .filter((f) => !EXCLUDED.test(f))
  .filter((f) => !heroSources.has(f))
  .sort((a, b) => a.localeCompare(b, "fr", { numeric: true }));

const seenHashes = new Map();
const manifest = [];
let index = 0;
let duplicates = 0;

for (const file of files) {
  const buffer = fs.readFileSync(path.join(LEGACY_IMAGES, file));
  const hash = createHash("md5").update(buffer).digest("hex");
  if (seenHashes.has(hash)) {
    duplicates++;
    continue;
  }
  seenHashes.set(hash, file);
  index++;
  const newName = `chantier-couverture-loiret-${String(index).padStart(2, "0")}.jpeg`;
  fs.writeFileSync(path.join(OUT_REALISATIONS, newName), buffer);
  const meta = await sharp(buffer).metadata();
  manifest.push({
    src: `/images/realisations/${newName}`,
    width: meta.width,
    height: meta.height,
    legacyName: file,
  });
}

// Dimensions des heroes aussi
const heroManifest = [];
for (const [src, dest] of heroes) {
  const meta = await sharp(path.join(OUT_REALISATIONS, dest)).metadata();
  heroManifest.push({
    src: `/images/realisations/${dest}`,
    width: meta.width,
    height: meta.height,
    legacyName: src,
  });
}

const outJson = path.join(ROOT, "scripts", "images-manifest.json");
fs.writeFileSync(outJson, JSON.stringify({ heroes: heroManifest, gallery: manifest }, null, 2));

console.log(
  `OK — ${heroes.length} heroes, ${manifest.length} photos galerie (${duplicates} doublons ignorés)`,
);
console.log(`Manifest : ${outJson}`);
