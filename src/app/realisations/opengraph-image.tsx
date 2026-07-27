import { buildOgImage, OG_SIZE } from "@/lib/og-template";

export const alt = "Nos réalisations : toitures, zinguerie, charpente — JCD Rénovation";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function OgImage() {
  return buildOgImage({
    title: "Nos réalisations",
    subtitle: "Chantiers réels de couverture, zinguerie et charpente dans le Loiret",
    eyebrow: "Réalisations",
  });
}
