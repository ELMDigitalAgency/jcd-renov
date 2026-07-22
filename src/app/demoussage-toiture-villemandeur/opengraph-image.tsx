import { buildOgImage, OG_SIZE } from "@/lib/og-template";

export const alt = "Démoussage de toiture à Villemandeur par JCD Rénovation";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function OgImage() {
  return buildOgImage({
    title: "Démoussage de toiture à Villemandeur",
    subtitle: "Nettoyage, traitement anti-mousse et hydrofuge. Devis gratuit",
    eyebrow: "Prestation",
  });
}
