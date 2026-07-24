import { z } from "zod";

/**
 * Schéma PARTAGÉ client/serveur du formulaire de devis.
 * - Côté client : validation au submit (DevisForm) avec des booléens natifs.
 * - Côté serveur : validation du FormData (route /api/devis) où la case
 *   consentement arrive en string "true" — d'où le preprocess.
 */

export const PRESTATION_OPTIONS = [
  "Couverture",
  "Charpente",
  "Zinguerie",
  "Démoussage",
  "Recherche de fuite",
  "Peinture",
  "Urgence",
] as const;

export type PrestationOption = (typeof PRESTATION_OPTIONS)[number];

/** Téléphone FR permissif : 0X ou +33X puis 4 paires de chiffres (espaces, points, tirets acceptés). */
export const PHONE_FR_REGEX = /^(?:\+33\s?|0)[1-9](?:[\s.-]?\d{2}){4}$/;

export const devisSchema = z.object({
  nom: z
    .string({ error: "Indiquez votre nom." })
    .min(2, { error: "Indiquez votre nom (2 caractères minimum)." })
    .max(100, { error: "Nom trop long (100 caractères maximum)." }),
  telephone: z
    .string({ error: "Indiquez votre numéro de téléphone." })
    .regex(PHONE_FR_REGEX, {
      error: "Numéro de téléphone invalide. Format français attendu (ex. 06 12 34 56 78).",
    }),
  email: z.email({ error: "Adresse email invalide." }),
  ville: z
    .string({ error: "Indiquez votre ville." })
    .min(2, { error: "Indiquez votre ville (2 caractères minimum)." })
    .max(100, { error: "Ville trop longue (100 caractères maximum)." }),
  prestation: z.enum(PRESTATION_OPTIONS, { error: "Choisissez une prestation." }),
  message: z
    .string({ error: "Décrivez votre projet." })
    .min(10, { error: "Décrivez votre projet en quelques mots (10 caractères minimum)." })
    .max(2000, { error: "Message trop long (2000 caractères maximum)." }),
  /** Case RGPD obligatoire — accepte true (client) ou "true" (FormData serveur). */
  consentement: z.preprocess(
    (value) => value === true || value === "true",
    z.literal(true, {
      error: "Vous devez accepter l'utilisation de vos données pour envoyer la demande.",
    }),
  ),
});

export type DevisInput = z.infer<typeof devisSchema>;
