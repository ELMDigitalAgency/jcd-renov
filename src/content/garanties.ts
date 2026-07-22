import type { Garantie } from "@/content/types";

/** Section « votre artisan de confiance », cahier des charges §4.7 (3 items). */
export const garanties: readonly Garantie[] = [
  {
    icon: "clock",
    title: "Intervention rapide",
    text: "Devis sous 24-48 h et chantiers planifiés vite. En cas de fuite, nous intervenons en priorité dans l'agglomération Montargoise.",
  },
  {
    icon: "shield",
    title: "Garantie décennale",
    text: "Vos travaux de couverture et de zinguerie sont couverts 10 ans par notre assurance décennale.",
  },
  {
    icon: "euro",
    title: "Tarifs compétitifs",
    text: "Devis gratuit, détaillé et transparent : vous savez exactement ce que vous payez, sans surprise en fin de chantier.",
  },
] as const;
