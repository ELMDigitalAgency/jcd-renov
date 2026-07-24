import type { Avis } from "@/content/types";

/**
 * Les 9 avis clients réels (uniques) repris MOT POUR MOT de l'ancien site
 * jcdrenovation.fr (un doublon « Palfroy » retiré). Fautes d'origine
 * conservées volontairement : ce sont des avis authentiques (cahier des
 * charges §4.10 : « Reprendre mot pour mot les avis existants »).
 */
export const avisClients: readonly Avis[] = [
  {
    author: "Lolo",
    text: "Très bonne entreprise travail soigné patron et employés très sympathiques et à l écoute du client.",
    rating: 5,
    source: "Site jcdrenovation.fr",
  },
  {
    author: "RV",
    text: "Équipe sympathique, compétences professionnelles sûres, prix raisonnable, émet de bons conseils pour améliorer le bâti existant. Force de proposition pour effectuer un travail pérenne. Entreprise que je recommande.",
    rating: 5,
    source: "Site jcdrenovation.fr",
  },
  {
    author: "Laurence de Nogent",
    text: "Professionnel de très grande qualité. Travail soigné. À répondu à mes attentes et fourni de bons conseils. Prix très compétitif. Je recommande et ferais appel à cette entreprise sans hésiter.",
    rating: 5,
    source: "Site jcdrenovation.fr",
  },
  {
    author: "lodabulle",
    text: "Le résultat est parfait et la fin de chantier aussi avec karcher sur façade et salon de jardin pour nettoyage de la mousse tombée du toit. Prix très correct avec un artisan très pro et très sympa. Je recommande à 100%.",
    rating: 5,
    source: "Site jcdrenovation.fr",
  },
  {
    author: "Yann",
    text: "Entreprise dirigée par un patron à votre écoute. Les prestations sont de qualités avec des prix très abordables. Je recommande vivement.",
    rating: 5,
    source: "Site jcdrenovation.fr",
  },
  {
    author: "Palfroy",
    text: "Personne très sympathique, très professionnelle. Travaux demandés très bien réalisés à un prix très intéressant. Je recommande vivement.",
    rating: 5,
    source: "Site jcdrenovation.fr",
  },
  {
    author: "DC45",
    text: "Très bonne entreprise qualifiée, reactif, et compétitive. Je recommande cette entreprise.",
    rating: 5,
    source: "Site jcdrenovation.fr",
  },
  {
    author: "Ticia",
    text: "Personne sympathique, efficace, compétent. Tavaux effectués proprement. Cette personne est à l'écoute et professionnel. Prix raisonnable. Je recommande.",
    rating: 5,
    source: "Site jcdrenovation.fr",
  },
] as const;
