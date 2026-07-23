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
] as const;

export function getVille(slug: VilleSlug): Ville {
  const ville = villes.find((v) => v.slug === slug);
  if (!ville) {
    throw new Error(`Ville inconnue : ${slug}`);
  }
  return ville;
}
