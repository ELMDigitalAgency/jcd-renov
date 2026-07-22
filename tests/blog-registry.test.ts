import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { mdxComponents, mdxRemoteOptions } from "@/components/blog/mdx-components";
import { blogSlugs, prestationSlugs } from "@/content/types";
import { frontmatterSchema } from "@/lib/blog-types";

/**
 * Test de contrat du registre blog — protège le build (dynamicParams = false)
 * et le SEO. Lit les fichiers .mdx bruts directement (indépendant des filtres
 * de lib/blog) et compile avec les MÊMES composants et options que la page
 * article : ce qui passe ici passe en prod.
 */

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

type Entry = {
  file: string;
  slug: string;
  data: Record<string, unknown>;
  content: string;
};

const entries: Entry[] = fs
  .readdirSync(BLOG_DIR)
  .filter((file) => file.endsWith(".mdx"))
  .map((file) => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
    const { data, content } = matter(raw);
    return { file, slug: file.replace(/\.mdx$/, ""), data, content };
  });

/** Retire les blocs de code ``` avant de chercher des headings. */
function stripCodeFences(markdown: string): string {
  return markdown.replace(/```[\s\S]*?```/g, "");
}

describe("registre blog", () => {
  it("au moins 2 articles publiés (non-draft)", () => {
    const published = entries.filter((entry) => {
      const parsed = frontmatterSchema.safeParse(entry.data);
      return parsed.success && !parsed.data.draft;
    });
    expect(published.length).toBeGreaterThanOrEqual(2);
  });

  it("les slugs sont uniques", () => {
    const slugs = entries.map((entry) => entry.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  for (const entry of entries) {
    describe(entry.file, () => {
      it("son slug appartient à la liste fermée blogSlugs", () => {
        expect(blogSlugs as readonly string[]).toContain(entry.slug);
      });

      it("son frontmatter passe frontmatterSchema", () => {
        const parsed = frontmatterSchema.safeParse(entry.data);
        expect(
          parsed.success,
          parsed.success ? "" : JSON.stringify(parsed.error.issues, null, 2),
        ).toBe(true);
      });

      it("sa description ne dépasse pas 160 caractères", () => {
        const description =
          typeof entry.data.description === "string" ? entry.data.description : "";
        expect(description.length).toBeLessThanOrEqual(160);
      });

      it("son corps ne contient aucun heading de niveau 1", () => {
        const h1Lines = stripCodeFences(entry.content)
          .split(/\r?\n/)
          .filter((line) => /^#\s/.test(line));
        expect(h1Lines).toEqual([]);
      });

      it("compile en MDX et se rend sans référence de composant manquante", async () => {
        const { content } = await compileMDX({
          source: entry.content,
          components: mdxComponents,
          options: mdxRemoteOptions,
        });
        // compileMDX ne fait que créer l'élément : seul le rendu déclenche les
        // erreurs « Expected component X to be defined ».
        const html = renderToStaticMarkup(content);
        expect(html.length).toBeGreaterThan(0);
      });

      it("chaque linkedServices existe dans prestationSlugs", () => {
        const linked = Array.isArray(entry.data.linkedServices)
          ? (entry.data.linkedServices as unknown[])
          : [];
        expect(linked.length).toBeGreaterThanOrEqual(1);
        for (const service of linked) {
          expect(prestationSlugs as readonly string[]).toContain(service);
        }
      });
    });
  }
});
