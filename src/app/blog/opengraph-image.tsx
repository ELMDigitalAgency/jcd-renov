import { buildOgImage, OG_SIZE } from "@/lib/og-template";

export const alt = "Blog conseils toiture, zinguerie et démoussage — JCD Rénovation";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function OgImage() {
  return buildOgImage({
    title: "Nos conseils toiture & zinguerie",
    subtitle: "Prix, entretien, détection de fuites, aides : les réponses d’un artisan",
    eyebrow: "Blog",
  });
}
