# Instructions d'intégration JSON-LD Schema.org

## Bloc JSON-LD pour la homepage

Le bloc JSON-LD ci-dessous doit être intégré dans le `<head>` de la page d'accueil (https://jcdrenovation.fr/).

### Étapes d'intégration

1. **Localiser le `<head>` du fichier HTML** (ou du template Next.js)
2. **Copier le bloc JSON-LD complet** depuis l'artifact "JSON-LD Schema.org RoofingContractor — jcdrenovation.fr"
3. **Coller avant la balise `</head>`** (idéalement après les autres métadonnées)
4. **Envelopper dans une balise `<script type="application/ld+json">`**

### Exemple d'intégration dans le HTML

```html
<head>
  <!-- Autres métadonnées -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Couvreur Zingueur à Villemandeur (45700) | JCD Rénovation</title>
  
  <!-- JSON-LD Schema.org -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    ...
  }
  </script>
</head>
```

### Exemple d'intégration dans Next.js (app router)

```jsx
// Dans layout.tsx ou page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couvreur Zingueur à Villemandeur (45700) | JCD Rénovation',
  description: 'JCD Rénovation, couvreur et zingueur qualifié à Villemandeur...',
};

export default function RootLayout() {
  return (
    <html>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RoofingContractor",
              // ... contenu du JSON-LD
            }),
          }}
        />
      </head>
      <body>{/* ... */}</body>
    </html>
  );
}
```

---

## Contenu du bloc JSON-LD

### Champs principaux

| Champ | Valeur | Notes |
|-------|--------|-------|
| **@context** | `https://schema.org` | Contexte standard schema.org |
| **@type** | `RoofingContractor` | Type de business (sous-type de LocalBusiness) |
| **@id** | `https://jcdrenovation.fr/#roofingcontractor` | Identifiant unique pour le structured data |
| **name** | JCD Rénovation | Nom officiel de l'entreprise |
| **url** | https://jcdrenovation.fr | URL du site principal |
| **telephone** | +33749100656 | Numéro de téléphone au format international |
| **email** | jcdtoiture@gmail.com | Email de contact |

### Adresse (PostalAddress)

```json
"address": {
  "@type": "PostalAddress",
  "streetAddress": "3 bis rue des Plantes",
  "postalCode": "45700",
  "addressLocality": "Villemandeur",
  "addressRegion": "Centre-Val de Loire",
  "addressCountry": "FR"
}
```

### Coordonnées géographiques (Geo)

```json
"geo": {
  "@type": "GeoCoordinates",
  "latitude": "47.9667",
  "longitude": "2.7333"
}
```

**Villemandeur, 45700** — Coordonnées approximatives du centre-ville.

### Horaires d'ouverture (OpeningHoursSpecification)

```json
"openingHoursSpecification": [
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "08:30",
    "closes": "19:00"
  }
]
```

**Lundi à samedi : 08:30 – 19:00** | Dimanche : fermé

### Zone d'intervention (areaServed)

19 villes et 3 départements couverts :

**Villes principales :**
- Villemandeur, Montargis, Amilly, Chalette-sur-Loing

**Villes étendues :**
- Gien, Sens, Nemours, Villeneuve-sur-Yonne, Joigny, Souppes-sur-Loing, Montereau-Fault-Yonne, Cepoy, Corquilleroy, Pannes, Ferrières-en-Gâtinais, Château-Renard

**Départements :**
- Loiret (45), Yonne (89), Seine-et-Marne (77)

### Services (hasOfferCatalog)

6 services avec descriptions :

1. **Couverture** — Pose, rénovation et réparation de toiture
2. **Zinguerie** — Gouttières, solins, chéneaux et noues
3. **Démoussage** — Nettoyage, traitement anti-mousse et hydrofuge
4. **Charpente** — Diagnostic, réparation, renfort et traitement du bois
5. **Recherche de fuite** — Localisation précise des infiltrations
6. **Peinture façade** — Ravalement et peinture intérieure

### Évaluation agrégée (aggregateRating)

```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.9",
  "reviewCount": "8",
  "bestRating": "5",
  "worstRating": "1"
}
```

**À mettre à jour** : Remplacer `ratingValue` et `reviewCount` avec les vraies données de Google Reviews ou Trustpilot.

### Liens sociaux (sameAs)

```json
"sameAs": [
  "https://www.google.com/maps/place/JCD+R%C3%A9novation",
  "https://www.facebook.com/jcdrenovation"
]
```

**À compléter** : Ajouter les URLs réelles des profils Google Business, Facebook, etc.

---

## Validation et test

### Outils de validation

1. **Google Rich Results Test** : https://search.google.com/test/rich-results
2. **Schema.org Validator** : https://validator.schema.org/
3. **Yoast SEO** : Vérifier dans WordPress (si applicable)

### Étapes de test

1. Coller l'URL de la homepage dans Google Rich Results Test
2. Vérifier que le type `RoofingContractor` est détecté
3. Vérifier que tous les champs principaux (name, address, telephone, etc.) sont présents
4. Vérifier qu'aucune erreur n'est signalée

---

## Maintenance et mises à jour

### Champs à mettre à jour régulièrement

- **aggregateRating** : Synchroniser avec les avis Google/Trustpilot
- **openingHoursSpecification** : Mettre à jour en cas de changement d'horaires
- **areaServed** : Ajouter/retirer des villes selon l'évolution de la zone d'intervention
- **sameAs** : Ajouter les nouveaux profils sociaux ou de répertoires

### Fréquence recommandée

- **Avis** : Chaque mois
- **Horaires** : À chaque changement
- **Zone d'intervention** : Chaque trimestre
- **Services** : À chaque ajout/suppression de prestation

---

## Notes importantes

✅ **Le JSON-LD est valide et prêt à coller**

✅ **Tous les champs obligatoires sont présents**

✅ **Les coordonnées géographiques correspondent à Villemandeur (45700)**

⚠️ **À personnaliser** :
- `aggregateRating` : Remplacer par les vraies données
- `sameAs` : Ajouter les vrais profils sociaux
- `image` : Vérifier que l'URL du logo est accessible

---

## Support

Pour toute question sur l'intégration ou la validation du JSON-LD, consulter :
- [Schema.org Documentation](https://schema.org/RoofingContractor)
- [Google Structured Data Help](https://developers.google.com/search/docs/appearance/structured-data)
