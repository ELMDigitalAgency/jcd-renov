# Contexte Projet — JCD Rénovation

## Identité
- **Nom** : Refonte site JCD Rénovation
- **Client** : JCD Rénovation — entreprise de couverture/zinguerie, SIRET 535 075 337 00035, 815 route de St Maurice, 45230 La Chapelle sur Aveyron. Tél 07 49 10 06 56.
- **Description** : Refonte complète du site vitrine d'un couvreur-zingueur pour capter les recherches locales « couvreur / zingueur / démoussage / recherche de fuite » à **Villemandeur (45700)** et l'agglomération Montargoise, et générer des demandes de devis.
- **Contexte agence** : Cyril reprend ce client après 2 ans d'arrêt. Deux anciens sites coexistent : `jcd-renovation.fr` en ligne (Webkom, coordonnées « indisponible ») et un dossier local `.com` (ELM Digital) jamais aligné. Les deux sont remplacés.

## Stack technique
- Next.js 15.5 (App Router, SSG) · React 19 · TypeScript strict (zéro `any`) · Tailwind CSS v4
- Blog : MDX via `next-mdx-remote/rsc`, frontmatter validé Zod
- Formulaire : API route serverless + Resend (email), Zod partagé, honeypot + time-trap
- Tests : Vitest + React Testing Library · ESLint 9 flat + Prettier
- Icônes lucide-react · carrousel embla · lightbox yet-another-react-lightbox

## Type & cible
- Site vitrine B2C local (particuliers propriétaires, Loiret)
- Conversion : demande de devis (formulaire + tel cliquable)

## Déploiement
- **Vercel**, domaine principal `https://www.jcd-renovation.fr` (apex + .com en 301)
- Env : `RESEND_API_KEY`, `CONTACT_EMAIL_TO`, `NEXT_PUBLIC_GA_ID` (optionnel)

## Priorités (ordre)
1. **SEO local Villemandeur** — stratégie complète dans `docs/strategie-seo-extrait.txt` (16 pages, metas imposées, 15 articles, maillage, 301)
2. **Design** — cahier des charges `docs/cahier-des-charges-extrait.txt` (template BuildSafe : orange #F2731E, marine #16213E, crème #F8F3E9, Plus Jakarta Sans/Inter, pills, bento)
3. Conversion (devis) · Performance (LCP < 2,5 s) · Accessibilité

## Règles projet spécifiques
- **NE JAMAIS inventer** : chiffres, certifications, note Google, avis → placeholders + `CLIENT_TODOS` dans `src/site.config.ts`, doc `A-VALIDER-CLIENT.md`
- Zones historiques (Orléans, Nemours, Sully, Sens) **abandonnées** → 301 vers pages équivalentes
- Les 9 avis clients réels (site .fr) sont repris mot pour mot
- Ancien site archivé dans `legacy/` (exclu de tsconfig/eslint/tailwind — ne pas builder)
