import { describe, expect, it } from "vitest";

import { faqHome } from "@/content/faq-home";
import {
  articleSchema,
  breadcrumbSchema,
  faqPageSchema,
  roofingContractorSchema,
} from "@/lib/schema";
import { siteConfig } from "@/site.config";

/**
 * Les types schema-dts sont des unions massives peu ergonomiques à inspecter :
 * on teste la FORME SÉRIALISÉE (c'est elle que Google lit), via un round-trip
 * JSON typé en structure souple.
 */
type Json = Record<string, unknown>;

function serialize(schema: unknown): Json {
  return JSON.parse(JSON.stringify(schema)) as Json;
}

describe("schémas JSON-LD", () => {
  it("RoofingContractor : NAP identique à site.config (cohérence Google Business)", () => {
    const schema = serialize(roofingContractorSchema());
    expect(schema["@type"]).toBe("RoofingContractor");
    expect(schema.telephone).toBe(siteConfig.phoneInternational);
    expect(schema.name).toBe(siteConfig.name);
    const address = schema.address as Json;
    expect(address.streetAddress).toBe(siteConfig.address.street);
    expect(address.postalCode).toBe(siteConfig.address.postalCode);
  });

  it("RoofingContractor : PAS de note tant que googleRating est null (règle : ne rien inventer)", () => {
    const schema = serialize(roofingContractorSchema());
    expect(siteConfig.googleRating).toBeNull();
    expect(schema.aggregateRating).toBeUndefined();
  });

  it("RoofingContractor : couvre toute la zone d'intervention", () => {
    const schema = serialize(roofingContractorSchema());
    const areas = schema.areaServed as Array<{ name: string }>;
    expect(areas.map((a) => a.name)).toContain("Villemandeur");
    expect(areas.map((a) => a.name)).toContain("Montargis");
    expect(areas).toHaveLength(siteConfig.serviceArea.length);
  });

  it("FAQPage : une Question/Answer par item, textes intacts", () => {
    const schema = serialize(faqPageSchema(faqHome));
    expect(schema["@type"]).toBe("FAQPage");
    const questions = schema.mainEntity as Array<{
      name: string;
      acceptedAnswer: { text: string };
    }>;
    expect(questions).toHaveLength(faqHome.length);
    expect(questions[0]?.name).toBe(faqHome[0]?.question);
    expect(questions[0]?.acceptedAnswer.text).toBe(faqHome[0]?.answer);
  });

  it("BreadcrumbList : positions 1..n et URLs absolues", () => {
    const schema = serialize(
      breadcrumbSchema([
        { name: "Accueil", path: "/" },
        { name: "Blog", path: "/blog" },
      ]),
    );
    const items = schema.itemListElement as Array<{ position: number; item: string }>;
    expect(items[0]?.position).toBe(1);
    expect(items[0]?.item).toBe(siteConfig.url);
    expect(items[1]?.item).toBe(`${siteConfig.url}/blog`);
  });

  it("Article : dates et URL canonique correctes", () => {
    const schema = serialize(
      articleSchema({
        slug: "prix-demoussage-toiture-m2",
        title: "Titre de test suffisant",
        description: "Description de test suffisamment longue pour le schéma Zod du frontmatter.",
        date: "2026-07-22",
        updated: undefined,
        keywords: ["a", "b"],
        category: "demoussage",
        linkedServices: ["demoussage-toiture-villemandeur"],
        draft: false,
      }),
    );
    expect(schema.datePublished).toBe("2026-07-22");
    expect(schema.dateModified).toBe("2026-07-22");
    expect(schema.mainEntityOfPage).toBe(`${siteConfig.url}/blog/prix-demoussage-toiture-m2`);
  });

  it("aucun schéma ne sérialise de clé undefined (JSON-LD propre)", () => {
    for (const schema of [roofingContractorSchema(), faqPageSchema(faqHome)]) {
      const json = JSON.stringify(schema);
      expect(json).not.toContain("undefined");
    }
  });
});
