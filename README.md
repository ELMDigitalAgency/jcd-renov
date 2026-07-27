# JCD Rénovation — jcd-renovation.fr

Site vitrine de JCD Rénovation, couvreur-zingueur à Villemandeur (45700).
Refonte complète juillet 2026 : Next.js 15 (SSG), design « BuildSafe »
(orange/marine), stratégie SEO locale Villemandeur + agglomération Montargoise.

## Stack

- **Next.js 15.5** (App Router, React 19) — toutes les pages pré-rendues (SSG)
- **TypeScript strict** (zéro `any`) · **Tailwind CSS v4** (`@theme` dans `globals.css`)
- **Blog MDX** (`next-mdx-remote/rsc`, frontmatter validé Zod au build)
- **Formulaire devis** : API route serverless + Resend (honeypot + time-trap + Zod)
- **Tests** : Vitest + Testing Library · ESLint 9 (règle anti-`<h1>` direct) · Prettier

## Démarrer

```bash
npm install
cp .env.example .env.local   # renseigner RESEND_API_KEY pour tester l'envoi réel
npm run dev                  # http://localhost:3000
```

Sans `RESEND_API_KEY`, le formulaire simule l'envoi en dev (log console).

## Scripts

| Commande | Rôle |
|---|---|
| `npm run dev` | Développement (Turbopack) |
| `npm run check` | **La** commande pré-livraison : typecheck + lint + tests + build |
| `npm run test` | Tests Vitest (301, registre blog, schémas JSON-LD, API devis…) |
| `npm run build` | Build production (génère les 36 pages + OG images) |
| `node scripts/audit-build.mjs` | Audit du HTML généré : liens internes, titles, H1 uniques, canonicals (à lancer après `build`) |

## Architecture

```
src/
├── site.config.ts        ← NAP, stats, CLIENT_TODOS — SOURCE UNIQUE de vérité
├── app/                  ← 21 routes + blog/[slug] + api/devis + sitemap/robots/OG
├── components/
│   ├── ui/               ← primitives design system (PageTitle = seul <h1> du site)
│   ├── home|prestations|villes|blog|avis|realisations|devis|consent|sections|layout
├── content/
│   ├── prestations.ts    ← contenu des 4 pages prestations (metas Excel)
│   ├── villes.ts         ← 3 pages villes · communes.ts · avis.ts · faq-home.ts…
│   └── blog/*.mdx        ← 15 articles (slug = nom de fichier, frontmatter Zod)
└── lib/                  ← seo (buildMetadata), schema (JSON-LD), blog, redirects (301)
legacy/                   ← ancien site PHP archivé (exclu du build)
docs/                     ← cahier des charges + stratégie SEO (source des specs)
tasks/                    ← suivi projet (todo, lessons, bugs, contexte)
```

## Les garde-fous à connaître

1. **1 seul `<h1>` par page** : seul `ui/PageTitle` peut en rendre un (ESLint bloque le reste).
2. **Metas uniques** : chaque page passe par `buildMetadata()` (canonical forcé). Les
   titles/descriptions viennent de la stratégie SEO (`docs/strategie-seo-extrait.txt`).
3. **301** : la table vit dans `src/lib/redirects.ts`, testée (`tests/redirects.test.ts`) —
   chaque destination doit exister, zéro chaîne. Ne jamais supprimer une route sans
   la rediriger.
4. **Blog** : ajouter un article = ajouter le slug dans `src/content/types.ts > blogSlugs`
   + créer `src/content/blog/<slug>.mdx`. Le frontmatter est validé au build ; le
   maillage vers les prestations (`linkedServices`) est obligatoire et rendu
   automatiquement.
5. **Rien d'inventé** : chiffres/certifications non confirmés = flagués dans
   `A-VALIDER-CLIENT.md` et `site.config.ts > CLIENT_TODOS`.

## Déploiement

Voir **`DEPLOIEMENT.md`** (Vercel, domaines OVH, Resend SPF/DKIM, Search Console,
Google Business Profile) et **`A-VALIDER-CLIENT.md`** (points à confirmer avant
mise en ligne).
