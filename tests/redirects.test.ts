import { describe, expect, it } from "vitest";

import { buildRedirects, legacyRedirectMap } from "@/lib/redirects";
import { getAllRoutes } from "@/lib/routes";

/**
 * Test d'intégrité de la table 301 — LE test qui protège le SEO de la
 * migration. Toute évolution des routes qui casserait une redirection
 * échoue ici, pas en production.
 */
describe("redirections 301", () => {
  const routes = new Set(getAllRoutes());

  it("chaque destination existe dans le nouveau site", () => {
    for (const { source, destination } of legacyRedirectMap) {
      expect(routes.has(destination), `${source} → ${destination} : cible inexistante`).toBe(true);
    }
  });

  it("aucune chaîne de redirection (une source n'est jamais une destination)", () => {
    const destinations = new Set(legacyRedirectMap.map((r) => r.destination));
    for (const { source } of legacyRedirectMap) {
      expect(destinations.has(source), `${source} est aussi une destination`).toBe(false);
    }
  });

  it("aucune source ne masque une route réelle du nouveau site", () => {
    for (const { source } of legacyRedirectMap) {
      expect(routes.has(source), `${source} est une vraie route du site`).toBe(false);
    }
  });

  it("aucune source dupliquée", () => {
    const sources = buildRedirects().map((r) => r.source);
    expect(new Set(sources).size).toBe(sources.length);
  });

  it("toutes les règles sont permanentes (301)", () => {
    for (const rule of buildRedirects()) {
      expect(rule.permanent).toBe(true);
    }
  });

  it("les endpoints PHP et le filet .html sont couverts", () => {
    const sources = buildRedirects().map((r) => r.source);
    expect(sources).toContain("/index.php");
    expect(sources).toContain("/contact.php");
    expect(sources).toContain("/devis.php");
    expect(sources).toContain("/:slug.html");
    // Les 14 URLs du sitemap réel du site en ligne sont toutes couvertes
    expect(sources).toContain("/nettoyage-et-demoussage-de-toiture-45");
    expect(sources).toContain("/urgence-fuite-de-toiture-45");
    expect(sources).toContain("/couverture-a-montargis-45200");
    expect(sources).toContain("/contact");
  });

  it("le filet .html est bien la DERNIÈRE règle (les spécifiques d'abord)", () => {
    const rules = buildRedirects();
    expect(rules[rules.length - 1]?.source).toBe("/:slug.html");
  });
});

describe("registre de routes", () => {
  it("contient les 36 pages attendues (21 pages + 15 articles)", () => {
    // 9 statiques + 7 prestations + 5 villes + 15 articles
    expect(getAllRoutes()).toHaveLength(36);
  });

  it("chaque ancien slug migré est bien une source de 301 (refonte SEO)", () => {
    const sources = new Set(legacyRedirectMap.map((rule) => rule.source));
    const anciensSlugs = [
      "/demoussage-toiture-villemandeur",
      "/recherche-de-fuite-toiture-villemandeur",
      "/zinguerie-villemandeur",
      "/peinture-villemandeur",
      "/charpente-villemandeur",
      "/couvreur-zingueur-montargis",
    ];
    for (const slug of anciensSlugs) {
      expect(sources, `${slug} doit rediriger vers son nouveau slug`).toContain(slug);
    }
  });
});
