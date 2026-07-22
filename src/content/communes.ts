import type { Commune } from "@/content/types";

/**
 * Zones géographiques ciblées — stratégie SEO (Excel, onglet Zones
 * géographiques). Villemandeur = ville principale ; communes de la CA
 * Montargoise et Rives du Loing = zones secondaires/tertiaires.
 */
export const communes: readonly Commune[] = [
  { name: "Villemandeur", cp: "45700", statut: "principale", href: "/couvreur-villemandeur" },
  {
    name: "Montargis",
    cp: "45200",
    statut: "secondaire",
    href: "/couvreur-zingueur-montargis",
  },
  { name: "Amilly", cp: "45200", statut: "secondaire", href: "/couvreur-amilly" },
  {
    name: "Chalette-sur-Loing",
    cp: "45120",
    statut: "secondaire",
    href: "/couvreur-chalette-sur-loing",
  },
  { name: "Cepoy", cp: "45120", statut: "tertiaire" },
  { name: "Corquilleroy", cp: "45120", statut: "tertiaire" },
  { name: "Paucourt", cp: "45200", statut: "tertiaire" },
  { name: "Pannes", cp: "45700", statut: "tertiaire" },
  { name: "Solterre", cp: "45700", statut: "tertiaire" },
  { name: "Vimory", cp: "45700", statut: "tertiaire" },
] as const;
