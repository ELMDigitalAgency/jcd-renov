import type { BlogSlug } from "@/content/types";
import { getPostSlugs, getPostSource } from "@/lib/blog";
import { buildOgImage, OG_SIZE } from "@/lib/og-template";

/** OG dynamique par article — générée au build pour chaque slug existant. */
export const alt = "Conseil toiture du blog JCD Rénovation";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { meta } = getPostSource(slug as BlogSlug);
  return buildOgImage({
    title: meta.title,
    eyebrow: "Conseils toiture · Blog JCD Rénovation",
  });
}
