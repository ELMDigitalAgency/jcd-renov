import { buildOgImage, OG_SIZE } from "@/lib/og-template";

/** Image OG par défaut — héritée par toutes les pages sans OG dédiée. */
export const alt = "JCD Rénovation, Couvreur & Zingueur à Villemandeur (45700)";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function OgImage() {
  return buildOgImage({
    title: "Couvreur & Zingueur à Villemandeur",
    subtitle: "Démoussage · Zinguerie · Recherche de fuite · Couverture",
    eyebrow: "Loiret (45700) · Agglomération Montargoise",
  });
}
