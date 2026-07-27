import { buildOgImage, OG_SIZE } from "@/lib/og-template";

export const alt = "Peinture et ravalement de façade à Villemandeur par JCD Rénovation";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function OgImage() {
  return buildOgImage({
    title: "Peinture & ravalement à Villemandeur",
    subtitle: "Façades, murs intérieurs, boiseries. Devis gratuit",
    eyebrow: "Prestation",
  });
}
