import { buildOgImage, OG_SIZE } from "@/lib/og-template";

export const alt = "Couverture de toiture : pose, rénovation, réparation. JCD Rénovation";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function OgImage() {
  return buildOgImage({
    title: "Couverture de toiture",
    subtitle: "Pose, rénovation, réparation. Tuile, ardoise, zinc. Garantie décennale",
    eyebrow: "Prestation",
  });
}
