import { buildOgImage, OG_SIZE } from "@/lib/og-template";

export const alt = "À propos de JCD Rénovation, couvreur zingueur à Villemandeur";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function OgImage() {
  return buildOgImage({
    title: "Qui sommes-nous ?",
    subtitle: "Artisan couvreur zingueur à Villemandeur, 14 ans d’expérience, décennale",
    eyebrow: "À propos",
  });
}
