# Suivi SEO — JCD Rénovation

---

## 1. À faire immédiatement après le déploiement

La migration de slugs modifie 6 URLs déjà connues de Google. Ces étapes accélèrent la prise en
compte et évitent une perte de trafic transitoire.

- [ ] **Vérifier la propriété** `jcdrenovation.fr` dans la Search Console
      (<https://search.google.com/search-console>) — préférer la propriété *Domaine*, qui couvre
      www et non-www, http et https.
- [ ] **Soumettre le sitemap** : `https://jcdrenovation.fr/sitemap.xml` (36 URLs attendues).
- [ ] **Inspecter et faire indexer les 3 nouvelles pages** (outil *Inspection d'URL* →
      *Demander une indexation*) :
      - `/couverture-toiture`
      - `/couvreur-gien`
      - `/couvreur-sens`
- [ ] **Inspecter les 6 URLs migrées** pour signaler le changement :
      - `/demoussage-toiture`, `/zinguerie`, `/recherche-fuite-toiture`,
        `/peinture-facade`, `/charpente`, `/couvreur-montargis`
- [ ] **Vérifier les redirections en production** — chaque ancienne URL doit répondre en un seul
      saut :
      ```bash
      curl -sI https://jcdrenovation.fr/demoussage-toiture-villemandeur | grep -i location
      ```
      Résultat attendu : `location: https://jcdrenovation.fr/demoussage-toiture` (code 308).
      *Note : Next.js émet un 308 et non un 301 pour les redirections permanentes. Google traite
      les deux à l'identique pour la transmission d'autorité.*
- [ ] **Tester les données structurées** sur une page prestation avec le
      [Rich Results Test](https://search.google.com/test/rich-results) : doivent apparaître
      `Service`, `FAQPage`, `BreadcrumbList`, `RoofingContractor`, `WebSite` — et **aucun**
      `aggregateRating`.
- [ ] **Bing Webmaster Tools** (<https://www.bing.com/webmasters>) : import possible depuis la
      Search Console en un clic. Alimente aussi les réponses de ChatGPT Search.
- [ ] Créer la fiche **Google Business Profile** → [google-business-profile.md](google-business-profile.md)

**Surveiller pendant 4 à 6 semaines** : la couverture d'index (les anciennes URLs doivent sortir
progressivement, les nouvelles entrer) et l'absence d'erreurs 404 dans le rapport *Pages*.

---

## 2. Mots-clés à suivre, par page

Volumes issus de l'audit DataForSEO. Position à relever une fois par mois dans la Search Console
(*Résultats de recherche* → filtrer par page).

### Pages villes

| Page | Mot-clé principal | Volume/mois | Priorité |
|---|---|---|---|
| `/couvreur-montargis` | couvreur Montargis | 720 | 🔴 Haute |
| `/couvreur-chalette-sur-loing` | couvreur Chalette-sur-Loing | 320 | 🟢 Quick win |
| `/couvreur-sens` | couvreur Sens | 590 | 🟡 Moyenne |
| `/couvreur-amilly` | couvreur Amilly | 210 | 🟡 Moyenne |
| `/couvreur-villemandeur` | couvreur Villemandeur | 210 | 🔴 Haute (page pilier) |
| `/couvreur-gien` | couvreur Gien | 110 | 🟡 Moyenne |
| `/zone-intervention` | couvreur 45 / couvreur Loiret | 880 / 390 | 🟡 Moyenne |

> **Chalette-sur-Loing est le seul mot-clé de la zone en difficulté moyenne** : c'est la page à
> surveiller en premier, elle doit bouger avant les autres (2 à 3 mois).

### Pages services

| Page | Mot-clé principal | Volume/mois | Priorité |
|---|---|---|---|
| `/demoussage-toiture` | démoussage toiture | 8 100 | 🔴 Haute |
| `/zinguerie` | zinguerie / couvreur zingueur | 3 600 | 🔴 Haute |
| `/couverture-toiture` | réfection toiture / couverture toiture | 1 600 | 🟡 Moyenne |
| `/recherche-fuite-toiture` | fuite toiture | 1 300 | 🟡 Moyenne |
| `/peinture-facade` | peinture façade | 720 | 🟡 Moyenne |
| `/charpente` | charpente toiture | 480 | 🟡 Moyenne |

### Requêtes locales complémentaires
`urgence toiture` (210) · `devis couvreur` (210) · `traitement toiture` (1 300)

---

## 3. Tableau de suivi mensuel

À compléter le 1er de chaque mois depuis la Search Console, Analytics et le Google Business
Profile.

| Mois | Impressions GSC | Clics GSC | CTR moyen | Position moy. « couvreur Montargis » | Position moy. « démoussage toiture » | Devis reçus | Appels | Avis Google |
|---|---|---|---|---|---|---|---|---|
| M1 | | | | | | | | |
| M2 | | | | | | | | |
| M3 | | | | | | | | |
| M4 | | | | | | | | |
| M5 | | | | | | | | |
| M6 | | | | | | | | |
| M7 | | | | | | | | |
| M8 | | | | | | | | |
| M9 | | | | | | | | |
| M10 | | | | | | | | |
| M11 | | | | | | | | |
| M12 | | | | | | | | |

---

## 4. Ce qu'il est réaliste d'attendre

Le site part de **zéro mot-clé positionné** et d'un profil de liens sans autorité. Le référencement
local se construit sur des mois, pas des semaines.

| Échéance | Attendu |
|---|---|
| Mois 1-2 | Indexation des nouvelles pages, premières impressions. Peu ou pas de clics. Le GBP peut en revanche produire des appels **très rapidement** une fois validé. |
| Mois 3-4 | Premières positions sur les requêtes de longue traîne et sur Chalette-sur-Loing. Trafic organique encore modeste. |
| Mois 6 | Positions consolidées sur les requêtes locales, apparition possible dans le local pack si les avis suivent. |
| Mois 12 | Visibilité durable sur l'agglomération Montargoise. Les requêtes nationales à fort volume (`démoussage toiture`, 8 100/mois) restent difficiles : l'objectif réaliste y est la longue traîne géolocalisée. |

**Le facteur le plus déterminant sur les 3 premiers mois n'est pas le site : c'est la fiche
Google Business Profile et les avis clients.** Le local pack se joue là.

---

## 5. Ce qui reste à la main du client

- Créer et faire valider la fiche Google Business Profile (validation par courrier, 5-14 jours)
- Mettre en place la routine de demande d'avis après chantier
- Inscriptions sur les annuaires ([netlinking.md](netlinking.md))
- Reporter `googleBusinessUrl` et `googleRating` dans `src/site.config.ts` une fois la fiche
  active et les premiers avis obtenus — **avec les valeurs réelles uniquement**

---

## 6. Documents liés

- [google-business-profile.md](google-business-profile.md) — fiche GBP prête à remplir
- [netlinking.md](netlinking.md) — les 10 plateformes et les textes à coller
- [desaveu-backlinks.md](desaveu-backlinks.md) — traitement des 26 backlinks toxiques
- `Plan SEO Complet  JCD Rénovation.md` (racine) — audit d'origine
