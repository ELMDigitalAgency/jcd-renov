import type { Prestation, PrestationSlug } from "@/content/types";

/**
 * Les 4 prestations : contenu des pages dédiées (cahier des charges §5,
 * metas exactes de la stratégie SEO, onglet « Architecture du site »).
 * Fourchettes de prix = données de marché France 2026 (indicatives, avec
 * disclaimer) ; jamais de chiffre présenté comme un engagement du client.
 */
export const prestations: readonly Prestation[] = [
  {
    slug: "demoussage-toiture-villemandeur",
    name: "Démoussage",
    nav: "Démoussage de toiture",
    h1: "Démoussage de toiture à Villemandeur",
    metaTitle: "Démoussage de Toiture à Villemandeur | JCD Rénovation",
    metaDescription:
      "Démoussage et traitement hydrofuge de toiture à Villemandeur et alentours. Diagnostic et devis gratuits, intervention rapide.",
    enBref:
      "Le démoussage d'une toiture coûte en moyenne 15 à 35 € par m² en 2026 (nettoyage + traitement anti-mousse, hydrofuge en option). JCD Rénovation intervient à Villemandeur (45700) et dans l'agglomération Montargoise : diagnostic gratuit sur place, devis sous 24-48 h.",
    intro:
      "Mousse, lichens et algues retiennent l'humidité contre vos tuiles et les dégradent année après année. Un démoussage régulier prolonge la durée de vie de votre toiture et évite des réparations bien plus coûteuses.",
    heroImage: "/images/realisations/demoussage-toiture-villemandeur-01.jpeg",
    heroImageAlt: "Démoussage de toiture à Villemandeur par JCD Rénovation",
    consiste: {
      title: "En quoi consiste un démoussage de toiture ?",
      paragraphs: [
        "Un démoussage complet se déroule en trois temps : le nettoyage de la couverture (manuel ou basse pression selon la fragilité des tuiles), l'application d'un traitement anti-mousse curatif qui élimine les organismes en profondeur, puis, selon l'état de vos tuiles, un traitement hydrofuge qui imperméabilise la surface et retarde la repousse.",
        "Nous adaptons systématiquement la méthode au matériau : une tuile terre cuite ancienne ne se nettoie pas comme une tuile béton ou une ardoise. Le nettoyage des gouttières est inclus dans l'intervention : les mousses délogées ne doivent jamais y stagner.",
      ],
      points: [
        {
          title: "Nettoyage complet de la couverture",
          text: "Élimination des mousses, lichens et débris, méthode adaptée au matériau (manuel ou basse pression, jamais de haute pression sur tuiles fragiles).",
        },
        {
          title: "Traitement anti-mousse curatif et préventif",
          text: "Produit appliqué sur toute la surface, qui détruit les organismes restants et retarde leur réapparition pendant plusieurs années.",
        },
        {
          title: "Traitement hydrofuge (en option)",
          text: "Imperméabilise les tuiles poreuses, limite l'incrustation de nouvelles mousses et redonne un aspect propre. Efficace 3 à 5 ans selon l'exposition.",
        },
        {
          title: "Finition propre",
          text: "Gouttières nettoyées, abords rincés (façade, terrasse), chantier laissé impeccable.",
        },
      ],
    },
    signes: {
      title: "Quand faut-il démousser sa toiture ?",
      items: [
        "Des plaques de mousse verte sont visibles depuis la rue ou le jardin",
        "Les tuiles noircissent ou verdissent par zones (algues, lichens)",
        "Des granulats ou morceaux de mousse s'accumulent dans les gouttières",
        "Les tuiles restent sombres longtemps après la pluie (porosité : elles se gorgent d'eau)",
        "Le dernier démoussage date de plus de 10 ans, ou n'a jamais été fait",
      ],
    },
    tarifs: {
      title: "Prix d'un démoussage de toiture en 2026",
      rows: [
        { label: "Nettoyage + traitement anti-mousse", fourchette: "15 à 25 €", unite: "par m²" },
        {
          label: "Nettoyage + anti-mousse + hydrofuge",
          fourchette: "25 à 35 €",
          unite: "par m²",
        },
        { label: "Nettoyage de gouttières seul", fourchette: "sur devis", unite: "" },
      ],
      facteurs: [
        "Surface et pente de la toiture",
        "Accessibilité (hauteur, obstacles, nacelle éventuelle)",
        "Niveau d'encrassement et fragilité des tuiles",
        "Traitement choisi (avec ou sans hydrofuge)",
      ],
      disclaimer:
        "Fourchettes indicatives du marché en 2026. Chaque toiture est différente : le prix exact est établi après diagnostic gratuit sur place, sans engagement.",
    },
    faq: [
      {
        question: "À quelle fréquence faut-il démousser une toiture ?",
        answer:
          "Tous les 5 à 10 ans en moyenne. L'intervalle dépend de l'exposition : une toiture orientée nord, entourée d'arbres ou proche d'un plan d'eau se couvre de mousse plus vite. Un contrôle visuel annuel suffit pour décider du bon moment.",
      },
      {
        question: "Quelle est la meilleure période pour un démoussage ?",
        answer:
          "Le printemps et l'automne, par temps sec. Le printemps élimine les mousses développées pendant l'hiver ; l'automne prépare la toiture avant les pluies. Nous évitons les périodes de gel et de forte chaleur, qui nuisent à l'efficacité des traitements.",
      },
      {
        question: "Les produits utilisés sont-ils dangereux pour le jardin ?",
        answer:
          "Nous utilisons des produits anti-mousse professionnels appliqués de manière ciblée, avec protection des abords et rinçage des zones sensibles (terrasse, végétation proche) en fin de chantier. Signalez-nous la présence d'un potager ou d'un bassin : nous adaptons la méthode.",
      },
      {
        question: "Combien de temps dure l'intervention ?",
        answer:
          "Une demi-journée à une journée pour un pavillon standard (80 à 120 m² de toiture). Si un traitement hydrofuge est prévu, il s'applique sur toiture propre et sèche, parfois lors d'un second passage.",
      },
      {
        question: "Le démoussage abîme-t-il les tuiles ?",
        answer:
          "Non, à condition d'utiliser la bonne méthode. C'est la haute pression mal maîtrisée qui abîme les tuiles (elle décape la surface et les rend poreuses). Nous privilégions le nettoyage manuel ou la basse pression, adaptés à l'état de votre couverture.",
      },
    ],
    linkedArticles: [
      "prix-demoussage-toiture-m2",
      "mousse-lichen-algues-toiture",
      "traitement-hydrofuge-toiture-utilite",
      "arnaque-demoussage-toiture",
    ],
    icon: "sparkles",
    ancre: "démoussage de couverture",
  },
  {
    slug: "recherche-de-fuite-toiture-villemandeur",
    name: "Recherche de fuite",
    nav: "Recherche de fuite",
    h1: "Recherche de fuite en toiture à Villemandeur",
    metaTitle: "Recherche de Fuite Toiture à Villemandeur | JCD Rénovation",
    metaDescription:
      "Localisez l'origine d'une fuite ou d'une infiltration sur votre toiture à Villemandeur. Diagnostic précis, intervention rapide.",
    enBref:
      "Une recherche de fuite de toiture coûte généralement entre 150 et 600 € selon la complexité. JCD Rénovation localise l'origine exacte de l'infiltration à Villemandeur et dans l'agglomération Montargoise (inspection complète, test d'arrosage si nécessaire), puis propose la réparation. Intervention rapide en cas de fuite active.",
    intro:
      "Une tache d'humidité au plafond signale rarement l'endroit réel où l'eau entre : elle circule le long de la charpente avant de traverser. Localiser précisément l'origine évite de refaire des travaux au mauvais endroit, et d'aggraver les dégâts.",
    heroImage: "/images/realisations/recherche-fuite-toiture-villemandeur-01.jpeg",
    heroImageAlt: "Recherche de fuite en toiture à Villemandeur par JCD Rénovation",
    consiste: {
      title: "Comment se déroule une recherche de fuite ?",
      paragraphs: [
        "Nous procédons méthodiquement, de l'intérieur vers l'extérieur : inspection des combles (traces sur la charpente, l'isolant, l'écran sous-toiture), puis examen complet de la couverture en insistant sur les points singuliers : solins, noues, faîtage, arêtiers, pourtour de cheminée et de fenêtres de toit. Ce sont eux qui causent la majorité des infiltrations.",
        "Si l'origine reste incertaine, nous réalisons un test d'arrosage ciblé : la toiture est arrosée zone par zone pendant qu'un contrôle est effectué à l'intérieur, jusqu'à reproduire la fuite. Vous recevez ensuite un diagnostic clair et un devis de réparation détaillé.",
      ],
      points: [
        {
          title: "Inspection intérieure",
          text: "Combles, charpente, isolant : repérage des cheminements d'eau et des traces anciennes ou actives.",
        },
        {
          title: "Examen des points singuliers",
          text: "Solins, noues, faîtage, cheminée, fenêtres de toit : les zones d'étanchéité sensibles sont contrôlées une à une.",
        },
        {
          title: "Test d'arrosage si nécessaire",
          text: "Reproduction contrôlée de la fuite pour confirmer le point d'entrée exact avant tout devis de réparation.",
        },
        {
          title: "Rapport et devis de réparation",
          text: "Explication claire de l'origine, photos à l'appui (utilisable pour votre assurance habitation) et chiffrage de la réparation.",
        },
      ],
    },
    signes: {
      title: "Les signes qui doivent vous alerter",
      items: [
        "Tache ou auréole qui apparaît (ou s'agrandit) au plafond ou en haut d'un mur",
        "Gouttes ou écoulement lors des fortes pluies",
        "Odeur d'humidité ou moisissures dans les combles",
        "Tuiles cassées, fissurées ou déplacées après un coup de vent",
        "Bois de charpente ou isolant humide au toucher",
      ],
    },
    tarifs: {
      title: "Prix d'une recherche de fuite de toiture",
      rows: [
        {
          label: "Diagnostic + recherche standard",
          fourchette: "150 à 300 €",
          unite: "forfait",
        },
        {
          label: "Recherche approfondie (test d'arrosage, démontage partiel)",
          fourchette: "300 à 600 €",
          unite: "forfait",
        },
        { label: "Réparation de la fuite", fourchette: "selon diagnostic", unite: "sur devis" },
      ],
      facteurs: [
        "Accessibilité et hauteur de la toiture",
        "Complexité de la couverture (noues, lucarnes, cheminées multiples)",
        "Méthode nécessaire (visuelle simple ou test d'arrosage)",
        "Urgence de l'intervention",
      ],
      disclaimer:
        "Fourchettes indicatives du marché en 2026. Le montant exact dépend de votre toiture : il est confirmé avant toute intervention, sans engagement.",
    },
    faq: [
      {
        question: "Intervenez-vous en urgence en cas de fuite active ?",
        answer:
          "Oui. En cas d'infiltration active, nous intervenons en priorité à Villemandeur et dans l'agglomération Montargoise pour mettre la toiture hors d'eau (bâchage d'urgence si nécessaire), puis nous planifions la réparation durable. Appelez le 07 49 10 06 56.",
      },
      {
        question: "Pourquoi la fuite n'est-elle pas là où je vois la tache ?",
        answer:
          "Parce que l'eau ruisselle : elle entre par un défaut d'étanchéité (solin fissuré, tuile déplacée), suit la pente d'un chevron ou de l'écran sous-toiture, et ne traverse le plafond que plusieurs mètres plus loin. C'est la raison pour laquelle une recherche méthodique est indispensable avant de réparer.",
      },
      {
        question: "Mon assurance habitation prend-elle en charge la fuite ?",
        answer:
          "Les dégâts intérieurs causés par une infiltration sont généralement couverts par la garantie dégâts des eaux ; la réparation de la toiture elle-même l'est plus rarement. Vérifiez votre contrat. Nous fournissons un rapport avec photos, utilisable pour votre déclaration de sinistre.",
      },
      {
        question: "Combien de temps prend une recherche de fuite ?",
        answer:
          "Une à trois heures pour une inspection standard d'un pavillon. Un test d'arrosage complet peut demander une demi-journée. Vous recevez le diagnostic et le devis de réparation sous 24 à 48 h.",
      },
    ],
    linkedArticles: [
      "detecter-fuite-toiture-signes",
      "methodes-recherche-fuite-toiture",
      "prix-recherche-fuite-toiture",
      "infiltration-eau-apres-orage",
    ],
    icon: "droplets",
    ancre: "recherche de fuite",
  },
  {
    slug: "zinguerie-villemandeur",
    name: "Zinguerie",
    nav: "Zinguerie",
    h1: "Zinguerie à Villemandeur",
    metaTitle: "Zinguerie à Villemandeur : Gouttières, Solins | JCD Rénovation",
    metaDescription:
      "Travaux de zinguerie à Villemandeur : gouttières, chéneaux, solins, noues. Pose et réparation par un artisan qualifié.",
    enBref:
      "La zinguerie regroupe les ouvrages métalliques qui assurent l'étanchéité et l'évacuation des eaux de votre toit : gouttières, descentes, solins, chéneaux, noues. JCD Rénovation pose et répare votre zinguerie à Villemandeur : zinc ou aluminium, travaux couverts par la garantie décennale. Une gouttière zinc posée coûte en moyenne 60 à 120 € le mètre linéaire.",
    intro:
      "Gouttières, solins, chéneaux, noues : ces éléments métalliques discrets protègent votre maison en guidant l'eau de pluie loin des murs et des fondations. Un seul solin fissuré ou une gouttière qui déborde suffit à provoquer des infiltrations coûteuses.",
    heroImage: "/images/realisations/zinguerie-gouttiere-villemandeur-01.jpeg",
    heroImageAlt: "Travaux de zinguerie à Villemandeur : pose de gouttière par JCD Rénovation",
    consiste: {
      title: "Nos travaux de zinguerie",
      paragraphs: [
        "Nous posons, remplaçons et réparons l'ensemble des ouvrages de zinguerie : gouttières et descentes d'eau pluviale (zinc ou aluminium), solins d'étanchéité aux jonctions mur/toiture et autour des cheminées, chéneaux, noues, ainsi que les habillages de bandeaux et planches de rive.",
        "Le zinc reste la référence pour sa longévité (30 à 50 ans) et ses soudures durables ; l'aluminium laqué offre une alternative économique disponible en plusieurs coloris. Nous vous conseillons le matériau adapté à votre toiture et à votre budget lors du diagnostic gratuit.",
      ],
      points: [
        {
          title: "Gouttières & descentes",
          text: "Pose neuve, remplacement ou réparation ponctuelle (jonctions, fixations, pente), en zinc ou aluminium.",
        },
        {
          title: "Solins & abergements",
          text: "Étanchéité des jonctions sensibles : mur/toit, cheminée, fenêtre de toit. Première cause de fuite localisée.",
        },
        {
          title: "Chéneaux & noues",
          text: "Façonnage et remplacement des canaux d'évacuation intégrés à la toiture, points stratégiques de l'étanchéité.",
        },
        {
          title: "Habillages",
          text: "Bandeaux, planches de rive et finitions métalliques qui protègent le bois exposé aux intempéries.",
        },
      ],
    },
    signes: {
      title: "Quand faire vérifier votre zinguerie ?",
      items: [
        "La gouttière déborde à la moindre pluie ou fuit aux jonctions",
        "Des traces vertes ou noires apparaissent sur la façade sous la gouttière",
        "Un solin est fissuré, décollé ou son joint s'effrite",
        "Une infiltration apparaît autour de la cheminée ou d'un Velux",
        "La gouttière s'affaisse ou se détache par endroits",
      ],
    },
    tarifs: {
      title: "Prix des travaux de zinguerie",
      rows: [
        { label: "Gouttière zinc posée", fourchette: "60 à 120 €", unite: "par mètre linéaire" },
        {
          label: "Gouttière aluminium posée",
          fourchette: "50 à 100 €",
          unite: "par mètre linéaire",
        },
        { label: "Solin (fourniture + pose)", fourchette: "40 à 90 €", unite: "par mètre linéaire" },
        { label: "Chéneaux, noues, habillages", fourchette: "sur devis", unite: "" },
      ],
      facteurs: [
        "Matériau choisi (zinc, aluminium, PVC)",
        "Linéaire total et nombre de descentes",
        "Hauteur et accessibilité de la toiture",
        "Dépose et évacuation de l'ancienne zinguerie",
      ],
      disclaimer:
        "Fourchettes indicatives du marché en 2026, fourniture et pose comprises. Devis gratuit et détaillé après métré sur place.",
    },
    faq: [
      {
        question: "Zinc, aluminium ou PVC : que choisir pour mes gouttières ?",
        answer:
          "Le zinc dure 30 à 50 ans, se soude (étanchéité durable) et se patine naturellement : c'est le meilleur rapport longévité/prix. L'aluminium laqué (20 à 30 ans) est plus économique et existe en plusieurs coloris. Le PVC est le moins cher mais vieillit mal aux UV et se déforme : nous le déconseillons en remplacement définitif.",
      },
      {
        question: "À quelle fréquence faut-il nettoyer ses gouttières ?",
        answer:
          "Une à deux fois par an : à l'automne après la chute des feuilles, et au printemps. Une gouttière obstruée déborde sur la façade et peut provoquer des infiltrations en pied de mur. Le nettoyage des gouttières est inclus dans nos interventions de démoussage.",
      },
      {
        question: "Peut-on réparer une gouttière qui fuit, ou faut-il tout remplacer ?",
        answer:
          "Une fuite localisée à une jonction ou une fixation se répare très bien. Le remplacement complet ne s'impose que si le métal est percé de corrosion en plusieurs points ou si la pente n'est plus bonne. Notre diagnostic gratuit vous dit honnêtement lequel des deux scénarios s'applique.",
      },
      {
        question: "Vos travaux de zinguerie sont-ils garantis ?",
        answer:
          "Oui : la pose et le remplacement d'ouvrages de zinguerie participent à l'étanchéité du bâti et sont couverts par notre garantie décennale (10 ans), en plus de la responsabilité civile professionnelle.",
      },
    ],
    linkedArticles: ["zinguerie-solins-noues-cheneaux", "gouttieres-bouchees-causes-solutions"],
    icon: "wrench",
    ancre: "travaux de zinguerie",
  },
  {
    slug: "couvreur-villemandeur",
    name: "Couverture",
    nav: "Couverture & toiture",
    h1: "Couvreur à Villemandeur",
    metaTitle: "Couvreur à Villemandeur : Pose & Rénovation Toiture",
    metaDescription:
      "Pose, rénovation et réparation de toiture à Villemandeur avec JCD Rénovation. Garantie décennale, devis gratuit.",
    enBref:
      "JCD Rénovation est une entreprise de couverture qui intervient à Villemandeur (45700) et dans l'agglomération Montargoise : réparation de toiture (dès 150 à 500 €), remaniement, rénovation complète (180 à 280 €/m² en tuiles). Travaux couverts par la garantie décennale, devis gratuit sous 24-48 h.",
    intro:
      "Tuiles cassées après un coup de vent, toiture qui a dépassé les 30 ans, projet de rénovation complète : votre toit est la première protection de votre maison. Nous intervenons de la simple réparation à la réfection totale.",
    heroImage: "/images/realisations/renovation-toiture-villemandeur-01.jpeg",
    heroImageAlt: "Couvreur sur une rénovation de toiture à Villemandeur (JCD Rénovation)",
    consiste: {
      title: "Nos travaux de couverture",
      paragraphs: [
        "Nous réalisons tous les travaux de couverture en tuile terre cuite, tuile béton et ardoise : réparations ponctuelles (remplacement de tuiles cassées ou déplacées, reprise de faîtage), remaniement (tri complet de la couverture avec remplacement des éléments défectueux), et rénovation complète (dépose de l'ancienne couverture, pose d'un écran de sous-toiture, liteaunage neuf et couverture neuve).",
        "Chaque chantier commence par un diagnostic gratuit : nous vous disons honnêtement si une réparation suffit ou si la rénovation s'impose, chiffrage détaillé à l'appui. Tous nos travaux de couverture sont couverts par la garantie décennale.",
      ],
      points: [
        {
          title: "Réparations ponctuelles",
          text: "Tuiles cassées, déplacées ou poreuses, reprise de faîtage ou d'arêtier, interventions après tempête.",
        },
        {
          title: "Remaniement de toiture",
          text: "Tri complet de la couverture : chaque tuile est vérifiée, les défectueuses remplacées, le liteaunage contrôlé.",
        },
        {
          title: "Rénovation complète",
          text: "Dépose totale, écran de sous-toiture HPV, liteaux neufs, couverture neuve, avec conseils sur le choix du matériau.",
        },
        {
          title: "Faîtage & points singuliers",
          text: "Scellement ou pose à sec du faîtage, étanchéité des rives, arêtiers et abouts, en lien avec la zinguerie.",
        },
      ],
    },
    signes: {
      title: "Quand faire appel à un couvreur ?",
      items: [
        "Des tuiles sont cassées, fissurées ou déplacées (visibles du sol ou après une tempête)",
        "La toiture a plus de 30 ans et n'a jamais été rénovée",
        "Des infiltrations se répètent malgré des réparations ponctuelles",
        "Le faîtage se descelle, des fragments de mortier tombent",
        "La charpente ou les liteaux montrent des signes d'affaissement",
      ],
    },
    tarifs: {
      title: "Prix des travaux de couverture en 2026",
      rows: [
        {
          label: "Réparation ponctuelle (tuiles, faîtage)",
          fourchette: "150 à 500 €",
          unite: "selon étendue",
        },
        { label: "Remaniement de couverture", fourchette: "40 à 90 €", unite: "par m²" },
        {
          label: "Rénovation complète (tuiles)",
          fourchette: "180 à 280 €",
          unite: "par m²",
        },
      ],
      facteurs: [
        "Matériau de couverture (tuile terre cuite, béton, ardoise)",
        "Surface, pente et complexité de la toiture",
        "État de la charpente et du liteaunage",
        "Accès au chantier et échafaudage nécessaire",
      ],
      disclaimer:
        "Fourchettes indicatives du marché en 2026, hors reprise de charpente. Le chiffrage précis est établi après diagnostic gratuit sur place.",
    },
    faq: [
      {
        question: "Vos travaux sont-ils couverts par la garantie décennale ?",
        answer:
          "Oui. Tous nos travaux de couverture et de zinguerie sont couverts par la garantie décennale pendant 10 ans, comme l'exige la loi pour les travaux touchant à l'étanchéité du bâti. L'attestation d'assurance est fournie avec le devis sur simple demande.",
      },
      {
        question: "Quelle est la durée de vie d'une toiture en tuiles ?",
        answer:
          "Une couverture en tuiles terre cuite dure 50 ans et plus lorsqu'elle est entretenue (démoussage régulier, remplacement des tuiles défectueuses). Les tuiles béton durent 30 à 50 ans, l'ardoise naturelle jusqu'à 100 ans. C'est souvent le liteaunage ou les points singuliers qui vieillissent avant les tuiles elles-mêmes.",
      },
      {
        question: "Réparation ou rénovation complète : comment décider ?",
        answer:
          "Si les défauts sont localisés (quelques tuiles, un solin), la réparation est le bon choix. La rénovation complète s'impose quand les tuiles sont poreuses en masse, que les infiltrations se multiplient ou que le liteaunage est fatigué. Notre diagnostic gratuit tranche honnêtement : réparer ce qui peut l'être coûte toujours moins cher.",
      },
      {
        question: "Existe-t-il des aides pour rénover sa toiture en 2026 ?",
        answer:
          "Oui, principalement lorsque la rénovation s'accompagne d'une isolation de la toiture (MaPrimeRénov', éco-PTZ, TVA réduite selon conditions). Les dispositifs évoluent chaque année : consultez notre article dédié aux aides 2026 ou demandez-nous conseil lors du devis.",
      },
    ],
    linkedArticles: [
      "garantie-decennale-couvreur",
      "entretien-toiture-tuile-ardoise-zinc",
      "calendrier-entretien-toiture-villemandeur",
      "aides-renovation-toiture-2026",
    ],
    icon: "home",
    ancre: "pose et rénovation de toiture",
  },
] as const;

export function getPrestation(slug: PrestationSlug): Prestation {
  const prestation = prestations.find((p) => p.slug === slug);
  if (!prestation) {
    throw new Error(`Prestation inconnue : ${slug}`);
  }
  return prestation;
}
