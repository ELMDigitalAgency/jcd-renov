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
    sections: [
      {
        title: "Comment se déroule un chantier de démoussage chez vous ?",
        paragraphs: [
          "Avant de monter sur le toit, nous préparons le chantier au sol. Les massifs, la terrasse et les menuiseries situés sous les zones de travail sont bâchés. Si vous récupérez l'eau de pluie, la cuve est déconnectée le temps de l'intervention afin qu'aucun résidu de nettoyage n'y pénètre. Nous repérons enfin les accès, les points d'appui et l'emplacement de l'échelle ou de l'échafaudage.",
          "Le nettoyage s'effectue toujours du faîtage vers l'égout, autrement dit du haut du toit vers les gouttières. Travailler dans ce sens suit le recouvrement naturel des tuiles : l'eau ne peut pas s'engouffrer sous les rangs. Les mousses délogées et les eaux de rinçage sont canalisées vers les gouttières, que nous curons ensuite, puis vers les descentes. Rien ne stagne dans les évacuations en fin de journée.",
          "Le traitement anti-mousse s'applique uniquement sur une couverture propre et sèche. Selon la météo, il intervient dans la foulée du nettoyage ou lors d'un second passage. Ce délai de séchage n'est pas du temps perdu : un produit posé sur des tuiles gorgées d'eau se dilue et perd une grande partie de son efficacité. Nous vérifions la météo des jours suivants avant d'appliquer.",
        ],
      },
      {
        title: "Pourquoi les toitures s'encrassent-elles vite dans le Montargois ?",
        paragraphs: [
          "Le Gâtinais connaît un climat océanique dégradé : hivers doux et humides, pluies réparties sur toute l'année, périodes sèches assez courtes. Les tuiles restent mouillées de longues semaines d'affilée, exactement les conditions que recherchent mousses et lichens pour s'installer. Les brouillards fréquents de la vallée du Loing entretiennent cette humidité au niveau des toits, notamment à Villemandeur, Amilly et Chalette-sur-Loing.",
          "Sur une même maison, tous les pans ne vieillissent pas à la même vitesse. Le pan orienté nord, moins exposé au soleil, sèche lentement et verdit en premier. Les arbres proches aggravent le phénomène : ils portent ombre, déposent feuilles et débris, et leurs abords favorisent la colonisation des tuiles. Deux maisons voisines peuvent ainsi présenter des toitures dans des états très différents.",
          "Le bon rythme d'entretien découle de cette exposition. Un contrôle visuel depuis le sol chaque année, après l'automne, suffit pour surveiller l'évolution. Une toiture dégagée et bien exposée peut attendre, tandis qu'un pavillon entouré de chênes ou proche du Loing demandera un démoussage plus rapproché. Nous vous indiquons un rythme personnalisé à l'issue du premier diagnostic.",
        ],
      },
      {
        title: "Karcher, javel, produits miracles : trois idées reçues à oublier",
        paragraphs: [
          "Première idée reçue : le nettoyeur haute pression ferait gagner du temps. En réalité, le jet décape la surface des tuiles terre cuite et le grain des tuiles béton. La couverture ressort propre en apparence, mais poreuse : elle se gorge d'eau et reverdit plus vite qu'avant. Sur une toiture ancienne, la haute pression peut aussi déplacer des tuiles et créer des fuites.",
          "Deuxième idée reçue : l'eau de javel serait un anti-mousse économique. Elle blanchit les mousses en surface sans détruire leurs racines, attaque les gouttières et les éléments de zinguerie, brûle la végétation en contrebas et finit dans les eaux de pluie. Le résultat visuel disparaît en quelques mois et la toiture en sort fragilisée.",
          "Troisième idée reçue : certains démarcheurs promettent un produit qui protégerait la toiture dix ans ou plus, sans aucun entretien. Aucun traitement ne bloque la repousse aussi longtemps : l'exposition, l'ombre et l'humidité finissent toujours par reprendre le dessus. Méfiez-vous des promesses invérifiables faites en porte-à-porte : un artisan sérieux annonce des durées réalistes et les écrit sur son devis.",
        ],
      },
    ],
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
      {
        question: "Peut-on démousser sa toiture soi-même ?",
        answer:
          "Nous vous le déconseillons. Marcher sur une couverture demande de savoir où poser le pied : une tuile fendue sous le pas devient un futur point de fuite. S'ajoutent le risque de chute, réel même sur un toit peu pentu, et le choix du produit comme de son dosage. Le coût d'un démoussage professionnel reste faible comparé à celui d'une tuile traversée ou d'un accident.",
      },
      {
        question: "Un démoussage redonne-t-il sa couleur d'origine à la toiture ?",
        answer:
          "En grande partie, oui. Le nettoyage retire mousses, lichens et voile noir, et la teinte des tuiles réapparaît. Une couverture ancienne conserve toutefois sa patine : des tuiles décolorées par des années d'UV ne retrouvent pas leur teinte de sortie d'usine. Le traitement hydrofuge ravive l'aspect et homogénéise le rendu, sans jamais masquer l'âge réel des matériaux.",
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
    sections: [
      {
        title: "Par où l'eau entre-t-elle le plus souvent dans une toiture ?",
        paragraphs: [
          "Sur la plupart des toitures que nous inspectons, l'eau n'entre pas au milieu d'un pan mais par un point singulier, là où deux éléments se rejoignent. Chacun de ces points a sa propre façon de vieillir et de fuir. Les connaître oriente la recherche et évite de suspecter toute la couverture.",
          "Le solin de cheminée arrive en tête : son joint se fissure avec les cycles de gel et la dilatation du métal. Vient ensuite la noue, ce canal où deux pans se rencontrent et où l'eau se concentre à chaque pluie. Un faîtage descellé laisse le vent pousser la pluie sous les tuiles du haut. Plus discrets, l'abergement d'une fenêtre de toit ou une simple tuile fissurée peuvent laisser passer l'eau pendant des mois avant la première tache au plafond.",
        ],
        bullets: [
          "Solin de cheminée : joint fissuré ou métal décollé du conduit",
          "Noue : métal percé par la corrosion ou débordement en cas de forte pluie",
          "Faîtage descellé : mortier fissuré, pluie poussée par le vent sous les tuiles",
          "Abergement de fenêtre de toit : joints et raccords fatigués par les années",
          "Tuile fissurée ou déplacée : entrée d'eau discrète et très localisée",
          "Écran de sous-toiture percé : la dernière barrière ne joue plus son rôle",
        ],
      },
      {
        title: "Comment se déroule une inspection JCD, minute par minute ?",
        paragraphs: [
          "L'inspection commence à l'intérieur, dans vos combles. Lampe en main, nous suivons la sous-face de la couverture à la recherche de traces : bois noirci le long d'un chevron, isolant tassé par l'eau, point de lumière anormal, auréole sur l'écran de sous-toiture. Cette première lecture, qui prend vingt à trente minutes, délimite déjà la zone du toit à examiner en priorité.",
          "Nous montons ensuite sur la couverture et remontons le cheminement supposé de l'eau, de la gouttière vers le faîtage. Chaque point singulier de la zone suspecte est contrôlé : jeu d'une tuile, joint d'un solin, état d'une noue. Dans la majorité des cas, l'origine est identifiée à ce stade et photographiée avant tout démontage.",
          "Si le doute persiste, place au test d'arrosage. Une personne arrose le toit zone par zone, en commençant par le bas du pan et en remontant, pendant qu'une autre observe l'intérieur. Dès que l'eau réapparaît dans les combles, la zone arrosée à ce moment précis désigne le point d'entrée. Le test s'arrête là et le devis de réparation peut être établi au plus juste.",
        ],
      },
      {
        title: "Fuite de toiture et assurance habitation : les bonnes démarches",
        paragraphs: [
          "Dès qu'un dégât intérieur apparaît (plafond taché, peinture cloquée, parquet gondolé), prévenez votre assureur sans attendre. La déclaration de sinistre doit être faite dans un délai de cinq jours ouvrés après la découverte des dommages. Elle peut s'effectuer par téléphone, depuis votre espace client ou par courrier recommandé, selon les modalités de votre contrat.",
          "Photographiez les dégâts avant toute remise en état et conservez si possible les éléments endommagés : l'expert mandaté par l'assurance peut demander à les voir. Faites en parallèle stopper la fuite rapidement, car votre contrat vous impose de limiter l'aggravation des dommages. Un bâchage d'urgence ou une réparation provisoire ne compromet jamais votre indemnisation, au contraire.",
          "Notre rapport de recherche de fuite vous sert de pièce justificative : il décrit l'origine exacte de l'infiltration, photos à l'appui, et distingue la cause (le défaut de toiture) des conséquences (les dégâts intérieurs). Ce document facilite l'échange avec votre assureur et accélère souvent le traitement du dossier. Nous vous le remettons avec le devis de réparation.",
        ],
      },
    ],
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
      {
        question: "Une fuite de toiture peut-elle s'arrêter toute seule ?",
        answer:
          "Non. Une fuite peut sembler disparaître parce qu'elle est intermittente : elle ne se manifeste que par pluie battante, par vent d'ouest ou à la fonte d'un givre. Le défaut d'étanchéité, lui, reste en place et s'aggrave lentement. Entre deux épisodes, l'eau continue souvent d'humidifier charpente et isolant sans signe visible. Faites contrôler dès la première tache.",
      },
      {
        question: "Faut-il repeindre le plafond immédiatement après la réparation ?",
        answer:
          "Patientez. Un plafond ou un mur imbibé met plusieurs semaines à sécher à cœur, parfois davantage quand l'isolation est épaisse. Repeindre trop tôt emprisonne l'humidité : la tache réapparaît et la peinture cloque. Attendez que le support soit parfaitement sec, traitez les auréoles avec une sous-couche adaptée, puis refaites la finition.",
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
    sections: [
      {
        title: "Zinc, aluminium, cuivre ou PVC : quel matériau pour vos évacuations ?",
        paragraphs: [
          "Le zinc reste le matériau de référence des couvreurs zingueurs. Il se soude à l'étain : les jonctions forment un ensemble continu, sans joint susceptible de sécher puis de fuir. Sa patine gris clair le protège naturellement de la corrosion et il tient 30 à 50 ans. C'est le choix cohérent pour une maison ancienne ou une toiture que l'on veut équiper pour longtemps.",
          "L'aluminium laqué se pose par emboîtement, avec un large choix de coloris qui s'accorde aux menuiseries. Plus léger et un peu moins cher que le zinc, il convient bien aux pavillons récents. Le cuivre, plus rare dans le Montargois, est le plus durable des quatre et développe une patine brune puis verdie très recherchée ; son budget le réserve aux belles demeures et au bâti de caractère.",
          "Le PVC est le plus économique à l'achat, mais ses joints en caoutchouc sèchent, le matériau se déforme au soleil et devient cassant avec les années. Nous l'acceptons en dépannage ou sur une annexe, rarement en remplacement définitif. Le bon choix dépend de votre toiture, de l'esthétique recherchée et du temps que vous voulez laisser passer avant d'y revenir.",
        ],
      },
      {
        title: "Comment dimensionner une évacuation d'eaux pluviales ?",
        paragraphs: [
          "Une gouttière se choisit d'abord par son développé, c'est-à-dire la largeur de la feuille de métal avant pliage. Plus le pan de toiture qu'elle dessert est grand, plus le développé doit être important pour absorber l'eau d'un orage sans déborder. Une gouttière trop petite fonctionne par temps calme et déborde précisément le jour où l'on en a le plus besoin.",
          "Le nombre et le diamètre des descentes comptent tout autant. En règle courante, on prévoit environ un centimètre carré de section de descente par mètre carré de toiture desservie : un grand pan appelle deux descentes plutôt qu'une seule surdimensionnée. Leur position se réfléchit aussi : chaque descente doit rejoindre une évacuation au sol ou un regard, jamais le pied du mur.",
          "Reste la pente. Une gouttière se pose avec une pente d'environ 5 mm par mètre vers la descente : suffisante pour que l'eau s'écoule sans stagner, assez discrète pour rester invisible depuis la rue. Une pente nulle ou inversée, fréquente après un affaissement de fixations, laisse l'eau croupir et corroder le fond de la gouttière.",
        ],
      },
      {
        title: "Quel entretien pour votre zinguerie au fil des saisons ?",
        paragraphs: [
          "À l'automne, la priorité va aux feuilles mortes : une vérification des gouttières après leur chute évite les débordements des pluies d'hiver. En hiver, surveillez les épisodes de neige et de gel : la glace qui se forme dans une gouttière pleine peut déformer le métal et arracher des fixations. Un simple coup d'œil après chaque épisode suffit.",
          "Au printemps, contrôlez les jonctions et les fixations depuis le sol : une gouttière qui a bougé pendant l'hiver se repère à son alignement. L'été, par forte chaleur, le métal se dilate ; c'est la saison où une soudure fatiguée ou un joint sec se mettent à goutter. Ces petits signes, traités tôt, évitent le remplacement complet de l'ouvrage.",
        ],
        bullets: [
          "Jonction qui goutte : reprise de soudure sur le zinc, remplacement du joint sur l'aluminium ou le PVC",
          "Fixation arrachée ou distendue : repose de crochets et contrôle de la pente",
          "Percement ponctuel de corrosion : pièce soudée ou portion de gouttière remplacée",
          "Descente désolidarisée : remboîtement et pose de nouveaux colliers",
          "Solin dont le joint s'effrite : dégarnissage puis réfection du mastic ou du mortier",
        ],
      },
    ],
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
      {
        question: "Quelle différence entre un chéneau et une gouttière ?",
        answer:
          "La gouttière est fixée en rive de toit, à l'extérieur, suspendue à des crochets. Le chéneau est un canal intégré à la construction : il repose sur une corniche ou s'insère entre deux pans, souvent invisible depuis le sol. Cette position le rend plus délicat : un chéneau qui fuit déverse l'eau directement dans le bâti, d'où l'intérêt d'un contrôle régulier.",
      },
      {
        question: "Les crapaudines et grilles pare-feuilles sont-elles utiles ?",
        answer:
          "Oui, comme complément et non comme dispense d'entretien. La crapaudine, placée en tête de descente, empêche feuilles et débris d'obstruer le tuyau : c'est la protection la plus utile. Les grilles posées sur toute la gouttière limitent l'accumulation mais se colmatent elles-mêmes ; il faut toujours les nettoyer. Le bon équipement dépend surtout des arbres autour de chez vous.",
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
    sections: [
      {
        title: "Tuile mécanique, tuile plate, ardoise : que trouve-t-on sur les toits du Montargois ?",
        paragraphs: [
          "La tuile mécanique en terre cuite, dite à emboîtement, domine sur les pavillons de Villemandeur et de l'agglomération Montargoise. Ses rainures s'emboîtent les unes dans les autres : la pose est rapide, le remaniement aisé, et le remplacement d'une tuile cassée se fait à l'unité. Son entretien se limite à un démoussage régulier et au contrôle des emboîtements après les coups de vent.",
          "La tuile plate en terre cuite habille les maisons plus anciennes du Gâtinais et les longères. Petite et posée en fort recouvrement, elle exige une pente prononcée et une densité d'éléments bien supérieure au mètre carré : la rénovation demande plus de temps et de matériaux, mais le cachet est incomparable. Sur ces couvertures, nous trions les tuiles saines pour les reposer et préserver l'aspect d'origine.",
          "L'ardoise est plus rare dans le secteur, présente surtout sur des maisons de bourg et quelques bâtisses. Posée aux crochets ou aux clous, elle vieillit très bien mais ne se répare pas comme la tuile : remplacer une ardoise demande un outillage et un geste spécifiques. Notre diagnostic distingue aussi l'ardoise naturelle, très durable, des plaques en fibrociment qui vieillissent différemment.",
        ],
      },
      {
        title: "Comment se déroule une rénovation complète de toiture, étape par étape ?",
        paragraphs: [
          "Le chantier commence par la dépose de l'ancienne couverture, pan par pan, avec tri et évacuation des gravats. La charpente et les liteaux, enfin visibles, sont examinés pièce par pièce : un bois sain est conservé, une section fatiguée est remplacée ou renforcée avant d'aller plus loin. C'est la seule occasion de traiter la structure à découvert, nous ne la laissons jamais passer.",
          "Vient ensuite l'écran de sous-toiture HPV, hautement perméable à la vapeur d'eau : il protège les combles des infiltrations et des poussières tout en laissant respirer l'isolant. Par-dessus, contre-lattes et liteaux neufs sont posés à l'entraxe exact du modèle de tuile choisi. Ce quadrillage régulier conditionne l'alignement de toute la couverture.",
          "La pose des tuiles démarre en bas du pan, à l'égout, et remonte rang par rang jusqu'au faîtage, scellé ou posé à sec selon la configuration. Les finitions closent le chantier : rives, arêtiers, raccords aux cheminées et fenêtres de toit, puis la zinguerie (gouttières, solins, noues). La toiture est mise hors d'eau à chaque étape : votre maison n'est jamais exposée à une pluie imprévue.",
        ],
      },
      {
        title: "Quelles démarches administratives avant de refaire sa toiture ?",
        paragraphs: [
          "Une rénovation à l'identique (mêmes tuiles, même teinte, même aspect) ne nécessite en général aucune formalité. Dès que l'aspect extérieur change (couleur ou matériau différent, création d'une fenêtre de toit), une déclaration préalable de travaux doit être déposée en mairie avant le début du chantier. Le délai d'instruction courant est d'un mois.",
          "Le plan local d'urbanisme (PLU) de votre commune peut imposer des teintes ou des matériaux, en particulier dans les centres anciens. À proximité d'un monument historique, l'avis de l'architecte des bâtiments de France peut s'ajouter et allonger l'instruction. Avant tout projet qui modifie l'aspect de votre toit, un passage par le service urbanisme de votre mairie lève le doute en quelques minutes.",
          "Nous vous accompagnons dans la constitution du dossier : descriptif des travaux et des matériaux prévus, références des tuiles, ainsi que les pièces qui rassurent votre mairie et votre assureur : devis détaillé, attestation d'assurance décennale et responsabilité civile professionnelle. Vous déposez un dossier complet du premier coup et le chantier démarre sans mauvaise surprise administrative.",
        ],
      },
    ],
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
      {
        question: "Peut-on changer de matériau de couverture lors d'une rénovation ?",
        answer:
          "C'est possible, sous deux conditions. Techniquement, la charpente doit supporter le poids du nouveau matériau : passer d'une couverture légère à la tuile terre cuite peut demander un renforcement, et chaque matériau impose sa pente minimale. Administrativement, le changement d'aspect exige une déclaration préalable en mairie et le respect du PLU. Nous validons ces deux points avant tout devis.",
      },
      {
        question: "Peut-on habiter la maison pendant la rénovation de la toiture ?",
        answer:
          "Oui, dans la grande majorité des cas. Le chantier se déroule à l'extérieur et la toiture est mise hors d'eau chaque soir : bâchage ou avancement pan par pan, jamais une maison ouverte à la pluie. Les principales gênes se limitent au bruit en journée et à l'emprise de l'échafaudage. Nous convenons ensemble des accès à préserver.",
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
  {
    slug: "peinture-villemandeur",
    name: "Peinture",
    nav: "Peinture & façade",
    h1: "Peinture & ravalement de façade à Villemandeur",
    metaTitle: "Peinture & Ravalement de Façade à Villemandeur | JCD Rénovation",
    metaDescription:
      "Peinture intérieure et extérieure, ravalement de façade à Villemandeur et dans le Loiret. Travail soigné, devis gratuit.",
    enBref:
      "Le ravalement d'une façade coûte en moyenne 30 à 90 € par m² en 2026 selon l'état du support et la finition choisie ; la peinture intérieure se situe entre 25 et 45 € par m², préparation et deux couches comprises. JCD Rénovation réalise vos travaux de peinture et de ravalement à Villemandeur (45700) et dans le Loiret : diagnostic du support et devis gratuits.",
    intro:
      "Une façade propre protège vos murs des intempéries autant qu'elle valorise votre maison. En intérieur comme en extérieur, une peinture bien préparée tient des années là où un travail bâclé s'écaille dès le premier hiver.",
    heroImage: "/images/realisations/peinture-facade-villemandeur-01.jpeg",
    heroImageAlt: "Ravalement de façade à Villemandeur par JCD Rénovation",
    consiste: {
      title: "En quoi consistent des travaux de peinture et de ravalement ?",
      paragraphs: [
        "Nos interventions couvrent deux domaines complémentaires. À l'extérieur, le ravalement de façade rend à vos murs leur étanchéité et leur aspect : nettoyage, traitement, réparation des fissures puis application d'un revêtement adapté au support. À l'intérieur, nous peignons murs, plafonds et boiseries, de la pièce unique à la maison complète, avec la même exigence de préparation.",
        "Une peinture ne vaut que par ce qui se passe avant le premier coup de rouleau. La préparation du support représente l'essentiel du travail : c'est elle qui décide si la finition tiendra cinq ans ou vingt. Un mur mal préparé écaille la plus belle des peintures, alors qu'un support soigné garde son revêtement des années. Chaque chantier commence donc par un diagnostic du support à traiter.",
      ],
      points: [
        {
          title: "Ravalement de façade",
          text: "Nettoyage, traitement, réparation des fissures et application d'un revêtement extérieur adapté à la maçonnerie.",
        },
        {
          title: "Peinture intérieure",
          text: "Murs et plafonds remis à neuf, des combles aux pièces de vie, avec préparation complète du support avant application.",
        },
        {
          title: "Boiseries et menuiseries",
          text: "Mise en peinture ou en lasure des portes, plinthes, encadrements et éléments bois, en intérieur comme en extérieur.",
        },
        {
          title: "Traitement des supports",
          text: "Nettoyage en profondeur, traitement anti-mousse des façades et pontage des fissures avant toute mise en peinture.",
        },
      ],
    },
    signes: {
      title: "Quand envisager un ravalement ou une remise en peinture ?",
      items: [
        "La façade est noircie, verdie ou marquée de coulures sous les appuis de fenêtres",
        "Des fissures apparaissent ou s'élargissent sur l'enduit extérieur",
        "La peinture cloque, s'écaille ou farine au toucher sur les murs ou les boiseries",
        "Des traces d'humidité ou des auréoles persistent sur un mur intérieur",
        "La façade n'a pas été rénovée depuis plus de dix à quinze ans",
      ],
    },
    sections: [
      {
        title: "Comment se déroule un ravalement de façade, étape par étape ?",
        paragraphs: [
          "Tout commence par le diagnostic du support. Nous identifions le matériau, enduit, crépi, pierre ou béton, repérons les fissures, les cloques et les zones d'humidité, et contrôlons la présence de mousses ou d'algues. Ce relevé conditionne le choix des produits et de la méthode : une façade fissurée ne se traite pas comme une façade simplement encrassée.",
          "Vient le nettoyage. Selon l'état et la nature du mur, il se fait par lavage basse pression, brossage ou traitement chimique doux, suivi d'un produit anti-mousse quand la façade est colonisée. Un support propre et sain conditionne l'accroche du revêtement : une peinture posée sur une façade encrassée se décolle en quelques saisons.",
          "Les réparations suivent. Les fissures sont ouvertes puis rebouchées, les parties d'enduit décollées sont reprises, les points sensibles autour des appuis et des encadrements sont consolidés. La façade retrouve une surface homogène avant l'application. Le revêtement final, peinture de façade ou enduit, est posé en une ou deux couches selon le produit, une fois le support parfaitement sec.",
        ],
      },
      {
        title: "Quel revêtement de façade choisir, et lequel dure le plus longtemps ?",
        paragraphs: [
          "Le choix d'un revêtement extérieur dépend d'abord du support et de son exposition. Les peintures de façade se répartissent en grandes familles aux comportements différents. La peinture acrylique, la plus courante, est économique et respirante mais protège moins longtemps. La peinture pliolite pénètre bien les supports poreux et résiste à la pluie. Les revêtements siloxanes offrent la meilleure résistance à l'eau tout en laissant le mur respirer.",
          "La respirabilité est un point central sur une maison ancienne. Un mur en pierre ou en enduit à la chaux doit pouvoir évacuer l'humidité qu'il contient. Un revêtement trop étanche piège cette humidité et fait éclater l'enduit de l'intérieur. Nous adaptons le produit à la nature du mur plutôt que d'appliquer partout la même solution.",
          "L'entretien dépend ensuite du produit et de l'exposition. Une façade au nord, humide et peu ensoleillée, verdit plus vite qu'une façade plein sud. Un simple nettoyage tous les quelques années prolonge nettement la durée d'un revêtement et retarde le prochain ravalement. Nous vous indiquons le rythme d'entretien adapté à votre façade à la fin du chantier.",
        ],
        bullets: [
          "Peinture acrylique : économique, respirante, protection plus courte, à renouveler plus souvent",
          "Peinture pliolite : bonne pénétration des supports poreux, tenue à la pluie, application possible par temps frais",
          "Revêtement siloxane : forte résistance à l'eau et bonne respirabilité, adapté aux façades exposées",
          "Enduit de façade : couche épaisse qui masque les défauts et protège durablement la maçonnerie",
        ],
      },
      {
        title: "Ravalement de façade : quelles règles et quelles autorisations ?",
        paragraphs: [
          "Le ravalement n'est pas qu'une question d'esthétique. Dans certaines communes, il constitue une obligation légale : la loi permet aux municipalités d'imposer un ravalement périodique, souvent tous les dix ans, pour maintenir les façades en bon état. Un passage par le service urbanisme de votre mairie vous indique si votre commune applique cette règle.",
          "Sur le plan administratif, un ravalement à l'identique ne demande en général aucune formalité. Dès que les travaux modifient l'aspect extérieur, un changement de couleur ou de matériau par exemple, une déclaration préalable de travaux doit être déposée en mairie avant le début du chantier. Le délai d'instruction courant est d'un mois.",
          "Le plan local d'urbanisme peut également encadrer les teintes autorisées, en particulier dans les centres anciens ou à proximité d'un bâtiment protégé. Se renseigner en amont évite de repeindre une façade dans une couleur non conforme. Nous vous orientons sur ces démarches et fournissons les pièces utiles à votre dossier : devis détaillé et attestations d'assurance.",
        ],
      },
    ],
    tarifs: {
      title: "Prix de la peinture et du ravalement en 2026",
      rows: [
        { label: "Ravalement de façade", fourchette: "30 à 90 €", unite: "par m²" },
        {
          label: "Peinture intérieure (préparation + 2 couches)",
          fourchette: "25 à 45 €",
          unite: "par m²",
        },
        { label: "Peinture de boiseries et menuiseries", fourchette: "sur devis", unite: "" },
      ],
      facteurs: [
        "État du support et importance de la préparation",
        "Type de revêtement et finition choisie",
        "Surface à traiter et accessibilité (hauteur, échafaudage)",
        "Nombre de couches nécessaires selon la couleur d'origine",
      ],
      disclaimer:
        "Fourchettes indicatives du marché en 2026. Chaque support est différent : le prix exact est établi après diagnostic gratuit sur place, sans engagement.",
    },
    faq: [
      {
        question: "Faut-il une autorisation pour ravaler sa façade ?",
        answer:
          "Un ravalement à l'identique ne demande le plus souvent aucune formalité. Dès que l'aspect extérieur change (nouvelle couleur, matériau différent), une déclaration préalable de travaux est à déposer en mairie avant le chantier. Certaines communes imposent aussi un ravalement périodique : renseignez-vous auprès de votre service urbanisme.",
      },
      {
        question: "Combien de temps dure une peinture de façade ?",
        answer:
          "Une façade correctement préparée et peinte tient en général dix à quinze ans, parfois davantage selon le produit et l'exposition. Une façade orientée au nord ou soumise aux intempéries verdit et se salit plus vite. Un nettoyage régulier prolonge nettement la durée du revêtement.",
      },
      {
        question: "Peut-on peindre par-dessus une ancienne peinture ?",
        answer:
          "Cela dépend de son état. Si l'ancienne couche adhère bien, un nettoyage et une sous-couche suffisent. Si elle cloque, s'écaille ou farine, il faut d'abord la décaper : peindre par-dessus une peinture qui se décolle revient à faire tomber la nouvelle avec l'ancienne. Le diagnostic du support tranche.",
      },
      {
        question: "Quelle est la meilleure saison pour un ravalement ?",
        answer:
          "Le printemps et l'automne sont idéals : les températures douces et l'absence de gel favorisent le séchage des produits. Nous évitons les périodes de gel, de pluie et de forte chaleur, qui compromettent l'accroche et le séchage des revêtements de façade. La météo des jours suivants est toujours vérifiée avant application.",
      },
      {
        question: "Le prix comprend-il la préparation du support ?",
        answer:
          "Oui, et c'est l'essentiel du travail. Nos devis incluent le nettoyage, le traitement et la réparation des fissures avant toute mise en peinture. Une préparation soignée représente une grande part du temps passé : c'est elle qui garantit la tenue de la finition dans le temps.",
      },
    ],
    linkedArticles: [],
    icon: "paint",
    ancre: "peinture et ravalement",
  },
  {
    slug: "charpente-villemandeur",
    name: "Charpente",
    nav: "Charpente",
    h1: "Charpente à Villemandeur : réparation et rénovation",
    metaTitle: "Charpente à Villemandeur : Réparation & Traitement | JCD Rénovation",
    metaDescription:
      "Réparation, renforcement et traitement de charpente à Villemandeur et dans le Loiret. Diagnostic sérieux, garantie décennale.",
    enBref:
      "La réparation ou le renfort ponctuel d'une charpente coûte généralement entre 500 et 2 000 € selon l'ampleur, et son traitement contre les insectes et les champignons se situe autour de 15 à 40 € par m². JCD Rénovation diagnostique, répare et traite les charpentes à Villemandeur (45700) et dans le Loiret. Ces travaux touchent à la solidité de l'ouvrage : la garantie décennale s'applique.",
    intro:
      "La charpente est le squelette de votre toiture : tant qu'elle est saine, la couverture tient. Un bois qui fléchit, s'humidifie ou se creuse sous l'action des insectes doit être diagnostiqué tôt, avant que le problème ne gagne toute la structure.",
    heroImage: "/images/realisations/charpente-villemandeur-01.jpeg",
    heroImageAlt: "Charpente en cours de rénovation à Villemandeur par JCD Rénovation",
    consiste: {
      title: "En quoi consistent des travaux de charpente ?",
      paragraphs: [
        "Nos interventions commencent toujours par un diagnostic de la charpente. Nous examinons l'état du bois pièce par pièce : chevrons, pannes, entraits, arbalétriers. Nous recherchons les signes de fléchissement, les traces d'humidité, les galeries d'insectes et les zones ramollies par un champignon. Ce relevé détermine s'il faut réparer, renforcer, traiter ou remplacer une partie de la structure.",
        "Selon le diagnostic, nous réparons ou renforçons les pièces fatiguées, traitons le bois contre les insectes xylophages et les champignons, et remplaçons les éléments trop atteints pour être conservés. La charpente étant étroitement liée à la couverture, nous intervenons souvent en coordination avec les travaux de toiture : une charpente saine est la condition d'une toiture durable.",
      ],
      points: [
        {
          title: "Diagnostic de charpente",
          text: "Examen du bois pièce par pièce : fléchissement, humidité, galeries d'insectes et zones attaquées par les champignons.",
        },
        {
          title: "Réparation et renfort",
          text: "Reprise ou renforcement des pièces fatiguées, chevrons, pannes et entraits, avec pose de renforts adaptés.",
        },
        {
          title: "Traitement du bois",
          text: "Traitement curatif et préventif contre les insectes xylophages et les champignons, appliqué sur l'ensemble de la charpente.",
        },
        {
          title: "Remplacement partiel",
          text: "Dépose et remplacement des éléments trop atteints pour être conservés, en lien avec la couverture.",
        },
      ],
    },
    signes: {
      title: "Quand faire appel pour votre charpente ?",
      items: [
        "Une poutre ou un chevron fléchit visiblement, la toiture semble s'affaisser",
        "Le bois présente de la sciure fine, de petits trous ronds ou des galeries en surface",
        "Des traces d'humidité, des taches sombres ou une odeur de moisi apparaissent dans les combles",
        "Le bois sonne creux ou s'effrite quand on le sonde",
        "Des fissures ou un désordre apparaissent après une infiltration prolongée",
      ],
    },
    sections: [
      {
        title: "Comment reconnaître une charpente en souffrance ?",
        paragraphs: [
          "Une charpente ne se dégrade pas du jour au lendemain : elle donne des signes qu'un œil averti repère à temps. Le premier est le fléchissement. Une panne ou un entrait qui se courbe, une ligne de faîtage qui ondule, une toiture qui semble creuser sont des signaux à ne pas négliger. Le bois travaille sous une charge qu'il ne supporte plus, ou parce qu'une pièce a perdu de sa résistance.",
          "L'humidité est le deuxième signe. Une charpente doit rester sèche. Des traces sombres sur le bois, un aspect gorgé d'eau, une odeur de moisi dans les combles trahissent une infiltration ou un défaut de ventilation. L'eau ramollit le bois et ouvre la porte aux champignons, dont la mérule, capable de dévorer une charpente entière si rien n'est fait.",
          "Les attaques d'insectes se repèrent à la sciure fine au pied des poutres, aux petits trous ronds à la surface du bois et aux galeries que l'on découvre en grattant. Un bois qui sonne creux ou s'effrite sous la pointe d'un tournevis est déjà attaqué en profondeur. Au moindre de ces signes, un diagnostic s'impose : plus l'atteinte est prise tôt, plus la réparation reste limitée.",
        ],
      },
      {
        title: "Insectes xylophages et champignons : curatif ou préventif ?",
        paragraphs: [
          "Le bois de charpente a deux grands ennemis. Les insectes xylophages d'abord : le capricorne des maisons et la vrillette creusent des galeries qui vident le bois de l'intérieur, souvent sans signe visible avant plusieurs années. Les champignons ensuite, qui se développent dès que le bois reste humide. Le plus redouté est la mérule, un champignon qui se propage vite et fragilise la structure en profondeur.",
          "Le traitement curatif s'attaque à une infestation en cours. Le bois est sondé pour évaluer la profondeur de l'atteinte, les parties trop abîmées sont retirées, puis un produit est injecté au cœur du bois et appliqué en surface pour tuer insectes ou champignons. Il s'accompagne toujours de la recherche et de la suppression de la cause, en particulier la source d'humidité qui a permis au champignon de s'installer.",
          "Le traitement préventif protège un bois encore sain. Appliqué sur une charpente traitée ou remplacée, il crée une barrière contre les insectes et les champignons pour de longues années. C'est une précaution utile lors d'une rénovation de toiture, quand la charpente est accessible et à découvert. Traiter à ce moment coûte peu au regard de la protection obtenue.",
        ],
        bullets: [
          "Capricorne et vrillette : galeries dans le bois, sciure fine, trous de sortie ronds en surface",
          "Champignons et mérule : bois ramolli, filaments, odeur de moisi liée à une humidité persistante",
          "Traitement curatif : sondage, retrait des parties atteintes, injection et application d'un produit",
          "Traitement préventif : barrière longue durée sur un bois sain, idéale lors d'une rénovation",
        ],
      },
      {
        title: "Réparer, renforcer ou remplacer : le lien entre charpente et couverture",
        paragraphs: [
          "Toute charpente atteinte ne se remplace pas. Bien souvent, la réparation ou le renfort suffit : une pièce fléchie est soulagée par un renfort, un about de poutre attaqué en pied est remplacé sans toucher au reste, un assemblage fatigué est consolidé. Conserver ce qui est sain coûte moins cher et respecte la structure d'origine. Le remplacement complet ne s'impose que lorsque le bois est trop atteint pour être sauvé.",
          "Le diagnostic tranche entre ces solutions. Il mesure l'étendue réelle de l'atteinte, souvent plus limitée qu'elle n'en a l'air, et vérifie que les pièces voisines sont saines. Nous privilégions toujours la solution la plus mesurée : réparer ce qui peut l'être, remplacer seulement ce qui doit l'être. Un devis détaillé accompagne chaque proposition.",
          "Charpente et couverture forment un tout. Une charpente qui fléchit déforme la couverture et ouvre des passages à l'eau ; une infiltration prolongée, à l'inverse, pourrit la charpente. Nous traitons donc souvent les deux ensemble : reprendre une charpente sous une toiture fatiguée, ou vérifier la structure lors d'une rénovation de couverture. Parce que ces travaux touchent à la solidité de l'ouvrage, ils relèvent de la garantie décennale.",
        ],
      },
    ],
    tarifs: {
      title: "Prix des travaux de charpente en 2026",
      rows: [
        {
          label: "Traitement de charpente (insectes, champignons)",
          fourchette: "15 à 40 €",
          unite: "par m²",
        },
        {
          label: "Réparation ou renfort ponctuel",
          fourchette: "500 à 2 000 €",
          unite: "selon ampleur",
        },
        { label: "Remplacement de charpente", fourchette: "sur devis", unite: "" },
      ],
      facteurs: [
        "Ampleur de l'atteinte et nombre de pièces concernées",
        "Type d'intervention (traitement, renfort ou remplacement)",
        "Accessibilité de la charpente et des combles",
        "Essence et section des bois à reprendre",
      ],
      disclaimer:
        "Fourchettes indicatives du marché en 2026. L'état d'une charpente ne se juge qu'après examen : le prix exact est établi après diagnostic sur place, sans engagement.",
    },
    faq: [
      {
        question: "Comment savoir si ma charpente est attaquée par des insectes ?",
        answer:
          "Les signes classiques sont la sciure fine au pied des poutres, de petits trous ronds à la surface du bois et des galeries visibles en grattant. Un bois qui sonne creux ou s'effrite sous une pointe est déjà atteint en profondeur. Au moindre doute, un diagnostic sur place lève l'incertitude.",
      },
      {
        question: "Le traitement de charpente est-il vraiment nécessaire ?",
        answer:
          "Oui dès qu'une attaque est constatée : un bois laissé sans traitement continue de se creuser jusqu'à perdre sa résistance. En préventif, le traitement protège un bois sain pour de longues années, notamment lors d'une rénovation de toiture. C'est une dépense modeste face au coût d'un remplacement de charpente.",
      },
      {
        question: "Faut-il remplacer toute la charpente ou peut-on réparer ?",
        answer:
          "La réparation ou le renfort suffit dans la majorité des cas : on soulage une pièce fléchie, on remplace un about de poutre atteint sans toucher au reste. Le remplacement complet ne s'impose que lorsque le bois est trop dégradé. Le diagnostic mesure l'étendue réelle de l'atteinte avant de décider.",
      },
      {
        question: "Les travaux de charpente sont-ils couverts par la garantie décennale ?",
        answer:
          "Oui. La charpente touche à la solidité de l'ouvrage : les travaux de réparation, de renfort ou de remplacement relèvent de la garantie décennale pendant dix ans, en plus de notre responsabilité civile professionnelle. L'attestation d'assurance est fournie avec le devis.",
      },
      {
        question: "Qu'est-ce que la mérule et faut-il s'en inquiéter ?",
        answer:
          "La mérule est un champignon qui se développe sur un bois humide et mal ventilé. Elle se propage vite et fragilise la charpente en profondeur, parfois sans signe visible au début. Sa présence impose un traitement et surtout la suppression de la source d'humidité. Prise tôt, elle se traite ; ignorée, elle peut condamner une charpente entière.",
      },
    ],
    linkedArticles: [],
    icon: "carpenter",
    ancre: "travaux de charpente",
  },
] as const;

export function getPrestation(slug: PrestationSlug): Prestation {
  const prestation = prestations.find((p) => p.slug === slug);
  if (!prestation) {
    throw new Error(`Prestation inconnue : ${slug}`);
  }
  return prestation;
}
