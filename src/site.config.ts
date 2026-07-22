/**
 * Configuration centrale du site — UNIQUE source de vérité pour le NAP
 * (Nom / Adresse / Téléphone), les stats et les liens externes.
 *
 * Règle d'or (cahier des charges §8) : ne JAMAIS inventer un chiffre, une
 * certification ou une note. Tout élément non confirmé par le client est
 * flagué `validatedByClient: false` et listé dans CLIENT_TODOS + A-VALIDER-CLIENT.md.
 */

export const siteConfig = {
  name: "JCD Rénovation",
  legalName: "JCD Rénovation",
  siret: "535 075 337 00035",
  url: "https://www.jcd-renovation.fr",
  /** Baseline courte (footer, OG par défaut). */
  tagline: "Couvreur & zingueur à Villemandeur (45700)",
  description:
    "JCD Rénovation, couvreur et zingueur qualifié à Villemandeur : démoussage, zinguerie, recherche de fuite. Devis gratuit sous 24-48h.",

  phone: "07 49 10 06 56",
  phoneHref: "tel:+33749100656",
  phoneInternational: "+33749100656",
  email: "contact@jcd-renovation.com",

  /** Adresse légale (mentions légales de l'ancien site — à faire confirmer). */
  address: {
    street: "815 route de St Maurice",
    postalCode: "45230",
    city: "La Chapelle-sur-Aveyron",
    region: "Centre-Val de Loire",
    country: "FR",
  },

  /** Ville principale de la stratégie SEO (H1, Google Business Profile). */
  mainCity: "Villemandeur",
  mainCityCp: "45700",

  /** Zone d'intervention affichée (agglomération Montargoise et Rives du Loing). */
  serviceArea: [
    "Villemandeur",
    "Montargis",
    "Amilly",
    "Chalette-sur-Loing",
    "Cepoy",
    "Corquilleroy",
    "Paucourt",
    "Pannes",
    "Solterre",
    "Vimory",
  ],

  /**
   * Bandeau statistiques du hero (cahier des charges §4.2 : « chiffres réels à
   * faire valider par le client — ne jamais inventer »).
   * Les valeurs non validées proviennent de l'ancien site (revendications des
   * agences précédentes) et DOIVENT être confirmées avant mise en ligne.
   */
  stats: [
    { value: "14 ans", label: "d'expérience en couverture", validatedByClient: false },
    { value: "24-48 h", label: "pour recevoir votre devis gratuit", validatedByClient: true },
    { value: "10 ans", label: "de garantie décennale", validatedByClient: true },
  ],

  decennale: true,

  /** Réseaux sociaux — null = non rendu (à demander au client). */
  socials: {
    facebook: null,
    instagram: null,
  } as Record<string, string | null>,

  /** Fiche Google Business Profile — null tant que non créée/confirmée. */
  googleBusinessUrl: null as string | null,

  /** Note Google réelle — null = jamais affichée ni injectée en schema. */
  googleRating: null as { value: number; count: number } | null,
} as const;

export type SiteConfig = typeof siteConfig;

/**
 * Points à valider avec le client AVANT mise en ligne (cahier des charges §8).
 * Repris et détaillés dans A-VALIDER-CLIENT.md à la racine.
 */
export const CLIENT_TODOS: readonly string[] = [
  "Confirmer les années d'expérience réelles (l'ancien site affichait « 14 ans » — non vérifié)",
  "Confirmer l'adresse à afficher et l'adresse du futur Google Business Profile (adresse légale actuelle : La Chapelle-sur-Aveyron, stratégie SEO centrée Villemandeur)",
  "Confirmer l'email de réception des devis (contact@jcd-renovation.com ou créer contact@jcd-renovation.fr)",
  "Certifications : le client dispose-t-il de RGE / Qualibat ? (des concurrents locaux les affichent — ne rien afficher sans justificatif)",
  "Note Google réelle si un profil existe (sinon en créer un — voir DEPLOIEMENT.md)",
  "Nouvelles photos démoussage / zinguerie / recherche de fuite annoncées par le client",
  "Réseaux sociaux réels (Facebook/Instagram) ou confirmation qu'il n'y en a pas",
  "Horaires d'ouverture à afficher (non renseignés sur les anciens sites)",
  "Confirmer l'abandon définitif des zones historiques (Orléans, Nemours, Sully-sur-Loire, Sens) — redirections 301 en place",
  "L'avis client de « Julio » mentionne la taille de haies/élagage (ancienne activité espaces verts) — le conserver ?",
] as const;
