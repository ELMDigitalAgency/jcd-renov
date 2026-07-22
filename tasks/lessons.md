# Leçons — JCD Rénovation

Format : date · contexte · erreur/apprentissage · règle.

## 2026-07-22 — Audit initial
- **Contexte** : reprise du dossier après 2 ans. Le dossier local et le site en ligne divergent totalement.
- **Apprentissage** : toujours vérifier ce qui est RÉELLEMENT en ligne avant de planifier une refonte (sitemap live, mentions légales live). Le dossier local (.com, ELM) n'a jamais correspondu au site en ligne (.fr, Webkom) — les avis clients et badges n'existaient que sur le .fr.
- **Règle** : le plan de redirections 301 doit couvrir LES DEUX jeux d'URLs (site en ligne + dossier local).

## 2026-07-22 — Refonte : leçons de l'exécution
- **next-mdx-remote v6 supprime silencieusement les props JSX en expression** (`rows={[...]}`) sans `blockJS: false` → tableaux/FAQ vides sans erreur. Toujours tester le RENDU HTML des MDX, pas seulement la compilation.
- **Palette accessible dès le design system** : l'orange vif BuildSafe (#F2731E) ne passe AA nulle part en texte (2,9:1 sur blanc). Solution élégante : 2 tons (vif pour décor/icônes, terracotta #B04A08 pour texte accent et bandeaux) — 31 échecs de contraste réglés sans trahir la maquette. Règle : valider les ratios AVANT de généraliser une couleur de texte.
- **Windows + TaskStop** : tuer le wrapper npm laisse le process node orphelin sur le port → `Get-NetTCPConnection -LocalPort` puis `Stop-Process` avant de relancer.
- **typedRoutes** : les types de routes sont générés depuis les pages EXISTANTES → créer les stubs de toutes les routes avant de paralléliser les agents, puis `npx next typegen`.
- **Orchestration multi-agents** : périmètres de fichiers strictement disjoints + composants partagés écrits par l'orchestrateur AVANT le fan-out = zéro conflit sur 18 agents.

## 2026-07-22 — Pièges techniques anticipés (veille versions)
- TypeScript latest npm = 7.x → épingler `~5.9.3` (plugin Next incompatible sinon).
- Tailwind v4 scanne tous les fichiers non-gitignorés → `@source not "../../legacy"` obligatoire sinon le CSS embarque le Bootstrap legacy.
- Next 15 : `params`/`searchParams` sont des Promises (`await params`).
- `next lint` déprécié → scripts sur `eslint .` direct.
- Zod 4 : `z.iso.date()`, `z.email()` top-level.
- Satori (next/og) : polices TTF uniquement, `display:flex` explicite sur les div multi-enfants.
