import type { Commune, Departement } from "@/content/types";

/**
 * Zones d'intervention : Villemandeur = ville principale (cœur SEO), puis les
 * grandes villes voisines avec page dédiée, puis les communes desservies dans
 * les trois départements couverts : Loiret (45), Yonne (89), Seine-et-Marne (77).
 */
export const communes: readonly Commune[] = [
  // Ville principale
  {
    name: "Villemandeur",
    cp: "45700",
    statut: "principale",
    departement: "45",
    href: "/couvreur-villemandeur",
  },

  // Grandes villes voisines avec page dédiée
  {
    name: "Montargis",
    cp: "45200",
    statut: "secondaire",
    departement: "45",
    href: "/couvreur-montargis",
  },
  { name: "Amilly", cp: "45200", statut: "secondaire", departement: "45", href: "/couvreur-amilly" },
  {
    name: "Chalette-sur-Loing",
    cp: "45120",
    statut: "secondaire",
    departement: "45",
    href: "/couvreur-chalette-sur-loing",
  },

  // Loiret (45)
  { name: "Cepoy", cp: "45120", statut: "tertiaire", departement: "45" },
  { name: "Corquilleroy", cp: "45120", statut: "tertiaire", departement: "45" },
  { name: "Paucourt", cp: "45200", statut: "tertiaire", departement: "45" },
  { name: "Pannes", cp: "45700", statut: "tertiaire", departement: "45" },
  { name: "Solterre", cp: "45700", statut: "tertiaire", departement: "45" },
  { name: "Vimory", cp: "45700", statut: "tertiaire", departement: "45" },
  { name: "Ferrières-en-Gâtinais", cp: "45210", statut: "tertiaire", departement: "45" },
  { name: "Château-Renard", cp: "45220", statut: "tertiaire", departement: "45" },
  { name: "Gien", cp: "45500", statut: "secondaire", departement: "45", href: "/couvreur-gien" },
  { name: "Nogent-sur-Vernisson", cp: "45290", statut: "tertiaire", departement: "45" },

  // Yonne (89)
  { name: "Sens", cp: "89100", statut: "secondaire", departement: "89", href: "/couvreur-sens" },
  { name: "Villeneuve-sur-Yonne", cp: "89500", statut: "tertiaire", departement: "89" },
  { name: "Joigny", cp: "89300", statut: "tertiaire", departement: "89" },
  { name: "Charny", cp: "89120", statut: "tertiaire", departement: "89" },

  // Seine-et-Marne (77)
  { name: "Nemours", cp: "77140", statut: "tertiaire", departement: "77" },
  { name: "Souppes-sur-Loing", cp: "77460", statut: "tertiaire", departement: "77" },
  { name: "Château-Landon", cp: "77570", statut: "tertiaire", departement: "77" },
  { name: "Montereau-Fault-Yonne", cp: "77130", statut: "tertiaire", departement: "77" },
] as const;

/** Libellés des départements couverts, pour l'affichage de la zone. */
export const departements: readonly { code: Departement; nom: string }[] = [
  { code: "45", nom: "Loiret" },
  { code: "89", nom: "Yonne" },
  { code: "77", nom: "Seine-et-Marne" },
] as const;
