import type { MetadataRoute } from "next";

import { getAllPosts } from "@/lib/blog";
import { getPrestationRoutes, getVilleRoutes, staticRoutes } from "@/lib/routes";
import { siteConfig } from "@/site.config";

/** Priorités SEO par type de page (stratégie Excel : prestations = pages phares). */
const staticPriorities: Record<string, number> = {
  "/": 1,
  "/devis-gratuit": 0.9,
  "/zone-intervention": 0.6,
  "/realisations": 0.6,
  "/avis-clients": 0.5,
  "/a-propos": 0.4,
  "/blog": 0.8,
  "/mentions-legales": 0.1,
  "/politique-de-confidentialite": 0.1,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: route === "/" ? siteConfig.url : `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: route === "/blog" ? "weekly" : "monthly",
    priority: staticPriorities[route] ?? 0.5,
  }));

  const prestationEntries: MetadataRoute.Sitemap = getPrestationRoutes().map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const villeEntries: MetadataRoute.Sitemap = getVilleRoutes().map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Articles réellement publiés (fichiers .mdx présents, non-draft).
  const blogEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.updated ?? post.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticEntries, ...prestationEntries, ...villeEntries, ...blogEntries];
}
