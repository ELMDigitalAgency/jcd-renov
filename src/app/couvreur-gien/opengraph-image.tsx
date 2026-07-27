import { buildOgImage, OG_SIZE } from "@/lib/og-template";

export const alt = "Couvreur à Gien (45500) — JCD Rénovation";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function OgImage() {
  return buildOgImage({
    title: "Couvreur à Gien",
    subtitle: "Couverture, zinguerie, démoussage. Devis gratuit sous 24-48 h",
    eyebrow: "Zone d’intervention",
  });
}
