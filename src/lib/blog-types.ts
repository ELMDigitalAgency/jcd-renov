import { z } from "zod";

import { blogSlugs, prestationSlugs, type BlogSlug } from "@/content/types";

/**
 * Contrat du frontmatter des articles MDX — validé par Zod au build
 * (lib/blog.ts) ET en test (tests/blog-registry.test.ts). Un article dont le
 * frontmatter ne passe pas fait échouer le build : c'est voulu.
 *
 * Séparé de lib/blog.ts (qui utilise `fs`) pour rester importable côté
 * client/tests sans dépendance Node.
 */
export const frontmatterSchema = z.object({
  title: z.string().min(10).max(90),
  description: z.string().min(50).max(160),
  date: z.iso.date(),
  updated: z.iso.date().optional(),
  keywords: z.array(z.string()).min(2),
  category: z.enum(["demoussage", "fuite", "zinguerie", "couverture", "entretien", "conseils"]),
  /** Maillage interne OBLIGATOIRE vers les pages prestations (Excel SEO). */
  linkedServices: z.array(z.enum(prestationSlugs)).min(1),
  draft: z.boolean().default(false),
});

export type PostFrontmatter = z.infer<typeof frontmatterSchema>;

export type PostMeta = PostFrontmatter & {
  slug: BlogSlug;
};

export { blogSlugs };
