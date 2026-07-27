import type { Ville, VilleSlug } from "@/content/types";

/**
 * Pages villes (zones secondaires) : contenu UNIQUE par ville, jamais
 * dupliqué (metas exactes de la stratégie SEO, onglet « Architecture »).
 * Chaque page renvoie vers la page pilier /couvreur-villemandeur.
 */
export const villes: readonly Ville[] = [
  {
    slug: "couvreur-montargis",
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
    sections: [
      {
        title: "Toitures anciennes du centre de Montargis : ce qui change sur un chantier",
        paragraphs: [
          "Le centre ancien de Montargis concentre des maisons de ville aux toitures à forte pente, souvent couvertes de tuiles plates ou d'ardoise. Ces couvertures multiplient les points singuliers : noues entre pans, lucarnes, arêtiers, rives sur rue. Chaque point singulier est une zone d'étanchéité à part entière, qui demande un savoir-faire spécifique et des matériaux adaptés au bâti ancien. Un remaniement y prend logiquement plus de temps que sur un pavillon récent.",
          "L'accès complique aussi l'intervention. Les rues étroites du cœur de ville, notamment le long des canaux, limitent le stationnement des véhicules et la pose d'échafaudages. Nous préparons chaque chantier en amont : repérage des accès, choix du mode de levage, protection des passages. Cette organisation évite les mauvaises surprises, tient les délais annoncés et respecte un voisinage souvent très proche en mitoyenneté.",
          "Sur ces toitures, la règle est de conserver tout ce qui peut l'être. Une tuile plate ancienne encore saine est remise en place ; seuls les éléments gélifs ou cassés sont remplacés, dans une teinte proche de l'existant. Cette approche demande plus de minutie qu'un remplacement complet, mais elle préserve le caractère de la maison tout en lui redonnant une étanchéité durable.",
        ],
        bullets: [
          "Fortes pentes : travail sur échafaudage sécurisé indispensable",
          "Noues et lucarnes : zones d'étanchéité sensibles, contrôlées en priorité",
          "Tuiles plates et ardoises : remplacement à l'identique des éléments abîmés",
          "Accès étroits le long des canaux : logistique préparée avant le chantier",
        ],
      },
      {
        title: "Démoussage à Montargis : pourquoi les canaux accélèrent la mousse",
        paragraphs: [
          "Montargis est traversée par le Loing et par un réseau de canaux qui lui vaut son surnom de Venise du Gâtinais. Cette présence permanente de l'eau entretient une humidité de l'air plus élevée que dans les communes de plateau. Sur les toitures, la conséquence est visible : mousses, lichens et algues s'installent plus tôt et se développent plus vite, en particulier sur les pans orientés au nord et les zones ombragées par les bâtiments voisins.",
          "Une mousse installée retient l'eau contre la couverture, maintient les tuiles humides et accélère leur porosité. Sur les toitures anciennes du centre, dont les matériaux ont parfois plusieurs décennies, ce phénomène raccourcit nettement la durée de vie de la couverture. Le gel hivernal aggrave ensuite les dégâts : l'eau retenue par la mousse gèle, se dilate et fait éclater la surface des tuiles.",
          "Dans cet environnement, nous conseillons un démoussage complet avec traitement préventif tous les cinq ans environ, plutôt que le rythme plus espacé praticable en zone sèche. Comptez une fourchette de 15 à 35 €/m² selon la surface, la pente et l'état de la couverture. Un contrôle visuel annuel depuis le sol permet d'ajuster ce rythme à l'exposition réelle de votre maison.",
        ],
      },
      {
        title: "Rénover une toiture dans le secteur ancien de Montargis : les démarches",
        paragraphs: [
          "Refaire une toiture modifie l'aspect extérieur d'une construction : ces travaux sont en principe soumis à déclaration préalable en mairie, même lorsque vous conservez le même matériau. Dans un centre historique comme celui de Montargis, des prescriptions particulières peuvent s'appliquer selon la localisation du bien : matériau de couverture, teinte des tuiles, aspect des ouvrages de zinguerie. Chaque adresse est un cas particulier.",
          "Avant tout engagement, renseignez-vous auprès du service urbanisme de votre mairie ou de l'agglomération Montargoise : c'est la seule source fiable pour connaître les règles applicables à votre parcelle. Nous vous aidons ensuite à constituer le volet technique du dossier : descriptif des matériaux, coloris retenus, photos de l'existant. Anticiper cette démarche évite de retarder le chantier, les délais d'instruction se comptant en semaines.",
        ],
        bullets: [
          "Déclaration préalable : à anticiper avant de planifier les travaux",
          "Prescriptions possibles sur matériaux et teintes en secteur ancien",
          "Une seule source fiable : le service urbanisme de la mairie ou de l'agglomération",
          "Notre appui : descriptif technique et photos pour votre dossier",
        ],
      },
      {
        title: "Zinguerie sur le bâti Montargois : chéneaux, mitoyennetés et descentes",
        paragraphs: [
          "Le bâti ancien de Montargis présente des configurations de zinguerie que l'on rencontre rarement sur les pavillons récents. Les chéneaux encaissés, dissimulés derrière un muret ou une corniche, collectent l'eau de pans entiers : la moindre fissure y provoque des infiltrations directes dans la maçonnerie, invisibles depuis la rue pendant des mois. Leur contrôle régulier est l'un des entretiens les plus rentables sur ce type de maison.",
          "Les jonctions entre maisons mitoyennes constituent l'autre point sensible. Un solin fatigué contre le mur du voisin, une noue commune vieillissante ou un chéneau partagé mal entretenu peuvent créer des désordres chez deux propriétaires à la fois. Nous diagnostiquons précisément l'origine du problème avant toute intervention, ce qui clarifie les responsabilités de chacun et évite les travaux inutiles.",
          "Les descentes d'eaux pluviales en façade sur rue subissent enfin les chocs et le gel. Une descente en zinc percée tache la façade et sature le pied de mur à chaque pluie. Le remplacement se fait à l'identique, en zinc, avec des fixations adaptées à la maçonnerie ancienne, pour un écoulement durable et un rendu soigné côté rue.",
        ],
      },
    ],
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
      {
        question: "Faut-il une autorisation pour refaire sa toiture à Montargis ?",
        answer:
          "Une réfection de toiture est en principe soumise à déclaration préalable, et des prescriptions particulières peuvent s'appliquer dans le centre ancien de Montargis. Renseignez-vous auprès du service urbanisme avant de lancer les travaux ; nous vous aidons à préparer le volet technique du dossier.",
      },
      {
        question: "À quel rythme faire démousser une toiture à Montargis ?",
        answer:
          "L'humidité entretenue par le Loing et les canaux accélère le développement des mousses. Dans les quartiers proches de l'eau, un démoussage avec traitement préventif tous les cinq ans environ est un bon rythme, à ajuster selon l'orientation et l'ombrage de votre toiture.",
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
    sections: [
      {
        title: "Pavillons d'Amilly des années 1960 à 1990 : des toitures en fin de cycle",
        paragraphs: [
          "Une grande partie de l'habitat d'Amilly s'est construite entre les années 1960 et 1990 : des pavillons couverts de tuiles mécaniques en terre cuite ou en béton, conçues pour durer quarante à cinquante ans. Beaucoup de ces couvertures arrivent aujourd'hui en fin de cycle : la surface des tuiles devient poreuse, les emboîtements s'usent et les premiers déplacements apparaissent après les coups de vent.",
          "Ces toitures ont aussi été posées, pour la plupart, sans écran de sous-toiture. En cas de tuile déplacée ou poreuse, rien ne retient l'eau avant l'isolant et les plafonds. C'est pourquoi un simple coup d'œil après tempête ne suffit pas : un remaniement périodique, qui consiste à reprendre les tuiles une à une, permet de remplacer les éléments défaillants avant que la fuite ne se déclare.",
          "Lorsque les tuiles sont saines mais poreuses en surface, un traitement hydrofuge appliqué après démoussage redonne à la couverture sa capacité à évacuer l'eau et prolonge sa durée de vie de plusieurs années. C'est souvent l'option la plus économique avant d'envisager, à terme, une rénovation complète. Nous vous disons honnêtement où en est votre toiture et ce qui vaut la peine d'être engagé.",
        ],
        bullets: [
          "Tuiles mécaniques de 40 à 50 ans : porosité et emboîtements usés",
          "Écran de sous-toiture souvent absent sur cette génération de pavillons",
          "Remaniement : reprise tuile par tuile avant l'apparition des fuites",
          "Hydrofuge après démoussage : durée de vie prolongée à moindre coût",
          "Gouttières d'origine : à contrôler en même temps que la couverture",
        ],
      },
      {
        title: "Entretien de toiture à Amilly : composer avec un environnement arboré",
        paragraphs: [
          "Amilly est une commune verte : jardins arborés des secteurs résidentiels, abords du bourg, rives du Loing. Cet environnement agréable a un revers pour les toitures. Les feuilles mortes s'accumulent dans les gouttières dès l'automne, et l'ombre portée des arbres maintient certains pans dans une humidité quasi permanente, où la mousse s'installe bien plus vite qu'en plein soleil.",
          "Le versant nord des toitures cumule les deux handicaps : peu d'ensoleillement et séchage lent après chaque pluie. C'est presque toujours sur ce côté que le feutrage de mousse apparaît en premier. Le surveiller depuis le jardin, une à deux fois par an, donne une alerte précoce fiable sans monter sur le toit. Ce réflexe simple évite bien des dégradations silencieuses.",
          "Pour les maisons entourées d'arbres, nous recommandons un entretien à double passage : un nettoyage des gouttières en fin d'automne, une fois les feuilles tombées, puis un contrôle au printemps pour vérifier la couverture et les évacuations après l'hiver. Ce rythme évite les débordements de gouttières qui tachent les façades et détrempent les pieds de murs.",
        ],
      },
      {
        title: "Rénovation énergétique par le toit à Amilly : coupler réfection et isolation",
        paragraphs: [
          "Le toit est l'une des premières sources de déperdition de chaleur d'une maison mal isolée. Sur les pavillons d'Amilly construits avant les réglementations thermiques actuelles, l'isolation des combles est souvent mince, tassée ou absente. Résultat : un étage difficile à chauffer l'hiver, surchauffé l'été, et des factures d'énergie plus lourdes qu'elles ne devraient l'être.",
          "Le moment le plus pertinent pour isoler est celui d'une réfection de couverture. Toiture découverte, l'accès aux combles et à la charpente est direct : pose d'un isolant performant, mise en place d'un écran de sous-toiture, soin apporté à l'étanchéité à l'air. Coupler les deux chantiers évite de payer deux fois l'échafaudage et la main-d'œuvre de dépose.",
          "Cette approche donne aussi une toiture cohérente : couverture, écran, isolation et ventilation sont pensés ensemble, ce qui limite les risques de condensation dans les combles. Lors du diagnostic, nous examinons l'état de l'isolation existante et vous disons si le couplage se justifie sur votre maison ou si une simple réfection suffit.",
        ],
      },
      {
        title: "Extension et surélévation à Amilly : réussir le raccord de toiture",
        paragraphs: [
          "Agrandir sa maison est un projet courant dans les quartiers pavillonnaires d'Amilly, où la taille des parcelles le permet souvent. Côté toiture, la réussite d'une extension ou d'une surélévation se joue sur le raccord entre le neuf et l'existant : c'est là que se concentrent les risques d'infiltration lorsque le travail est approximatif, et c'est là que se voit la qualité d'exécution.",
          "L'harmonisation des matériaux compte autant que l'étanchéité. Des tuiles neuves posées à côté de tuiles de trente ans se remarquent immédiatement ; nous recherchons des modèles et des teintes compatibles avec l'existant, ou répartissons les tuiles pour atténuer les différences. La noue de jonction entre les deux toitures, où transite toute l'eau collectée, est traitée avec un soin particulier : support rigide, zinc façonné, recouvrements généreux.",
          "Le raccord au mur d'une surélévation demande la même rigueur : solins et bavettes en zinc, engravure dans la maçonnerie, continuité de l'écran de sous-toiture. Un raccord bien exécuté est invisible et ne réclame jamais de retouche. C'est le niveau d'exigence que nous appliquons à chaque jonction entre toiture neuve et toiture existante.",
        ],
      },
    ],
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
      {
        question: "Peut-on isoler les combles pendant une réfection de toiture à Amilly ?",
        answer:
          "Oui, et c'est même le meilleur moment : la couverture déposée donne un accès direct aux combles et à la charpente. Coupler les deux chantiers mutualise l'échafaudage et la main-d'œuvre, et permet de poser un écran de sous-toiture dans le même temps.",
      },
      {
        question: "Ma toiture en tuiles mécaniques des années 1970 doit-elle être remplacée ?",
        answer:
          "Pas forcément. Si la charpente est saine et les tuiles simplement poreuses, un démoussage suivi d'un traitement hydrofuge et un remaniement des éléments abîmés prolongent la couverture de plusieurs années. Le diagnostic gratuit permet de trancher honnêtement entre entretien et rénovation.",
      },
    ],
  },
  {
    slug: "couvreur-chalette-sur-loing",
    name: "Chalette-sur-Loing",
    cp: "45120",
    h1: "Couvreur à Chalette-sur-Loing : couverture & zinguerie",
    metaTitle: "Couvreur à Chalette-sur-Loing (45120) - JCD Rénovation",
    metaDescription:
      "Couvreur à Chalette-sur-Loing : couverture, zinguerie, démoussage. Garantie décennale. Devis gratuit 24-48h. Artisan local Montargis.",
    enBref:
      "JCD Rénovation est votre couvreur à Chalette-sur-Loing (45120), basé à Villemandeur à moins de dix minutes. Couverture, zinguerie, démoussage, charpente, recherche de fuite et peinture de façade. Garantie décennale, devis gratuit sous 24-48 h, sans engagement.",
    intro: [
      "JCD Rénovation est une entreprise artisanale de couverture et de zinguerie installée à Villemandeur (45700), à moins de dix minutes de Chalette-sur-Loing. Nous intervenons sur toute la commune — du Bourg à Vésines en passant par les quartiers pavillonnaires — et dans l'ensemble de l'agglomération Montargoise : Montargis, Amilly, Cepoy, Corquilleroy et les communes voisines du Loiret.",
      "Quatorze ans d'expérience dans le métier, un seul interlocuteur du diagnostic à la fin du chantier, et des travaux couverts par la garantie décennale. Pas de sous-traitance, pas de surprise en fin de chantier. Chalette étant dans notre cœur de zone, un diagnostic peut être planifié rapidement, et en priorité en cas de fuite active.",
    ],
    sections: [
      {
        title: "Humidité du Loing, du canal et du lac : l'effet réel sur les toits de Chalette",
        paragraphs: [
          "Chalette-sur-Loing est littéralement entourée d'eau : le Loing borde la commune, le canal de Briare la traverse et le lac de Chalette occupe une place centrale dans la ville. Cette eau omniprésente s'évapore en continu et maintient une humidité de l'air supérieure à celle des communes plus sèches du plateau du Gâtinais. Les toitures en subissent directement les conséquences, saison après saison.",
          "Une couverture qui sèche lentement après chaque pluie offre aux mousses, algues et lichens des conditions idéales. Ces organismes colonisent d'abord les pans orientés au nord et les zones ombragées, puis gagnent l'ensemble du toit. Les tuiles restent humides plus longtemps, deviennent poreuses plus tôt et résistent moins bien aux cycles de gel et de dégel de l'hiver.",
          "Le traitement préventif prend ici tout son sens. Après un démoussage complet, l'application d'un produit anti-mousse retarde la recolonisation ; un hydrofuge peut compléter le traitement sur les tuiles devenues poreuses. Dans les quartiers proches de l'eau, ce protocole renouvelé tous les cinq à huit ans maintient la couverture saine pour un coût très inférieur à celui d'une rénovation prématurée.",
        ],
      },
      {
        title: "Le bâti de Chalette-sur-Loing : les pathologies que nous rencontrons",
        paragraphs: [
          "L'habitat de Chalette s'est largement développé entre les années 1950 et 1980, entre quartiers pavillonnaires et anciennes maisons de bourg. Ces générations de constructions partagent des pathologies de toiture bien identifiées, que l'humidité locale accentue. Les reconnaître tôt permet des réparations ciblées, bien moins coûteuses qu'une reprise en urgence après infiltration.",
          "Le faîtage scellé au mortier est le premier point faible : avec les années, le scellement se fissure sous l'effet des mouvements de la charpente et du gel, et l'eau s'infiltre par le haut du toit. Les tuiles béton de cette époque, très répandues, perdent leur couche de surface et deviennent poreuses. La zinguerie d'origine, enfin, arrive en bout de course : solins décollés, noues fatiguées, gouttières déformées.",
          "Chacune de ces pathologies a sa réponse : reprise du scellement ou pose d'un faîtage à sec ventilé, traitement hydrofuge ou remplacement des tuiles trop atteintes, réfection des ouvrages de zinc. Le diagnostic sur place, gratuit, hiérarchise les urgences et permet d'étaler les interventions pour respecter votre budget.",
        ],
        bullets: [
          "Faîtage scellé fissuré : infiltrations par le haut du toit",
          "Tuiles béton poreuses : surface usée, hydrofuge ou remplacement selon l'état",
          "Solins et noues d'origine en fin de vie : reprise en zinc",
          "Gouttières déformées ou percées : remplacement au profil adapté",
        ],
      },
      {
        title: "Gouttières et évacuations à Chalette : prévenir les obstructions",
        paragraphs: [
          "Feuilles mortes, débris de mousses détachés de la couverture, humidité qui fait tout adhérer : à Chalette, les gouttières s'encrassent vite. Une gouttière obstruée déborde à chaque pluie soutenue ; l'eau ruisselle alors sur la façade, s'infiltre derrière les bandeaux et détrempe les pieds de murs. Des désordres coûteux pour un problème qui se prévient facilement.",
          "Nous recommandons un entretien biannuel : un passage en fin d'automne pour évacuer les feuilles, un second au printemps pour contrôler l'état général et vérifier que les descentes évacuent correctement. Ce contrôle est aussi l'occasion de repérer une jonction fatiguée, une pente de gouttière affaissée ou un crochet descellé avant qu'ils ne provoquent un débordement localisé.",
          "Pour les maisons entourées d'arbres, la pose d'un pare-feuilles limite fortement les obstructions : une grille ou un profilé empêche les feuilles d'entrer dans la gouttière tout en laissant passer l'eau. L'investissement est modeste et réduit d'autant la fréquence des nettoyages. Nous vous conseillons la solution adaptée à votre configuration lors du diagnostic.",
        ],
      },
      {
        title: "Urgence fuite à Chalette-sur-Loing : intervenir vite et bien",
        paragraphs: [
          "Une fuite de toiture ne prévient pas : c'est souvent une auréole au plafond après un orage qui donne l'alerte. À ce stade, chaque jour compte, car l'eau poursuit son chemin dans l'isolant et les plafonds même une fois la pluie arrêtée. Basés à quelques minutes de Chalette, nous traitons ces situations en priorité dans notre planning.",
          "La première intervention vise la mise hors d'eau : bâchage professionnel de la zone touchée ou réparation provisoire, pour stopper immédiatement la progression des dégâts. Vient ensuite la recherche de fuite proprement dite, qui localise le point d'entrée réel de l'eau, parfois éloigné de la tache visible à l'intérieur. La réparation définitive est alors chiffrée précisément, sans travaux superflus.",
          "Si un sinistre est déclaré, nous vous accompagnons dans les échanges avec votre assurance : photos datées des dégâts, rapport d'intervention, devis détaillé poste par poste. Ces pièces facilitent l'instruction du dossier et la prise en charge des réparations. Vous gardez un seul interlocuteur, du bâchage d'urgence jusqu'à la réception des travaux.",
        ],
      },
    ],
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
      {
        question: "Que faire en cas de fuite de toiture à Chalette-sur-Loing ?",
        answer:
          "Placez un récipient sous la fuite, mettez vos biens à l'abri et contactez-nous : basés à quelques minutes de Chalette, nous planifions la mise hors d'eau en priorité. Ne montez jamais sur le toit vous-même, surtout par temps humide.",
      },
      {
        question: "Un pare-feuilles sur les gouttières est-il utile à Chalette ?",
        answer:
          "Oui pour les maisons proches d'arbres : la grille empêche les feuilles de s'accumuler tout en laissant l'eau s'écouler, ce qui espace les nettoyages et limite les débordements. Nous vous conseillons le modèle adapté lors du diagnostic gratuit.",
      },
    ],
  },
  {
    slug: "couvreur-gien",
    name: "Gien",
    cp: "45500",
    h1: "Couvreur à Gien",
    metaTitle: "Couvreur à Gien (45500) - JCD Rénovation",
    metaDescription:
      "Couvreur à Gien : couverture, zinguerie, démoussage, recherche de fuite. Garantie décennale. Devis gratuit. Intervention Loiret.",
    enBref:
      "JCD Rénovation intervient à Gien (45500) pour tous vos travaux de toiture : couverture, zinguerie, démoussage, recherche de fuite, charpente et ravalement. Artisan du Loiret, devis gratuit sous 24-48 h, travaux couverts par la garantie décennale.",
    intro: [
      "Reconstruite après les bombardements de 1940, Gien présente un bâti d'une homogénéité rare dans le Loiret : le centre a été relevé dans les années 1940-1950 selon un plan d'ensemble, avec ses briques rouges et noires caractéristiques et ses toitures en ardoise à forte pente. Autour de ce cœur reconstruit s'étendent des quartiers pavillonnaires plus récents, en tuile mécanique, et les hameaux des coteaux qui dominent la Loire.",
      "Ces deux mondes n'appellent pas les mêmes gestes. L'ardoise du centre demande un travail au crochet, un contrôle régulier des fixations et une vigilance particulière sur les rives et les souches de cheminée. Les pavillons de périphérie relèvent, eux, d'un entretien plus classique : démoussage, reprise de faîtage, remplacement de gouttières. Nous intervenons sur les deux, depuis notre base de Villemandeur.",
    ],
    sections: [
      {
        title: "Toitures en ardoise du centre reconstruit : ce qu'elles réclament",
        paragraphs: [
          "Les toitures du centre de Gien relevées après-guerre ont aujourd'hui soixante-dix à quatre-vingts ans. L'ardoise naturelle, elle, vieillit remarquablement bien : c'est rarement le matériau qui lâche en premier, mais ses fixations. Les crochets et les clous se corrodent, l'ardoise glisse, et une seule pièce déchaussée ouvre un passage à l'eau. Le contrôle porte donc d'abord sur les fixations et sur les zones où le vent s'engouffre : rives, égouts, arêtiers.",
          "Le second point de vigilance concerne les souches de cheminée et les lucarnes, nombreuses sur ce bâti. Les solins qui raccordent l'ardoise à la maçonnerie subissent des dilatations différentielles saison après saison ; le mortier se fissure, l'eau s'infiltre le long du conduit et ressort parfois plusieurs mètres plus loin, dans une chambre à l'étage. Reprendre un solin est une intervention courte, sans commune mesure avec les dégâts qu'elle évite.",
          "Sur ces couvertures, nous remplaçons à l'identique : une ardoise naturelle de format et d'épaisseur comparables, jamais un panneau imitation qui trahirait l'ensemble. C'est plus long, cela coûte un peu plus cher à la pièce, mais c'est la seule façon de conserver la cohérence d'un centre-ville reconstruit d'un seul tenant — et souvent, la seule que le règlement d'urbanisme autorise.",
        ],
        bullets: [
          "Fixations corrodées : première cause de désordre sur une couverture ardoise ancienne",
          "Solins de cheminée et lucarnes : contrôle prioritaire, réfection rapide",
          "Remplacement à l'identique en ardoise naturelle, jamais en imitation",
          "Fortes pentes : intervention sur échafaudage sécurisé systématique",
        ],
      },
      {
        title: "Vents de Loire et exposition : pourquoi les toits giennois souffrent",
        paragraphs: [
          "Gien s'étire le long de la Loire, dans un couloir où le vent s'engouffre sans obstacle. Les maisons du quai et celles des coteaux exposées à l'ouest encaissent des rafales que les communes abritées du Gâtinais ne connaissent pas. Sur une couverture, cela se traduit par des tuiles ou des ardoises soulevées, des faîtages descellés et des rives arrachées — des désordres qui apparaissent brutalement après un coup de vent, pas progressivement.",
          "Ce contexte justifie deux réflexes. Le premier : faire contrôler la toiture après chaque épisode venteux marqué, même sans dégât visible depuis le sol. Une tuile déplacée de quelques centimètres ne se voit pas d'en bas mais laisse entrer l'eau à chaque pluie, pendant des mois. Le second : privilégier, lors d'une réfection, les fixations mécaniques renforcées en rives et en faîtage plutôt qu'un simple scellement au mortier.",
          "L'humidité de la vallée joue le rôle inverse, plus lent mais tout aussi réel : elle entretient mousses et lichens sur les pans nord et sur les couvertures ombragées par les coteaux boisés. Dans ces situations, un démoussage avec traitement préventif tous les cinq à sept ans suffit généralement à maintenir la couverture saine.",
        ],
      },
      {
        title: "Rénover une toiture à Gien : les règles à connaître avant de commencer",
        paragraphs: [
          "Le centre reconstruit de Gien fait l'objet d'une attention patrimoniale particulière, et le château qui domine la ville place une partie du bâti dans le périmètre de protection d'un monument historique. Concrètement, une réfection de toiture peut y être soumise à l'avis de l'Architecte des Bâtiments de France, en plus de la déclaration préalable de travaux exigée dans tous les cas dès lors que l'aspect extérieur est modifié.",
          "Ces contraintes portent le plus souvent sur le matériau et sa teinte : conserver l'ardoise là où elle existe, respecter un format, éviter les finitions trop brillantes. Elles ne sont pas un obstacle, mais elles allongent l'instruction et doivent être anticipées : déposer le dossier après avoir commandé les matériaux est le meilleur moyen de bloquer un chantier. Le service urbanisme de la mairie de Gien est la seule source fiable pour savoir ce qui s'applique à votre adresse.",
        ],
        bullets: [
          "Déclaration préalable exigée même à matériau identique",
          "Avis de l'ABF possible dans le périmètre du château",
          "Prescriptions fréquentes sur le matériau et la teinte",
          "Notre appui : descriptif technique, références matériaux et photos pour le dossier",
        ],
      },
      {
        title: "Zinguerie et évacuation des eaux sur les coteaux de Gien",
        paragraphs: [
          "Les maisons bâties sur les coteaux giennois posent une question que l'on rencontre peu en terrain plat : où va l'eau une fois descendue de la toiture ? Une descente qui déverse au pied d'un mur en pente amont sature le terrain et remonte par capillarité dans la maçonnerie. Le désordre se manifeste en bas de mur, à l'intérieur, et l'on cherche longtemps une fuite de toiture qui n'existe pas.",
          "Nous vérifions donc systématiquement le raccordement des descentes : dauphin en fonte en pied, rejet éloigné de la façade, connexion au réseau lorsqu'elle existe. C'est un point de contrôle rapide qui évite des diagnostics coûteux et des reprises de maçonnerie inutiles.",
          "Sur le bâti ancien du centre, la configuration change : chéneaux encaissés derrière une corniche, noues entre pans, jonctions en mitoyenneté. Ces ouvrages collectent l'eau de surfaces importantes et la moindre fissure décharge directement dans le bâti, sans signe visible depuis la rue pendant des mois. Leur contrôle régulier reste l'un des entretiens les plus rentables sur ce type de maison.",
        ],
      },
    ],
    atouts: [
      {
        title: "Habitués à l'ardoise",
        text: "Le centre reconstruit de Gien impose un travail soigné en ardoise naturelle : fixations, rives, solins de cheminée. Nous remplaçons à l'identique.",
      },
      {
        title: "Diagnostic après coup de vent",
        text: "L'exposition aux vents de Loire déplace tuiles et ardoises. Nous contrôlons la couverture et chiffrons la reprise, sans vous vendre une réfection inutile.",
      },
      {
        title: "Un seul interlocuteur",
        text: "Vous traitez directement avec l'artisan qui monte sur le toit : devis honnête, chantier suivi de bout en bout, garantie décennale.",
      },
    ],
    faq: [
      {
        question: "Intervenez-vous à Gien depuis Villemandeur ?",
        answer:
          "Oui. Gien est dans notre zone d'intervention habituelle dans le Loiret, au même titre que Château-Renard ou Nogent-sur-Vernisson. Le diagnostic sur place et le devis restent gratuits ; nous convenons simplement d'un créneau qui permet de grouper le déplacement.",
      },
      {
        question: "Faut-il une autorisation pour refaire une toiture à Gien ?",
        answer:
          "Une déclaration préalable de travaux est nécessaire dès lors que l'aspect extérieur change, même à matériau identique. Dans le centre reconstruit et dans le périmètre du château, l'avis de l'Architecte des Bâtiments de France peut s'ajouter et porter sur le matériau et sa teinte. Renseignez-vous auprès du service urbanisme de la mairie avant d'engager quoi que ce soit.",
      },
      {
        question: "Une toiture en ardoise ancienne doit-elle être entièrement refaite ?",
        answer:
          "Rarement. L'ardoise naturelle dure souvent un siècle : ce sont ses fixations qui lâchent en premier. Tant que les ardoises restent saines, une reprise des crochets et des zones déchaussées suffit et coûte une fraction d'une réfection complète. Notre diagnostic vous dit lequel des deux cas s'applique, sans vous pousser vers le plus cher.",
      },
      {
        question: "Que faire après un coup de vent à Gien ?",
        answer:
          "Ne montez pas sur le toit. Regardez depuis le sol si des tuiles ou des ardoises manquent, se sont déplacées ou sont tombées, et vérifiez les combles à la recherche de traces d'humidité ou de points de lumière. Appelez-nous ensuite : une couverture ouverte prend l'eau à chaque pluie, et nous traitons ces situations en priorité.",
      },
      {
        question: "À quel rythme démousser une toiture à Gien ?",
        answer:
          "Tous les cinq à sept ans environ pour une toiture exposée à l'humidité de la vallée ou ombragée par les coteaux boisés. Les pans plein sud, bien ventilés, peuvent attendre davantage. Un contrôle visuel annuel depuis le sol suffit à ajuster ce rythme à votre maison.",
      },
    ],
  },
  {
    slug: "couvreur-sens",
    name: "Sens",
    cp: "89100",
    h1: "Couvreur à Sens",
    metaTitle: "Couvreur à Sens (89100) - JCD Rénovation",
    metaDescription:
      "Couvreur à Sens : couverture, zinguerie, démoussage, recherche de fuite. Garantie décennale. Devis gratuit 24-48h. Intervention Yonne.",
    enBref:
      "JCD Rénovation intervient à Sens (89100) et dans le nord de l'Yonne pour la couverture, la zinguerie, le démoussage, la recherche de fuite, la charpente et le ravalement de façade. Devis gratuit sous 24-48 h, travaux couverts par la garantie décennale.",
    intro: [
      "Première ville de l'Yonne, Sens juxtapose un centre médiéval dense — maisons à pans de bois, toitures à forte pente serrées autour de la cathédrale Saint-Étienne — et de vastes quartiers pavillonnaires développés à partir des années 1960 le long des axes vers Paris et Auxerre. Entre les deux, des faubourgs du XIXe siècle en tuile plate mécanique.",
      "Nous intervenons sur ces trois types de bâti depuis notre base de l'agglomération Montargoise, dont Sens est voisine par la vallée de l'Yonne. Le cœur ancien demande une approche patrimoniale et une logistique préparée ; les pavillons relèvent d'un entretien plus courant, où le démoussage et la reprise de zinguerie représentent l'essentiel des demandes.",
    ],
    sections: [
      {
        title: "Le centre ancien de Sens : forte pente, mitoyenneté et accès contraints",
        paragraphs: [
          "Autour de la cathédrale, le tissu urbain sénonais est serré : maisons mitoyennes, rues étroites, toitures à forte pente couvertes de tuiles plates ou d'ardoise. Chaque chantier y commence par une question logistique avant même la technique — où poser l'échafaudage, comment monter les matériaux, comment protéger le passage des piétons. Nous repérons ces contraintes lors du diagnostic, parce qu'elles pèsent sur le délai autant que sur le prix.",
          "La mitoyenneté ajoute une difficulté propre à ce bâti. Une noue commune à deux maisons, un chéneau partagé, un solin appuyé contre le mur du voisin : le désordre naît chez l'un et se manifeste chez l'autre. Nous établissons d'abord l'origine réelle de l'infiltration avant toute intervention, ce qui clarifie les responsabilités de chacun et évite de refaire une couverture qui n'était pas en cause.",
          "Sur ces toitures anciennes, la règle reste la conservation. Une tuile plate encore dense est remise en œuvre ; seuls les éléments gélifs, fendus ou feuilletés sont remplacés, dans une teinte proche de l'existant. Un remaniement bien mené redonne quinze à vingt ans à une couverture sénonaise pour une fraction du coût d'une réfection totale.",
        ],
        bullets: [
          "Rues étroites : échafaudage et accès préparés avant le chantier",
          "Noues et chéneaux mitoyens : diagnostic de l'origine avant travaux",
          "Tuile plate et ardoise : remplacement à l'identique des éléments abîmés",
          "Fortes pentes du centre médiéval : sécurisation systématique",
        ],
      },
      {
        title: "Pavillons des années 1960-1980 : l'âge où la toiture se rappelle à vous",
        paragraphs: [
          "Les quartiers pavillonnaires qui ceinturent Sens ont aujourd'hui quarante à soixante ans. C'est précisément l'âge charnière d'une couverture en tuile mécanique : les tuiles elles-mêmes tiennent souvent encore, mais les points singuliers fatiguent. Faîtages scellés au mortier qui se descellent, closoirs absents ou dégradés, gouttières en fin de vie, écrans de sous-toiture inexistants sur les constructions les plus anciennes.",
          "À ce stade, le remaniement est presque toujours la bonne réponse : on dépose, on trie, on remplace les tuiles défectueuses, on reprend le faîtage et la zinguerie, et l'on repose sur un support assaini. Comptez 40 à 70 €/m² selon la surface et la complexité, contre 180 à 280 €/m² pour une réfection complète en tuiles. La différence est suffisamment importante pour justifier un vrai diagnostic avant de trancher.",
          "Le signal qui doit alerter n'est pas l'âge affiché mais l'état de la tuile : si elle s'effrite sous les doigts, sonne creux ou casse en série au démontage, la terre cuite est devenue poreuse et le remaniement n'a plus de sens. Nous vous le disons franchement — reposer des matériaux en fin de vie ne rend service à personne.",
        ],
      },
      {
        title: "Démoussage et humidité de la vallée de l'Yonne",
        paragraphs: [
          "La vallée de l'Yonne entretient une humidité de l'air qui favorise nettement l'installation des mousses et des lichens, en particulier sur les pans nord et sur les maisons bordées d'arbres. Une couverture colonisée retient l'eau contre la tuile, la maintient humide en permanence et accélère sa porosité ; le gel hivernal fait ensuite éclater la surface des éléments gorgés d'eau.",
          "Le démoussage se déroule en trois temps : nettoyage adapté au matériau — manuel ou basse pression selon la fragilité, jamais de haute pression sur une tuile ancienne —, traitement anti-mousse curatif, puis hydrofuge lorsque l'état de la couverture le justifie. Comptez 15 à 35 €/m² selon la surface, la pente et l'état de départ. Le nettoyage des gouttières est compris : les mousses délogées ne doivent jamais y stagner.",
          "Dans ce contexte, un démoussage avec traitement préventif tous les cinq ans environ constitue un bon rythme pour une maison exposée, à espacer si la toiture est bien ventilée et dégagée. Méfiez-vous du démarchage à domicile, fréquent sur ce type de prestation dans l'Yonne : un devis établi sans être monté sur le toit ne vaut rien.",
        ],
      },
      {
        title: "Travaux de toiture à Sens : démarches et secteur sauvegardé",
        paragraphs: [
          "Comme partout, une réfection de toiture modifiant l'aspect extérieur relève de la déclaration préalable de travaux. Sens ajoute une contrainte spécifique : une partie du centre historique se situe dans le périmètre de protection de la cathédrale Saint-Étienne et des monuments qui l'entourent, ce qui déclenche l'avis de l'Architecte des Bâtiments de France.",
          "Les prescriptions portent alors sur le matériau, son format, sa teinte et parfois sur l'aspect des ouvrages de zinguerie visibles depuis l'espace public. Chaque parcelle est un cas particulier : seul le service urbanisme de la mairie de Sens peut vous indiquer ce qui s'applique chez vous. Cette démarche se fait avant de commander les matériaux, jamais après. Nous préparons de notre côté le volet technique du dossier : descriptif, références et photos de l'existant.",
        ],
        bullets: [
          "Déclaration préalable systématique dès que l'aspect extérieur change",
          "Avis de l'ABF dans le périmètre de la cathédrale Saint-Étienne",
          "Prescriptions possibles sur matériau, format, teinte et zinguerie apparente",
          "Instruction à anticiper : plusieurs semaines avant le démarrage",
        ],
      },
    ],
    atouts: [
      {
        title: "Deux bâtis, deux méthodes",
        text: "Toitures anciennes à forte pente du centre ou pavillons en tuile mécanique : nous adaptons la technique et les matériaux, jamais l'inverse.",
      },
      {
        title: "Diagnostic avant chiffrage",
        text: "Remaniement ou réfection complète ? Nous montons sur le toit avant de chiffrer et vous disons franchement ce que votre couverture réclame.",
      },
      {
        title: "Artisan, pas démarcheur",
        text: "Aucun démarchage à domicile, aucun devis établi depuis le sol. Diagnostic gratuit, devis détaillé sous 24-48 h, garantie décennale.",
      },
    ],
    faq: [
      {
        question: "Intervenez-vous à Sens et dans le nord de l'Yonne ?",
        answer:
          "Oui. L'Yonne fait partie de nos trois départements d'intervention, avec le Loiret et la Seine-et-Marne. Nous nous déplaçons à Sens (89100) ainsi qu'à Villeneuve-sur-Yonne, Joigny et Charny. Diagnostic sur place et devis restent gratuits.",
      },
      {
        question: "Faut-il une autorisation pour refaire sa toiture à Sens ?",
        answer:
          "Une déclaration préalable est nécessaire dès que l'aspect extérieur est modifié, même à matériau identique. Dans le périmètre de protection de la cathédrale Saint-Étienne, l'avis de l'Architecte des Bâtiments de France s'ajoute et peut porter sur le matériau, le format et la teinte. Le service urbanisme de la mairie est la seule source fiable pour votre parcelle.",
      },
      {
        question: "Mon pavillon des années 1970 : remaniement ou réfection complète ?",
        answer:
          "Cela dépend de l'état des tuiles, pas de l'âge de la toiture. Si elles restent denses et se démontent sans casser en série, un remaniement (40 à 70 €/m²) redonne quinze à vingt ans à la couverture. Si elles s'effritent ou sonnent creux, la terre cuite est poreuse et la réfection complète (180 à 280 €/m² en tuiles) devient le seul choix raisonnable.",
      },
      {
        question: "À quelle fréquence démousser une toiture à Sens ?",
        answer:
          "L'humidité de la vallée de l'Yonne accélère le développement des mousses. Sur une toiture exposée ou ombragée, un démoussage avec traitement préventif tous les cinq ans environ constitue un bon rythme ; une couverture bien ventilée et dégagée peut attendre plus longtemps.",
      },
      {
        question: "Comment reconnaître un devis de démoussage douteux ?",
        answer:
          "Trois signaux doivent vous arrêter : un démarchage à domicile non sollicité, un devis établi sans que personne ne soit monté sur le toit, et une pression à signer immédiatement au prétexte d'une offre limitée. Un artisan sérieux monte, constate, chiffre, puis vous laisse le temps de réfléchir — et vous remet son attestation de garantie décennale sans se faire prier.",
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
