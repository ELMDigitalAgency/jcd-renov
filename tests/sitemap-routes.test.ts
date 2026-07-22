import { describe, expect, it } from "vitest";

import sitemap from "@/app/sitemap";
import { getAllPosts } from "@/lib/blog";
import { getPrestationRoutes, getVilleRoutes, staticRoutes } from "@/lib/routes";
import { siteConfig } from "@/site.config";

describe("sitemap.xml", () => {
  const entries = sitemap();
  const urls = entries.map((e) => e.url);

  it("couvre toutes les routes statiques, prestations et villes", () => {
    for (const route of [...staticRoutes, ...getPrestationRoutes(), ...getVilleRoutes()]) {
      const expected = route === "/" ? siteConfig.url : `${siteConfig.url}${route}`;
      expect(urls, `route manquante : ${route}`).toContain(expected);
    }
  });

  it("couvre tous les articles publiés", () => {
    for (const post of getAllPosts()) {
      expect(urls).toContain(`${siteConfig.url}/blog/${post.slug}`);
    }
  });

  it("URLs absolues en https://www.jcd-renovation.fr, jamais de .html", () => {
    for (const url of urls) {
      expect(url.startsWith("https://www.jcd-renovation.fr")).toBe(true);
      expect(url.endsWith(".html")).toBe(false);
    }
  });

  it("aucun doublon", () => {
    expect(new Set(urls).size).toBe(urls.length);
  });

  it("l'accueil est en priorité 1", () => {
    const home = entries.find((e) => e.url === siteConfig.url);
    expect(home?.priority).toBe(1);
  });
});
