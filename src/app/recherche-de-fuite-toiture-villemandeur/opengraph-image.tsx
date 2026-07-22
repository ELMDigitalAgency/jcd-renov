import { buildOgImage, OG_SIZE } from "@/lib/og-template";

export const alt = "Recherche de fuite en toiture à Villemandeur par JCD Rénovation";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function OgImage() {
  return buildOgImage({
    title: "Recherche de fuite en toiture à Villemandeur",
    subtitle: "Localisation précise de l'infiltration, intervention rapide",
    eyebrow: "Prestation",
  });
}
