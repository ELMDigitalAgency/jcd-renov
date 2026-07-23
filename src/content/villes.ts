import type { Ville, VilleSlug } from "@/content/types";

/**
 * Pages villes (zones secondaires) : contenu UNIQUE par ville, jamais
 * dupliqué (metas exactes de la stratégie SEO, onglet « Architecture »).
 * Chaque page renvoie vers la page pilier /couvreur-villemandeur.
 */
export const villes: readonly Ville[] = [
  {
    slug: "couvreur-zingueur-montargis",
    name: "Montargis",
    cp: "45200",
    h1: "Couvreur zingueur à Montargis",
    metaTitle: "Couvreur Zingueur à Montargis | JCD Rénovation",
    metaDescription:
      "JCD Rénovation intervient à Montargis pour vos travaux de couverture, zinguerie, démoussage et recherche de fuite.",
    enBref:
      "JCD Rénovation, couvreur zingueur basé aux portes de Montargis (45200), intervient dans toute la ville pour le démoussage, la zinguerie, la recherche de fuite et la rénovation de toiture. Devis gratuit sous 24-48 h, garantie décennale.",
    intro: [
      "Sous-préfecture du Loiret et cœur de l'agglomération Montargoise, Montargis mêle un centre ancien traversé de canaux (la « Venise du Gâtinais ») et des quartiers pavillonnaires plus récents. Deux types de bâti, deux réalités pour un couvreur : toitures anciennes à forte pente en cœur de ville, pavillons des années 60 à 90 en périphérie.",
      "Installés à quelques minutes, nous intervenons à Montargis pour toutes les prestations : démoussage de toitures exposées à l'humidité des canaux et du Loing, reprise de zinguerie sur le bâti ancien, recherche de fuite et rénovation complète de couverture. La proximité fait la différence : un diagnostic peut être planifié rapidement, sans frais de déplacement.",
    ],
    sections: [],
    atouts: [
      {
        title: "Un artisan local, pas un réseau national",
        text: "Vous traitez directement avec l'artisan qui réalise le chantier : devis honnête, conseils francs, chantier suivi de bout en bout.",
      },
      {
        title: "Habitué au bâti Montargois",
        text: "Toitures anciennes du centre, pavillons d'après-guerre, tuiles mécaniques ou terre cuite : nous adaptons méthode et matériaux à votre maison.",
      },
      {
        title: "Intervention rapide",
        text: "Basés aux portes de Montargis, nous planifions vite, et en priorité en cas de fuite active.",
      },
    ],
    faq: [
      {
        question: "Intervenez-vous dans tout Montargis ?",
        answer:
          "Oui : centre-ville, La Chaussée, Vésines et tous les quartiers de Montargis (45200), ainsi que les communes limitrophes (Villemandeur, Amilly, Chalette-sur-Loing, Cepoy et Paucourt).",
      },
      {
        question: "Le devis est-il gratuit à Montargis ?",
        answer:
          "Oui, comme partout dans l'agglomération Montargoise : diagnostic sur place et devis détaillé sous 24 à 48 h, gratuits et sans engagement.",
      },
    ],
  },
  {
    slug: "couvreur-amilly",
    name: "Amilly",
    cp: "45200",
    h1: "Couvreur à Amilly",
    metaTitle: "Couvreur à Amilly | JCD Rénovation",
    metaDescription:
      "Couvreur qualifié à Amilly : couverture, zinguerie, démoussage, recherche de fuite. Devis gratuit sous 48h.",
    enBref:
      "JCD Rénovation intervient à Amilly (45200) pour tous vos travaux de toiture : démoussage, zinguerie, recherche de fuite, réparation et rénovation de couverture. Artisan voisin de Villemandeur, devis gratuit sous 24-48 h, garantie décennale.",
    intro: [
      "Commune résidentielle limitrophe de Villemandeur et Montargis, Amilly s'est largement développée à partir des années 1970 : ses quartiers pavillonnaires alignent des toitures en tuiles mécaniques qui atteignent aujourd'hui 40 à 50 ans : l'âge où le démoussage régulier et la surveillance des points d'étanchéité deviennent indispensables.",
      "Voisins directs, nous intervenons à Amilly aussi facilement qu'à Villemandeur : nettoyage et traitement de toiture, remplacement de gouttières, recherche de fuite, remaniement ou rénovation complète. Les environnements arborés du bourg et des bords du Loing favorisent la mousse : un contrôle tous les deux ans évite les mauvaises surprises.",
    ],
    sections: [],
    atouts: [
      {
        title: "Voisin immédiat",
        text: "Amilly touche Villemandeur : déplacement rapide, diagnostic gratuit planifié sous quelques jours.",
      },
      {
        title: "Spécialiste des pavillons des années 70-90",
        text: "Tuiles mécaniques vieillissantes, gouttières d'origine, solins fatigués : nous connaissons ces toitures par cœur.",
      },
      {
        title: "Devis clair sous 24-48 h",
        text: "Un chiffrage détaillé poste par poste, gratuit et sans engagement.",
      },
    ],
    faq: [
      {
        question: "Quels sont vos délais d'intervention à Amilly ?",
        answer:
          "Le diagnostic gratuit est généralement planifié sous quelques jours, le devis envoyé sous 24 à 48 h. En cas de fuite active, l'intervention de mise hors d'eau est prioritaire.",
      },
      {
        question: "Faites-vous le démoussage des toitures exposées aux arbres ?",
        answer:
          "Oui, c'est une configuration fréquente à Amilly. Nous adaptons le traitement (anti-mousse renforcé, hydrofuge conseillé) et nettoyons les gouttières encombrées de feuilles dans la même intervention.",
      },
    ],
  },
  {
    slug: "couvreur-chalette-sur-loing",
    name: "Chalette-sur-Loing",
    cp: "45120",
    h1: "Couvreur à Chalette-sur-Loing",
    metaTitle: "Couvreur à Chalette-sur-Loing | JCD Rénovation",
    metaDescription:
      "JCD Rénovation, votre couvreur zingueur à Chalette-sur-Loing. Démoussage, zinguerie, recherche de fuite.",
    enBref:
      "JCD Rénovation, couvreur zingueur de l'agglomération Montargoise, intervient à Chalette-sur-Loing (45120) : démoussage de toiture, zinguerie, recherche de fuite, réparation et rénovation de couverture. Devis gratuit sous 24-48 h, garantie décennale.",
    intro: [
      "Parmi les plus grandes communes de l'agglomération Montargoise, Chalette-sur-Loing longe le Loing et le canal de Briare : un environnement humide qui accélère le développement des mousses et lichens sur les toitures, particulièrement dans les quartiers proches de l'eau et du lac de Chalette.",
      "Nous intervenons dans toute la commune, du Bourg à Vésines en passant par les quartiers pavillonnaires, pour le démoussage et le traitement des couvertures, la réparation ou le remplacement de gouttières, la recherche de fuite et les travaux de couverture. Un habitat souvent construit entre les années 50 et 80, dont les toitures méritent aujourd'hui une vraie attention.",
    ],
    sections: [],
    atouts: [
      {
        title: "Proximité de l'agglomération",
        text: "Chalette est à moins de dix minutes de notre zone de base : intervention et suivi de chantier faciles.",
      },
      {
        title: "Environnement humide maîtrisé",
        text: "Bords du Loing, canal, lac : nous traitons régulièrement des toitures très exposées à la mousse et adaptons les traitements en conséquence.",
      },
      {
        title: "Toutes prestations toiture",
        text: "Du simple remplacement de tuiles à la rénovation complète, avec garantie décennale.",
      },
    ],
    faq: [
      {
        question: "Pourquoi les toitures de Chalette-sur-Loing verdissent-elles vite ?",
        answer:
          "La proximité du Loing, du canal et du lac entretient une humidité ambiante favorable aux mousses et algues, surtout sur les pans orientés nord. Un démoussage avec traitement préventif tous les 5 à 8 ans garde la couverture saine.",
      },
      {
        question: "Intervenez-vous aussi pour une simple réparation ?",
        answer:
          "Bien sûr : remplacement de quelques tuiles, reprise d'un solin, réparation de gouttière. Aucune intervention n'est trop petite, et le devis reste gratuit.",
      },
    ],
  },
] as const;

export function getVille(slug: VilleSlug): Ville {
  const ville = villes.find((v) => v.slug === slug);
  if (!ville) {
    throw new Error(`Ville inconnue : ${slug}`);
  }
  return ville;
}
