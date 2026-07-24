/**
 * Configuration centrale du site : UNIQUE source de vérité pour le NAP
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
  email: "contact@jcd-renovation.fr",

  /** Adresse réelle confirmée par le client (siège à Villemandeur). */
  address: {
    street: "3 bis rue des Plantes",
    postalCode: "45700",
    city: "Villemandeur",
    region: "Centre-Val de Loire",
    country: "FR",
  },

  /** Horaires d'ouverture confirmés par le client. */
  openingHours: "Du lundi au samedi, 8h30 à 19h",

  /** Ville principale de la stratégie SEO (H1, Google Business Profile). */
  mainCity: "Villemandeur",
  mainCityCp: "45700",

  /** Départements couverts (affichage + areaServed du schéma LocalBusiness). */
  departments: ["Loiret (45)", "Yonne (89)", "Seine-et-Marne (77)"],

  /** Villes clés de la zone (agglomération Montargoise + villes des 3 départements). */
  serviceArea: [
    "Villemandeur",
    "Montargis",
    "Amilly",
    "Chalette-sur-Loing",
    "Cepoy",
    "Corquilleroy",
    "Pannes",
    "Ferrières-en-Gâtinais",
    "Gien",
    "Château-Renard",
    "Sens",
    "Villeneuve-sur-Yonne",
    "Joigny",
    "Nemours",
    "Souppes-sur-Loing",
    "Montereau-Fault-Yonne",
  ],

  /**
   * Bandeau statistiques du hero (cahier des charges §4.2 : « chiffres réels à
   * faire valider par le client, ne jamais inventer »).
   * Les valeurs non validées proviennent de l'ancien site (revendications des
   * agences précédentes) et DOIVENT être confirmées avant mise en ligne.
   */
  stats: [
    { value: "14 ans", label: "d'expérience en couverture", validatedByClient: true },
    { value: "24-48 h", label: "pour recevoir votre devis gratuit", validatedByClient: true },
    { value: "10 ans", label: "de garantie décennale", validatedByClient: true },
  ],

  decennale: true,

  /** Réseaux sociaux : null = non rendu (à demander au client). */
  socials: {
    facebook: null,
    instagram: null,
  } as Record<string, string | null>,

  /** Fiche Google Business Profile : null tant que non créée/confirmée. */
  googleBusinessUrl: null as string | null,

  /** Note Google réelle : null = jamais affichée ni injectée en schema. */
  googleRating: null as { value: number; count: number } | null,
} as const;

export type SiteConfig = typeof siteConfig;

/**
 * Points à valider avec le client AVANT mise en ligne (cahier des charges §8).
 * Repris et détaillés dans A-VALIDER-CLIENT.md à la racine.
 */
export const CLIENT_TODOS: readonly string[] = [
  "Créer la boîte email contact@jcd-renovation.fr (hébergeur du domaine) et vérifier le domaine dans Resend, voir DEPLOIEMENT.md",
  "Créer/valider la fiche Google Business Profile à l'adresse 3 bis rue des Plantes, 45700 Villemandeur (justificatif de domicile disponible)",
  "Récupérer et intégrer le book photos complet envoyé par le client (démoussage, zinguerie, recherche de fuite, peinture, charpente)",
  "Note Google réelle une fois la fiche créée et les premiers avis obtenus (sinon aucune note affichée)",
  "Attestations décennale + RC pro à jour à tenir prêtes (fournies avec les devis)",
] as const;
