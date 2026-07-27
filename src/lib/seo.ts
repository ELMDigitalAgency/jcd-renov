import type { Metadata } from "next";

import { siteConfig } from "@/site.config";

type BuildMetadataInput = {
  title: string;
  description: string;
  /** Chemin canonique de la page, ex. "/demoussage-toiture". */
  path: string;
  /** Type OpenGraph — "article" pour le blog. */
  ogType?: "website" | "article";
};

/**
 * Helper unique de métadonnées : impose un canonical sur CHAQUE page
 * (l'oubli de canonical était un des défauts de l'ancien site).
 * `metadataBase` est défini dans le root layout → les chemins relatifs
 * deviennent des URLs absolues https://jcdrenovation.fr/...
 */
export function buildMetadata({ title, description, path, ogType = "website" }: BuildMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: "fr_FR",
      type: ogType,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
