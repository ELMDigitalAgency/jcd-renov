# TODO — Refonte JCD Rénovation

Plan approuvé : `C:\Users\cyril\.claude\plans\hashed-weaving-bonbon.md`

## Phase 1 — Setup ✅
- [x] Archiver l'ancien site dans `legacy/`, documents dans `docs/`
- [x] Créer `tasks/` (project-context, todo, lessons, bugs)
- [x] Scaffold Next.js 15 + TS strict + Tailwind 4 + configs qualité (ESLint 9 + règle anti-H1, Prettier LF, Vitest)
- [x] `npm run check` vert (smoke)

## Phase 2 — Design system ✅
- [x] `globals.css` : `@theme` + `@source not "../../legacy"`
- [x] next/font : Plus Jakarta Sans (700/800) + Inter (400/500/600)
- [x] Primitives `ui/` complètes (PageTitle seul H1 + verrou ESLint)

## Phase 3 — Données & lib ✅
- [x] `site.config.ts` (NAP réel + stats flaguées + CLIENT_TODOS)
- [x] `content/` : types, prestations (4, metas Excel), villes (3), communes, faq-home, avis (9 réels), process, garanties
- [x] `lib/` : seo, schema (+ tests 6/6), routes, blog (Zod), redirects (table complète + tests 8/8)

## Phase 4 — Shell + images ✅
- [x] layout (fonts, metadataBase, RoofingContractor sitewide, consent), Header sticky + dropdown, Footer marine, not-found, favicon + apple-icon
- [x] Import images : 7 heroes choisis visuellement + 71 photos galerie (9 doublons MD5 éliminés), manifest realisations.ts

## Phase 8 (avancée en parallèle des agents) — SEO technique
- [x] robots.ts (crawlers IA autorisés), sitemap.ts (+ tests), public/llms.txt
- [x] OG images par code : template Satori + défaut + 4 prestations + blog/[slug] dynamique
- [x] Table 301 complète (2 jeux d'URLs + .html + .php + filet) + test intégrité renforcé
- [x] Consentement RGPD + GA4 conditionnel (posture CNIL)
- [x] A-VALIDER-CLIENT.md, DEPLOIEMENT.md, README.md (brouillons livraison)

## Phase 5 — Pages ✅
- [x] Accueil : sections CDC §4 (hero bicolore + stats, diagnostic, fuite, process, bento 6 cartes, garanties, FAQ+schema, CTA, carrousel avis)
- [x] `PrestationPageTemplate` + 4 pages prestations (En bref GEO, consiste, signes, tarifs, zones, FAQ schema, articles liés, CTA)
- [x] `CityPageTemplate` + Montargis/Amilly/Chalette + `/zone-intervention`
- [x] `/realisations` (71 photos lightbox), `/avis-clients` (9 avis réels), `/a-propos`, `/mentions-legales` (Vercel), `/politique-de-confidentialite` (RGPD)

## Phase 6 — Blog ✅
- [x] Infra MDX complète (blockJS:false — piège next-mdx-remote v6 !) + tests registre (rendu HTML réel)
- [x] **15/15 articles rédigés** (13 sous-agents parallèles + 2 pilotes) — verrou de test « exactement 15 publiés »

## Phase 7 — Formulaire devis ✅
- [x] Schéma Zod partagé, compression canvas, DevisForm + FileInput, API Resend (replyTo, pièce jointe, HTML échappé)
- [x] 19 tests : honeypot silencieux, time-trap, validation, 413, 502, env manquante

## Phase 8 — Finition SEO ✅
- [x] sitemap.ts, robots.ts (crawlers IA), llms.txt, OG images build-time (défaut + 4 prestations + articles)
- [x] Table 301 complète (48 règles × variantes) + tests intégrité
- [x] Audit metas vs Excel automatisé (`scripts/audit-build.mjs`) : 31 pages vertes

## Phase 9 — QA ✅
- [x] `npm run check` vert : typecheck + lint + **132 tests** + build **59 pages statiques**
- [x] **Lighthouse mobile 100/100/100/100** (A11y/BP/SEO/Agentic) après passe contraste (palette 2 tons : terracotta primary-ink) — LCP 191 ms, CLS 0.00
- [x] Audit HTML généré : liens internes, titles Excel, H1 uniques, canonicals — 0 erreur
- [x] Vérification visuelle navigateur (accueil + prestation, mobile)

## Phase 10 — Livraison ✅
- [x] `A-VALIDER-CLIENT.md` (10 points, rien d'inventé), `DEPLOIEMENT.md` (Vercel/DNS/Resend/GSC/GBP), `README.md`
- [x] 10 commits conventionnels

## Revue de fin de tâche (22/07/2026)
- **Périmètre couvert** : refonte complète PHP → Next.js 15 SSG, design BuildSafe, stratégie SEO Villemandeur appliquée à la lettre (metas, 15 articles, maillage, 301), formulaire sécurisé, RGPD, GEO (llms.txt, robots IA, En bref).
- **Reste côté humain** : actions DEPLOIEMENT.md (Vercel, DNS, Resend, GSC, GBP) + validations A-VALIDER-CLIENT.md.
- **Dette assumée** : photos spécifiques démoussage/fuite à obtenir du client (heroes actuels = meilleures photos existantes) ; note Google absente tant que GBP inexistant (voulu).
