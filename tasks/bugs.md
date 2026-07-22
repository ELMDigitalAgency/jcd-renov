# Bugs — JCD Rénovation

Format : symptôme · cause · fix · leçon · test de régression.

## Dette héritée (audit 2026-07-22 de l'ancien site — corrigée par la refonte, listée pour mémoire)
1. Coordonnées « indisponible » partout sur le site en ligne .fr → nouveau NAP réel dans `site.config.ts`.
2. ~20 liens `contact.html` inexistant (404) + liens villes aberrants (`couverture-Nemours-89100.html`…) → nouvelle nav typée (`typedRoutes`).
3. Chaîne de debug `--------------------FDGIJFSDKOPFSD` affichée sur realisation.html → refonte.
4. NAP incohérent : JSON-LD « 120 rue Chanzy » (adresse fictive template) ≠ mentions légales → une seule source `site.config.ts`.
5. Compteurs contradictoires (413 clients vs « plus de 120 clients ») → stats centralisées et flaguées à valider.
6. OG/Twitter images référencées inexistantes → OG générées par code (`ImageResponse`).
7. 3 canonicals vers domaine mal orthographié `jcdrenovation.fr` → canonical forcé par `buildMetadata()`.
8. Formulaires nettoyage/ravalement en POST classique → page de JSON brut → API route + fetch + états UI.
9. `mail()` PHP avec From = email visiteur (SPF cassé) → Resend, from sur domaine vérifié, replyTo visiteur.
