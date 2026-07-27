import fs from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { communes } from "@/content/communes";
import { prestations } from "@/content/prestations";
import { prestationSlugs } from "@/content/types";
import { villes } from "@/content/villes";
import { getRelatedPosts } from "@/lib/blog";
import { legacyRedirectMap } from "@/lib/redirects";
import { getAllRoutes } from "@/lib/routes";

/**
 * Garde-fous d'intégrité du contenu.
 *
 * Ces tests existent parce que `typedRoutes` NE protège PAS un renommage de
 * slug : dès qu'un ancien slug devient source de 301, Next le réintègre dans
 * l'union `Route` et un lien oublié compile sans erreur — en produisant une
 * redirection silencieuse. Le compilateur ne peut donc rien ici ; ces
 * assertions sont le seul filet automatisé.
 */

const APP_DIR = path.join(process.cwd(), "src", "app");
const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

describe("routes et fichiers de page", () => {
  it("chaque slug de prestation a bien un dossier de route avec page.tsx", () => {
    for (const slug of prestationSlugs) {
      const pageFile = path.join(APP_DIR, slug, "page.tsx");
      expect(fs.existsSync(pageFile), `page.tsx manquant pour /${slug}`).toBe(true);
    }
  });

  it("chaque slug de ville a bien un dossier de route avec page.tsx", () => {
    for (const ville of villes) {
      const pageFile = path.join(APP_DIR, ville.slug, "page.tsx");
      expect(fs.existsSync(pageFile), `page.tsx manquant pour /${ville.slug}`).toBe(true);
    }
  });

  it("chaque page prestation et ville a son image OpenGraph dédiée", () => {
    const slugs = [...prestationSlugs, ...villes.map((v) => v.slug)];
    for (const slug of slugs) {
      const ogFile = path.join(APP_DIR, slug, "opengraph-image.tsx");
      expect(fs.existsSync(ogFile), `opengraph-image.tsx manquant pour /${slug}`).toBe(true);
    }
  });

  it("chaque href de commune pointe vers une route réelle", () => {
    const routes = new Set(getAllRoutes());
    for (const commune of communes) {
      if (!commune.href) continue;
      expect(routes, `${commune.name} pointe vers une route inexistante`).toContain(commune.href);
    }
  });
});

describe("cohérence des données de prestation", () => {
  it("le fragment d'accent du H1 est bien contenu dans le H1", () => {
    for (const prestation of prestations) {
      expect(
        prestation.h1.includes(prestation.h1Accent),
        `h1Accent « ${prestation.h1Accent} » absent du H1 de /${prestation.slug}`,
      ).toBe(true);
    }
  });

  it("chaque prestation affiche au moins un article lié", () => {
    for (const prestation of prestations) {
      expect(
        getRelatedPosts(prestation).length,
        `aucun article lié sur /${prestation.slug} : la section RelatedArticles serait vide`,
      ).toBeGreaterThan(0);
    }
  });

  it("les fourchettes de prix déclarées sont cohérentes", () => {
    for (const prestation of prestations) {
      if (!prestation.offer) continue;
      expect(prestation.offer.minPrice).toBeGreaterThan(0);
      expect(prestation.offer.maxPrice).toBeGreaterThan(prestation.offer.minPrice);
      expect(prestation.offer.unitText.length).toBeGreaterThan(0);
    }
  });
});

describe("liens internes du blog", () => {
  it("aucun article ne pointe vers une URL qui redirige", () => {
    const sources = new Set(legacyRedirectMap.map((rule) => rule.source));
    const files = fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith(".mdx"));

    for (const file of files) {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
      // Liens Markdown internes : [texte](/chemin)
      const liens = [...raw.matchAll(/\]\((\/[^)\s#]*)/g)].map((match) => match[1]);
      for (const lien of liens) {
        expect(
          sources.has(lien as string),
          `${file} lie ${lien}, qui est une source de redirection 301`,
        ).toBe(false);
      }
    }
  });

  it("tous les liens internes du blog pointent vers des routes réelles", () => {
    const routes = new Set(getAllRoutes());
    const files = fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith(".mdx"));

    for (const file of files) {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
      const liens = [...raw.matchAll(/\]\((\/[^)\s#]*)/g)].map((match) => match[1]);
      for (const lien of liens) {
        expect(routes, `${file} lie ${lien}, qui n'est pas une route du site`).toContain(lien);
      }
    }
  });
});
