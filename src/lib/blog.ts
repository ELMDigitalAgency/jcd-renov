// Module serveur uniquement (fs) : ne jamais l'importer depuis un composant client.
import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

import { blogSlugs, type BlogSlug } from "@/content/types";
import { frontmatterSchema, type PostMeta } from "@/lib/blog-types";

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

/** Slug = nom de fichier (jamais dans le frontmatter → pas de désynchronisation). */
export function getPostSlugs(): BlogSlug[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""))
    .filter((slug): slug is BlogSlug => (blogSlugs as readonly string[]).includes(slug));
}

/** Frontmatter validé + contenu brut d'un article. */
export function getPostSource(slug: BlogSlug): { meta: PostMeta; content: string } {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const parsed = frontmatterSchema.safeParse(data);
  if (!parsed.success) {
    throw new Error(
      `Frontmatter invalide pour ${slug}.mdx : ${JSON.stringify(parsed.error.issues, null, 2)}`,
    );
  }
  return { meta: { ...parsed.data, slug }, content };
}

/** Tous les articles publiés, triés du plus récent au plus ancien. */
export function getAllPosts(): PostMeta[] {
  return getPostSlugs()
    .map((slug) => getPostSource(slug).meta)
    .filter((meta) => !meta.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostsForPrestation(prestationSlug: string): PostMeta[] {
  return getAllPosts().filter((post) =>
    (post.linkedServices as readonly string[]).includes(prestationSlug),
  );
}
