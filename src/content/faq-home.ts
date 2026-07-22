import type { FaqItem } from "@/content/types";

/**
 * FAQ de la page d'accueil : les 6 questions du cahier des charges §4.8,
 * réponses factuelles et autonomes (extraction GEO + schema.org FAQPage).
 */
export const faqHome: readonly FaqItem[] = [
  {
    question: "Quel est le prix d'un démoussage de toiture au m² ?",
    answer:
      "En 2026, un démoussage de toiture coûte en moyenne 15 à 35 € par m² : 15 à 25 €/m² pour un nettoyage avec traitement anti-mousse, 25 à 35 €/m² avec traitement hydrofuge. Le prix varie selon la surface, la pente, l'accessibilité et l'état d'encrassement. JCD Rénovation établit un devis gratuit après diagnostic sur place à Villemandeur et dans l'agglomération Montargoise.",
  },
  {
    question: "Comment savoir d'où vient une fuite dans ma toiture ?",
    answer:
      "Une tache au plafond n'indique presque jamais le point d'entrée réel : l'eau circule le long de la charpente avant de traverser. Les zones à inspecter en priorité sont les solins, les noues, le faîtage et le pourtour des fenêtres de toit. Une recherche de fuite professionnelle (inspection des combles et de la couverture, test d'arrosage si nécessaire) permet de localiser précisément l'origine avant de réparer.",
  },
  {
    question: "Intervenez-vous en urgence en cas de fuite ?",
    answer:
      "Oui. En cas d'infiltration active, JCD Rénovation intervient en priorité à Villemandeur, Montargis, Amilly et Chalette-sur-Loing pour mettre la toiture hors d'eau (bâchage d'urgence si nécessaire), puis planifie la réparation durable. Appelez directement le 07 49 10 06 56.",
  },
  {
    question: "Quelles villes couvrez-vous autour de Villemandeur ?",
    answer:
      "JCD Rénovation intervient à Villemandeur (45700) et dans toute l'agglomération Montargoise : Montargis, Amilly, Chalette-sur-Loing, Cepoy, Corquilleroy, Paucourt, Pannes, Solterre et Vimory, soit un rayon d'environ 20 km.",
  },
  {
    question: "Le devis est-il vraiment gratuit et sans engagement ?",
    answer:
      "Oui. Le diagnostic sur place et le devis sont entièrement gratuits et sans engagement. Vous recevez un devis détaillé sous 24 à 48 h après la visite, valable pour comparer sereinement. Aucun paiement n'est demandé avant votre accord écrit.",
  },
  {
    question: "Quelles garanties sur vos travaux de couverture et zinguerie ?",
    answer:
      "Tous les travaux de couverture et de zinguerie réalisés par JCD Rénovation sont couverts par la garantie décennale (10 ans), en plus de la responsabilité civile professionnelle. L'attestation d'assurance est fournie avec le devis sur simple demande.",
  },
] as const;
