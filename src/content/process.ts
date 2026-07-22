import type { ProcessStep } from "@/content/types";

/** Déroulé d'une intervention type, cahier des charges §4.5 (4 cartes). */
export const processSteps: readonly ProcessStep[] = [
  {
    icon: "search",
    title: "Diagnostic gratuit",
    text: "Visite sur place à Villemandeur ou dans l'agglomération : évaluation de l'état de votre toiture, photos à l'appui.",
  },
  {
    icon: "file-text",
    title: "Devis détaillé",
    text: "Devis clair et gratuit sous 24 à 48 h, sans engagement. Chaque poste est chiffré, sans surprise.",
  },
  {
    icon: "brush",
    title: "Intervention",
    text: "Démoussage, zinguerie, réparation ou recherche de fuite : chantier planifié rapidement et laissé propre.",
  },
  {
    icon: "shield",
    title: "Contrôle qualité & garantie",
    text: "Vérification finale avec vous. Les travaux de couverture sont couverts par la garantie décennale.",
  },
] as const;
