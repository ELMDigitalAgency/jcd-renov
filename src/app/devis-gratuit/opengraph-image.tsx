import { buildOgImage, OG_SIZE } from "@/lib/og-template";

export const alt = "Devis gratuit couvreur — JCD Rénovation, Villemandeur";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function OgImage() {
  return buildOgImage({
    title: "Votre devis gratuit",
    subtitle: "Diagnostic sur place et devis détaillé sous 24-48 h, sans engagement",
    eyebrow: "Devis gratuit",
  });
}
