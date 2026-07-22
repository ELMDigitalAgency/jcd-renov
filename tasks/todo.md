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

## Phase 5 — Pages
- [ ] Accueil : 11 sections CDC §4 (hero bicolore, stats, diagnostic, fuite, process, bento, garanties, FAQ+schema, CTA, témoignages carrousel)
- [ ] `PrestationPageTemplate` + 4 pages prestations (CDC §5 : consiste, signes, tarifs, zones, FAQ, CTA, articles liés)
- [ ] `CityPageTemplate` + Montargis/Amilly/Chalette + `/zone-intervention`
- [ ] `/realisations` (galerie lightbox), `/avis-clients`, `/a-propos`, `/devis-gratuit` (UI), `/mentions-legales` (hébergeur Vercel), `/politique-de-confidentialite`

## Phase 6 — Blog
- [ ] Infra MDX (`lib/blog.ts`, mdx-components, CtaEncart/TableauPrix/FaqArticle, listing, [slug], tests registre)
- [ ] 15 articles rédigés (sous-agents parallèles, briefs Excel : slug + mots-clés + maillage imposés)

## Phase 7 — Formulaire devis
- [ ] `devis-schema.ts` partagé, compression image canvas, DevisForm + FileInput, `api/devis/route.ts` + Resend
- [ ] Tests : honeypot, time-trap, validation, 413, mock Resend

## Phase 8 — Finition SEO
- [ ] `sitemap.ts`, `robots.ts` (crawlers IA autorisés), `public/llms.txt`
- [ ] OG images `ImageResponse` (template marine/orange, TTF)
- [ ] Table 301 complète (2 jeux d'URLs + .html + .php) + test intégrité
- [ ] Audit metas vs Excel (chaque page = title/description/H1 exacts)

## Phase 9 — QA
- [ ] `npm run check` (typecheck + lint + tests + build SSG 31+ pages)
- [ ] Lighthouse (perf ≥ 90, SEO ≥ 95, a11y ≥ 95) + a11y clavier
- [ ] Revue paranoïaque + passe itération

## Phase 10 — Livraison
- [ ] `A-VALIDER-CLIENT.md`, `DEPLOIEMENT.md` (Vercel/DNS/Resend/GSC/GBP), `README.md`
- [ ] Commits conventionnels par phase

## Revue de fin de tâche
_(à remplir à la livraison)_
