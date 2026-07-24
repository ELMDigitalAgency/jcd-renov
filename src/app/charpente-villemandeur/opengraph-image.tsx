import { buildOgImage, OG_SIZE } from "@/lib/og-template";

export const alt = "Charpente à Villemandeur : réparation et rénovation par JCD Rénovation";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function OgImage() {
  return buildOgImage({
    title: "Charpente à Villemandeur",
    subtitle: "Réparation, traitement et rénovation de charpente. Garantie décennale",
    eyebrow: "Prestation",
  });
}
