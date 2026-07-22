import { buildOgImage, OG_SIZE } from "@/lib/og-template";

export const alt = "Zinguerie à Villemandeur : gouttières, solins. JCD Rénovation";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function OgImage() {
  return buildOgImage({
    title: "Zinguerie à Villemandeur",
    subtitle: "Gouttières, solins, chéneaux, noues. Garantie décennale",
    eyebrow: "Prestation",
  });
}
