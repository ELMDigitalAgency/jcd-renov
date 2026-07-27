# Désaveu des backlinks toxiques — JCD Rénovation

> **Constat de l'audit.** 26 backlinks, 26 domaines référents, quasi exclusivement des annuaires
> automatiques (Inde, Ukraine, extensions `.click` et `.info`) avec un spam score de 60 à 75.
> Aucun n'apporte d'autorité réelle.

---

## À lire avant d'agir : le désaveu n'est pas toujours nécessaire

Google traite aujourd'hui l'immense majorité des liens de mauvaise qualité en les **ignorant**,
sans pénaliser le site qui les reçoit. L'outil de désaveu est explicitement décrit par Google
comme réservé à deux situations :

1. une **action manuelle** est signalée dans la Search Console (section *Sécurité et actions
   manuelles*) pour cause de liens artificiels ;
2. il existe un **risque avéré** d'action manuelle — typiquement, des liens payés ou construits
   massivement par une agence précédente.

**Mal utilisé, le désaveu fait plus de mal que de bien** : désavouer par erreur un lien
légitime supprime un signal positif, sans possibilité de récupération rapide.

### La marche à suivre recommandée ici

Le profil décrit par l'audit — 26 liens d'annuaires automatiques, non achetés directement par le
client — correspond au cas classique du **spam de bas de gamme que Google ignore déjà**.

1. **Vérifier d'abord s'il y a une action manuelle** (procédure §1 ci-dessous).
   - **Aucune action manuelle → ne rien désavouer pour l'instant.** Concentrer l'effort sur la
     construction de citations légitimes ([netlinking.md](netlinking.md)), qui améliore
     réellement la situation. Le mauvais ratio actuel se dilue à mesure que de bons liens
     arrivent.
   - **Action manuelle présente → procéder au désaveu** (§2 et §3), puis demander un réexamen.
2. Dans tous les cas, **exporter la liste des domaines référents** et la conserver : elle
   documente l'état de départ et servira de base si un désaveu devient nécessaire.

---

## 1. Vérifier la présence d'une action manuelle

1. Ouvrir la Search Console : <https://search.google.com/search-console>
   (la propriété `jcdrenovation.fr` doit être vérifiée — voir [suivi.md](suivi.md)).
2. Menu **Sécurité et actions manuelles → Actions manuelles**.
3. Lire le résultat :
   - *« Aucun problème détecté »* → pas de désaveu. Passer au netlinking.
   - *« Liens artificiels vers votre site »* → désaveu justifié, continuer ci-dessous.

---

## 2. Exporter la liste des domaines référents

1. Search Console → menu **Liens** (tout en bas de la navigation).
2. Bloc **Liens externes → Sites qui pointent le plus vers vous**.
3. Cliquer sur **Plus**, puis sur le bouton **Exporter** (CSV ou Google Sheets).

Cette liste donne les domaines réellement vus par Google. Les outils tiers (Ahrefs, Majestic,
SE Ranking) peuvent la compléter, mais **la Search Console fait foi**.

### Comment trier

Pour chaque domaine, se poser une seule question : *un humain pourrait-il arriver ici et cliquer
vers JCD Rénovation ?*

| Signal | Verdict |
|---|---|
| Annuaire automatique étranger, aucun rapport avec le BTP ou la France | à désavouer |
| Extensions `.click`, `.info`, `.xyz` sur des sites sans contenu réel | à désavouer |
| Page ne contenant qu'une liste de liens sortants | à désavouer |
| Site en langue étrangère sans lien avec l'activité | à désavouer |
| Annuaire français d'artisans, même modeste | **conserver** |
| Site local (mairie, association, presse, partenaire) | **conserver** |
| Fournisseur, fabricant, réseau professionnel | **conserver** |

**En cas de doute : conserver.** Le risque d'un mauvais lien laissé en place est aujourd'hui
quasi nul ; celui d'un bon lien désavoué est réel.

---

## 3. Construire et envoyer le fichier de désaveu

### Format imposé par Google

- Fichier **texte brut** (`.txt`), encodé en **UTF-8**
- **Une directive par ligne**
- Commentaires précédés de `#`
- Préfixe `domain:` pour bloquer un domaine entier (recommandé pour les annuaires spam :
  ils génèrent souvent plusieurs URLs)
- Une URL seule ne bloque que cette page précise
- Maximum 100 000 lignes / 2 Mo

### Modèle prêt à compléter

Le fichier [`disavow.txt`](disavow.txt) de ce dossier contient l'en-tête et la structure.
Il ne reste qu'à y coller les domaines identifiés à l'étape 2.

### Envoi

1. Ouvrir <https://search.google.com/search-console/disavow-links>
2. Sélectionner la propriété `jcdrenovation.fr`
3. Importer le fichier `disavow.txt`

⚠️ **Chaque envoi remplace intégralement le précédent.** Le fichier doit donc toujours contenir
la liste complète, jamais un ajout isolé. Conserver `disavow.txt` dans ce dépôt pour garder
l'historique.

### Si une action manuelle était présente

Après l'envoi du désaveu, retourner dans **Actions manuelles** et cliquer sur
**Demander un réexamen**, en expliquant factuellement :
- que les liens proviennent d'annuaires automatiques non sollicités,
- qu'ils ont été désavoués,
- qu'une stratégie de citations légitimes est en place (joindre la liste des inscriptions
  faites depuis [netlinking.md](netlinking.md)).

Le traitement prend généralement de quelques jours à quelques semaines.

---

## 4. Effets attendus

- Le désaveu **n'améliore pas le positionnement** : il neutralise un handicap, il ne crée pas
  d'autorité. Le gain de visibilité viendra des pages et des citations légitimes.
- La prise en compte n'est pas immédiate : Google applique les directives au fur et à mesure de
  ses recrawls, comptez plusieurs semaines.
- Les liens désavoués **restent visibles** dans le rapport « Liens » de la Search Console. C'est
  normal : le rapport liste ce qui existe, pas ce qui est pris en compte.
