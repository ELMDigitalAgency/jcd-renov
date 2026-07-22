# À valider avec le client avant mise en ligne

> Règle suivie pendant toute la refonte (cahier des charges §8) : **rien n'a été
> inventé**. Chaque élément ci-dessous est soit un placeholder à confirmer, soit
> une donnée reprise de l'ancien site à faire valider. Fichier de référence
> technique : `src/site.config.ts` (constante `CLIENT_TODOS`).

## 1. Chiffres du bandeau statistiques (page d'accueil)

| Affiché actuellement | Statut | Action |
|---|---|---|
| « 14 ans d'expérience en couverture » | ⚠️ Repris de l'ancien site, non vérifié | Confirmer le chiffre réel |
| « 24-48 h pour recevoir votre devis gratuit » | ✅ Engagement process | RAS |
| « 10 ans de garantie décennale » | ✅ Badge présent sur l'ancien site | Fournir l'attestation d'assurance à jour |

## 2. Coordonnées & NAP (Nom / Adresse / Téléphone)

- **Téléphone affiché** : 07 49 10 06 56 (repris des mentions légales de l'ancien site) — à confirmer.
- **Email de réception des devis** : `contact@jcd-renovation.com` par défaut (variable `CONTACT_EMAIL_TO` sur Vercel). Recommandé : créer `contact@jcd-renovation.fr` aligné sur le domaine du site.
- **Adresse légale** : 815 route de St Maurice, 45230 La Chapelle-sur-Aveyron (mentions légales). La stratégie SEO est centrée sur **Villemandeur** : si l'entreprise dispose d'un local/adresse à Villemandeur, le signaler — sinon le Google Business Profile sera en « zone desservie » (voir DEPLOIEMENT.md).
- **Horaires d'ouverture** : non renseignés sur les anciens sites → non affichés. À fournir si souhaité.

## 3. Certifications

- Des concurrents locaux affichent **RGE / Qualibat**. JCD en dispose-t-il ?
  **Ne rien afficher sans justificatif** — actuellement seule la garantie
  décennale est mentionnée.

## 4. Note Google & avis

- Aucune note Google n'est affichée ni injectée en données structurées
  (`googleRating: null` dans `site.config.ts`) tant qu'un profil Google
  Business avec une vraie note n'existe pas.
- Les **9 avis clients** de l'ancien site sont repris mot pour mot (fautes
  comprises — authenticité). L'avis de **Julio** mentionne la taille de
  haies/élagage (ancienne activité espaces verts) : le conserver ou le retirer ?

## 5. Photos

- Les photos de chantiers de l'ancien site ont été reprises (dédoublonnées,
  renommées, optimisées). Le client avait annoncé de **nouvelles photos
  démoussage / zinguerie / recherche de fuite** : à relancer — les pages
  prestations gagneront à montrer des photos dédiées à chaque prestation.
- **Logo** : logo typographique « JCD RÉNOVATION » (fidèle à la maquette).
  Demander le logo vectoriel HD s'il existe.

## 6. Réseaux sociaux

- Aucun lien affiché (les URLs de l'ancien site étaient factices). Fournir les
  vrais comptes Facebook/Instagram s'ils existent → `site.config.ts > socials`.

## 7. Zones géographiques

- **Décision appliquée** (validée avec Cyril) : focus 100 % Villemandeur +
  agglomération Montargoise. Les anciennes zones (Orléans, Nemours,
  Sully-sur-Loire, Sens) sont **abandonnées** avec redirections 301 vers les
  pages équivalentes. Faire confirmer une dernière fois par le client qu'il
  n'intervient plus dans ces zones.
- Communes « à confirmer » de la stratégie SEO non intégrées pour l'instant :
  Fontenay-sur-Loing, Ferrières-en-Gâtinais, Château-Renard. À ajouter dans
  `src/content/communes.ts` si le client s'y déplace réellement.

## 8. Arbitrage éditorial notable

- **H1 de l'accueil** : le cahier des charges design proposait « Protégez votre
  toiture à Villemandeur », la stratégie SEO impose « Couvreur & Zingueur à
  Villemandeur » (mot-clé exact). **La version SEO a été retenue** (l'accroche
  « Protégez votre toiture » reste présente dans le hero en phrase
  d'introduction).
- **Fourchettes de prix** affichées (pages prestations + articles) : données de
  marché France 2026, toujours accompagnées d'un disclaimer « indicatif ». Le
  client peut les ajuster à sa politique tarifaire réelle.
