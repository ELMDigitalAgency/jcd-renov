/**
 * Import du book photos client (images WhatsApp déposées à la racine) :
 * 1. sélectionne 3 photos larges pour le fond du hero + 2 heros métiers ;
 * 2. dédoublonne (MD5) l'ensemble et copie sous des noms SEO dans
 *    public/images/realisations/ ;
 * 3. relève les dimensions (sharp) et émet un manifest JSON.
 *
 * Usage : node scripts/import-book-photos.mjs
 */
import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const OUT = path.join(ROOT, "public", "images", "realisations");
const OUT_HERO = path.join(ROOT, "public", "images", "hero");
fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(OUT_HERO, { recursive: true });

const P = (name) => path.join(ROOT, name);

/** Photos larges retenues pour le fond du hero (revue visuelle). */
const heroBg = [
  ["WhatsApp Image 2026-07-23 at 22.44.59.jpeg", "hero-chantier-01.jpeg"],
  ["WhatsApp Image 2026-07-23 at 22.33.45.jpeg", "hero-chantier-02.jpeg"],
  ["WhatsApp Image 2026-07-23 at 22.33.08.jpeg", "hero-chantier-03.jpeg"],
];

/** Nouveaux heros pour les pages métiers. */
const serviceHeroes = [
  ["WhatsApp Image 2026-07-23 at 22.33.08.jpeg", "peinture-facade-villemandeur-01.jpeg"],
  ["WhatsApp Image 2026-07-23 at 22.31.07.jpeg", "charpente-villemandeur-01.jpeg"],
];

async function copyWithDims(src, destDir, destName) {
  const buf = fs.readFileSync(src);
  fs.writeFileSync(path.join(destDir, destName), buf);
  const meta = await sharp(buf).metadata();
  return { width: meta.width, height: meta.height };
}

// 1. Heros de fond
const heroManifest = [];
for (const [src, dest] of heroBg) {
  const dims = await copyWithDims(P(src), OUT_HERO, dest);
  heroManifest.push({ src: `/images/hero/${dest}`, ...dims });
}

// 2. Heros métiers (écrasent les visuels provisoires)
for (const [src, dest] of serviceHeroes) {
  await copyWithDims(P(src), OUT, dest);
}

// 3. Galerie : dédoublonnage MD5 sur les 54 images, copie renommée
const files = fs
  .readdirSync(ROOT)
  .filter((f) => /^WhatsApp Image .*\.jpe?g$/i.test(f))
  .sort((a, b) => a.localeCompare(b, "fr", { numeric: true }));

const seen = new Map();
const gallery = [];
let index = 0;
let duplicates = 0;
for (const f of files) {
  const buf = fs.readFileSync(P(f));
  const hash = createHash("md5").update(buf).digest("hex");
  if (seen.has(hash)) {
    duplicates++;
    continue;
  }
  seen.set(hash, f);
  index++;
  const name = `chantier-jcd-${String(index).padStart(2, "0")}.jpeg`;
  fs.writeFileSync(path.join(OUT, name), buf);
  const meta = await sharp(buf).metadata();
  gallery.push({ src: `/images/realisations/${name}`, width: meta.width, height: meta.height });
}

const outJson = path.join(ROOT, "scripts", "book-manifest.json");
fs.writeFileSync(outJson, JSON.stringify({ hero: heroManifest, gallery }, null, 2));

// 4. Nettoyage des originaux à la racine
for (const f of files) fs.rmSync(P(f));

console.log(
  `OK — ${heroBg.length} heros fond, ${gallery.length} photos galerie (${duplicates} doublons ignorés), originaux racine supprimés`,
);
console.log("hero:", heroManifest.map((h) => `${h.width}x${h.height}`).join(", "));
