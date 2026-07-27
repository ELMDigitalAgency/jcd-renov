import { buildOgImage, OG_SIZE } from "@/lib/og-template";

export const alt = "Zone d’intervention : Loiret, Yonne, Seine-et-Marne — JCD Rénovation";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function OgImage() {
  return buildOgImage({
    title: "Notre zone d’intervention",
    subtitle: "Loiret (45), Yonne (89) et Seine-et-Marne (77), depuis Villemandeur",
    eyebrow: "Zone d’intervention",
  });
}
