import { buildOgImage, OG_SIZE } from "@/lib/og-template";

export const alt = "Couvreur à Villemandeur : pose et rénovation de toiture — JCD Rénovation";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function OgImage() {
  return buildOgImage({
    title: "Couvreur à Villemandeur",
    subtitle: "Pose, rénovation et réparation de toiture — garantie décennale",
    eyebrow: "Prestation",
  });
}
