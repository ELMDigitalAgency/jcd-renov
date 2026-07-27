import { buildOgImage, OG_SIZE } from "@/lib/og-template";

export const alt = "Avis clients — JCD Rénovation, couvreur à Villemandeur";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function OgImage() {
  return buildOgImage({
    title: "Ce que disent nos clients",
    subtitle: "Avis de clients accompagnés dans le Loiret et l’agglomération Montargoise",
    eyebrow: "Avis clients",
  });
}
