/**
 * Types du contenu éditorial. Une seule source de vérité : les pages et
 * composants consomment ces structures, jamais de texte en dur dans l'UI.
 */

/** Clés d'icônes, mappées vers @mui/icons-material dans ServiceIcon (jamais de
 * composant React dans les données : non sérialisable vers les îlots client). */
export type IconKey =
  | "search"
  | "file-text"
  | "brush"
  | "shield"
  | "droplets"
  | "home"
  | "wrench"
  | "phone"
  | "clock"
  | "euro"
  | "building"
  | "map-pin"
  | "sparkles"
  | "alert-triangle";

export type FaqItem = {
  question: string;
  answer: string;
};

export const prestationSlugs = [
  "demoussage-toiture-villemandeur",
  "recherche-de-fuite-toiture-villemandeur",
  "zinguerie-villemandeur",
  "couvreur-villemandeur",
] as const;

export type PrestationSlug = (typeof prestationSlugs)[number];

export const blogSlugs = [
  "prix-demoussage-toiture-m2",
  "detecter-fuite-toiture-signes",
  "methodes-recherche-fuite-toiture",
  "mousse-lichen-algues-toiture",
  "traitement-hydrofuge-toiture-utilite",
  "zinguerie-solins-noues-cheneaux",
  "gouttieres-bouchees-causes-solutions",
  "entretien-toiture-tuile-ardoise-zinc",
  "garantie-decennale-couvreur",
  "calendrier-entretien-toiture-villemandeur",
  "arnaque-demoussage-toiture",
  "prix-recherche-fuite-toiture",
  "entretien-velux-etancheite",
  "infiltration-eau-apres-orage",
  "aides-renovation-toiture-2026",
] as const;

export type BlogSlug = (typeof blogSlugs)[number];

export type TarifRow = {
  label: string;
  fourchette: string;
  unite: string;
};

export type Prestation = {
  slug: PrestationSlug;
  /** Libellé court pour le menu et les cartes ("Démoussage"). */
  name: string;
  /** Libellé complet pour la nav déroulante. */
  nav: string;
  /** H1 exact : stratégie SEO (Excel, onglet Architecture). */
  h1: string;
  metaTitle: string;
  metaDescription: string;
  /** Résumé "En bref" en haut de page : extraction GEO (IA). */
  enBref: string;
  intro: string;
  heroImage: string;
  heroImageAlt: string;
  consiste: {
    title: string;
    paragraphs: string[];
    points: { title: string; text: string }[];
  };
  signes: {
    title: string;
    items: string[];
  };
  tarifs: {
    title: string;
    rows: TarifRow[];
    facteurs: string[];
    disclaimer: string;
  };
  faq: FaqItem[];
  /** Maillage interne vers le blog (Excel, onglet Maillage interne). */
  linkedArticles: BlogSlug[];
  icon: IconKey;
  /** Ancre de lien recommandée pour le maillage interne. */
  ancre: string;
};

export type VilleSlug =
  | "couvreur-zingueur-montargis"
  | "couvreur-amilly"
  | "couvreur-chalette-sur-loing";

export type Ville = {
  slug: VilleSlug;
  name: string;
  cp: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  enBref: string;
  /** Paragraphes d'ancrage local : contenu unique par ville, jamais dupliqué. */
  intro: string[];
  atouts: { title: string; text: string }[];
  faq: FaqItem[];
};

export type Avis = {
  author: string;
  text: string;
  rating: number;
  source: string;
};

export type ProcessStep = {
  icon: IconKey;
  title: string;
  text: string;
};

export type Garantie = {
  icon: IconKey;
  title: string;
  text: string;
};

export type CommuneStatut = "principale" | "secondaire" | "tertiaire";

export type Commune = {
  name: string;
  cp?: string;
  statut: CommuneStatut;
  /** Route de la page dédiée si elle existe. */
  href?: string;
};

export type RealisationCategory = "couverture" | "demoussage" | "zinguerie" | "charpente";

export type RealisationPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
  category: RealisationCategory;
};
