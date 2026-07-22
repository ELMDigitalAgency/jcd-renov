# Déploiement — jcd-renovation.fr sur Vercel

Guide pas-à-pas. Durée totale estimée : 1 à 2 h (+ délais DNS).

## 1. Projet Vercel

1. Pousser le repo sur GitHub (privé).
2. [vercel.com](https://vercel.com) → **Add New Project** → importer le repo.
   Framework « Next.js » détecté automatiquement, aucun réglage build à changer.
3. **Environment Variables** (Production + Preview) :
   | Nom | Valeur |
   |---|---|
   | `RESEND_API_KEY` | clé API Resend (étape 3) |
   | `CONTACT_EMAIL_TO` | email qui reçoit les devis (cf. A-VALIDER-CLIENT.md §2) |
   | `NEXT_PUBLIC_GA_ID` | *(optionnel)* ID GA4 `G-XXXX` — active mesure d'audience + bandeau cookies |
4. Deploy → vérifier l'URL de preview `*.vercel.app`.

## 2. Domaines (DNS chez OVH)

Dans Vercel → Settings → **Domains** :

1. Ajouter `www.jcd-renovation.fr` → **domaine principal**.
2. Ajouter `jcd-renovation.fr` (apex) → « Redirect to www.jcd-renovation.fr » (308).
3. Ajouter `jcd-renovation.com` et `www.jcd-renovation.com` → « Redirect to
   www.jcd-renovation.fr » — c'est ce qui rend actives les redirections 301 des
   anciennes URLs du site .com (le chemin est préservé).

Chez OVH (Zone DNS des deux domaines) :
- `www` → CNAME → `cname.vercel-dns.com.`
- apex (`@`) → A → `76.76.21.21`
- Supprimer les anciens enregistrements A/AAAA pointant vers l'hébergement OVH mutualisé.

⚠️ Ne PAS toucher aux enregistrements MX (emails) s'il y a des boîtes mail OVH.

## 3. Resend (formulaire de devis)

1. Créer un compte [resend.com](https://resend.com) (gratuit : 3 000 emails/mois, largement suffisant).
2. **Domains → Add Domain** : `jcd-renovation.fr` → ajouter chez OVH les
   enregistrements DNS proposés (SPF TXT + DKIM CNAME/TXT). Attendre « Verified ».
3. **API Keys** → créer une clé → la mettre dans `RESEND_API_KEY` sur Vercel → redeployer.
4. Tester le formulaire en production (envoi réel + réception + Reply-To fonctionne).

> Le `from` du code est `devis@jcd-renovation.fr` (`src/app/api/devis/route.ts`).
> Tant que le domaine n'est pas vérifié dans Resend, l'envoi échouera : c'est voulu
> (jamais d'email non authentifié SPF/DKIM — délivrabilité).

## 4. Google Search Console + Bing

1. [search.google.com/search-console](https://search.google.com/search-console) →
   propriété **Domaine** `jcd-renovation.fr` (validation par TXT DNS chez OVH).
2. **Sitemaps** → soumettre `https://www.jcd-renovation.fr/sitemap.xml`.
3. Surveiller « Pages » les premières semaines : les anciennes URLs doivent
   passer en « Page avec redirection » (301 en place).
4. Idem sur Bing Webmaster Tools (import direct depuis GSC possible).

## 5. Google Business Profile (SEO local — CRITIQUE)

C'est le levier n°1 sur « couvreur villemandeur » (le concurrent Auguste
Couverture Martin est implanté à Villemandeur même).

1. [business.google.com](https://business.google.com) → créer/revendiquer la fiche
   « JCD Rénovation ».
2. Catégories : **Couvreur** (principale) + Entreprise de zinguerie.
3. Adresse : selon décision client (A-VALIDER-CLIENT.md §2) — si pas de local à
   Villemandeur, fiche en « zone desservie » centrée Villemandeur/Montargis.
4. Téléphone : 07 49 10 06 56 — **strictement identique au site** (cohérence NAP).
5. Site web : `https://www.jcd-renovation.fr` ; lien devis :
   `https://www.jcd-renovation.fr/devis-gratuit`.
6. Ajouter 10-15 photos de chantiers (réutiliser `public/images/realisations/`).
7. **Routine avis** : demander un avis Google après chaque chantier (SMS avec le
   lien court de la fiche). Objectif : 2-3 avis/mois. Une fois ≥ 5 avis avec une
   vraie note : renseigner `googleRating` dans `src/site.config.ts` pour
   activer l'affichage de la note + le schéma AggregateRating.

## 6. Après mise en ligne (checklist Excel « SEO technique »)

- [ ] `https://www.jcd-renovation.fr/robots.txt` accessible (autorise crawlers IA)
- [ ] `https://www.jcd-renovation.fr/sitemap.xml` OK (31 URLs)
- [ ] `https://www.jcd-renovation.fr/llms.txt` OK (visibilité IA / GEO)
- [ ] Tester 3-4 anciennes URLs → 301 vers les bonnes pages
      (`/nettoyage-et-demoussage-de-toiture-45`, `/contact`, `/couverture-a-montargis-45200`)
- [ ] Formulaire testé en prod (avec et sans photo)
- [ ] Rich Results Test Google sur `/` et une page prestation
      (RoofingContractor + FAQPage détectés)
- [ ] PageSpeed Insights mobile ≥ 90 ; LCP < 2,5 s
- [ ] Annuaire local : PagesJaunes + annuaire de la CMA du Loiret (cohérence NAP)
- [ ] Suivi mensuel : onglet « Suivi & KPIs » du fichier Excel
      (`docs/JCD_Renovation_Strategie_SEO_Villemandeur.xlsx`)

## Calendrier éditorial restant

Les 15 articles du calendrier (onglet « Blog ») sont déjà tous rédigés et en
ligne. Pour entretenir la fraîcheur : mettre à jour 1 article/mois (champ
`updated` du frontmatter) en commençant par les articles prix (le marché bouge
chaque année).
