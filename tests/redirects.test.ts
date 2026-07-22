import { describe, expect, it } from "vitest";

import { buildRedirects, legacyRedirectMap } from "@/lib/redirects";

/**
 * Test d'intégrité de la table 301 — LE test qui protège le SEO.
 * Complété en Phase 8 avec le registre de routes (chaque destination doit
 * exister dans le nouveau site).
 */
describe("redirections 301", () => {
  it("génère les redirections PHP de l'ancien site", () => {
    const rules = buildRedirects();
    const sources = rules.map((r) => r.source);

    expect(sources).toContain("/index.php");
    expect(sources).toContain("/contact.php");
    expect(sources).toContain("/devis.php");
  });

  it("toutes les règles sont permanentes (301)", () => {
    for (const rule of buildRedirects()) {
      expect(rule.permanent).toBe(true);
    }
  });

  it("aucune source dupliquée", () => {
    const sources = buildRedirects().map((r) => r.source);
    expect(new Set(sources).size).toBe(sources.length);
  });

  it("aucune chaîne de redirection (une source n'est jamais une destination)", () => {
    const destinations = new Set(legacyRedirectMap.map((r) => r.destination));
    for (const { source } of legacyRedirectMap) {
      expect(destinations.has(source)).toBe(false);
    }
  });
});
