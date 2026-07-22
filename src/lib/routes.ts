import { prestations } from "@/content/prestations";
import { blogSlugs } from "@/content/types";
import { villes } from "@/content/villes";

/**
 * Registre canonique des routes du site — consommé par app/sitemap.ts et par
 * les tests d'intégrité (redirections 301, couverture sitemap).
 */
export const staticRoutes = [
  "/",
  "/zone-intervention",
  "/realisations",
  "/avis-clients",
  "/a-propos",
  "/blog",
  "/devis-gratuit",
  "/mentions-legales",
  "/politique-de-confidentialite",
] as const;

export function getPrestationRoutes(): string[] {
  return prestations.map((p) => `/${p.slug}`);
}

export function getVilleRoutes(): string[] {
  return villes.map((v) => `/${v.slug}`);
}

export function getBlogRoutes(): string[] {
  return blogSlugs.map((slug) => `/blog/${slug}`);
}

/** Toutes les routes indexables du site (31 pages). */
export function getAllRoutes(): string[] {
  return [...staticRoutes, ...getPrestationRoutes(), ...getVilleRoutes(), ...getBlogRoutes()];
}
