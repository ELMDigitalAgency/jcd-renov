import { describe, expect, it } from "vitest";

import { faqHome } from "@/content/faq-home";
import { getPrestation, prestations } from "@/content/prestations";
import {
  articleSchema,
  breadcrumbSchema,
  faqPageSchema,
  roofingContractorSchema,
  serviceSchema,
  websiteSchema,
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

  it("RoofingContractor : couvre les villes ET les 3 départements", () => {
    const schema = serialize(roofingContractorSchema());
    const areas = schema.areaServed as Array<{ "@type": string; name: string }>;
    const noms = areas.map((a) => a.name);
    expect(noms).toContain("Villemandeur");
    expect(noms).toContain("Montargis");
    expect(noms).toContain("Loiret (45)");
    expect(noms).toContain("Yonne (89)");
    expect(noms).toContain("Seine-et-Marne (77)");
    expect(areas).toHaveLength(siteConfig.serviceArea.length + 3);
    expect(areas.filter((a) => a["@type"] === "AdministrativeArea")).toHaveLength(3);
  });

  it("RoofingContractor : coordonnées géographiques présentes", () => {
    const schema = serialize(roofingContractorSchema());
    const geo = schema.geo as Json;
    expect(geo["@type"]).toBe("GeoCoordinates");
    expect(geo.latitude).toBe(siteConfig.geo.latitude);
    expect(geo.longitude).toBe(siteConfig.geo.longitude);
  });

  it("RoofingContractor : catalogue des 6 métiers, sans doublon de la page pilier", () => {
    const schema = serialize(roofingContractorSchema());
    const catalog = schema.hasOfferCatalog as Json;
    expect(catalog["@type"]).toBe("OfferCatalog");
    const offres = catalog.itemListElement as Array<{ itemOffered: { name: string; url: string } }>;
    // 7 prestations - la page pilier locale /couvreur-villemandeur = 6 métiers
    expect(offres).toHaveLength(prestations.length - 1);
    const urls = offres.map((o) => o.itemOffered.url);
    expect(urls).not.toContain(`${siteConfig.url}/couvreur-villemandeur`);
    expect(urls).toContain(`${siteConfig.url}/couverture-toiture`);
    expect(urls).toContain(`${siteConfig.url}/demoussage-toiture`);
  });

  it("RoofingContractor : pas de sameAs tant qu'aucun profil réel n'existe", () => {
    const schema = serialize(roofingContractorSchema());
    expect(siteConfig.googleBusinessUrl).toBeNull();
    // Un tableau vide ou une URL Google Maps devinée pointerait dans le vide.
    expect(schema.sameAs).toBeUndefined();
  });

  it("WebSite : rattaché à l'entreprise, sans SearchAction inventée", () => {
    const schema = serialize(websiteSchema());
    expect(schema["@type"]).toBe("WebSite");
    expect(schema["@id"]).toBe(`${siteConfig.url}/#website`);
    expect(schema.publisher).toEqual({ "@id": `${siteConfig.url}/#roofingcontractor` });
    // Le site n'a pas de recherche interne : en déclarer une serait mensonger.
    expect(schema.potentialAction).toBeUndefined();
  });

  it("Service : rattaché au nœud RoofingContractor et couvre la zone d'intervention", () => {
    const schema = serialize(serviceSchema(getPrestation("demoussage-toiture")));
    expect(schema["@type"]).toBe("Service");
    expect(schema.provider).toEqual({ "@id": `${siteConfig.url}/#roofingcontractor` });
    expect(schema.url).toBe(`${siteConfig.url}/demoussage-toiture`);
    const areas = schema.areaServed as Array<{ name: string }>;
    expect(areas).toHaveLength(siteConfig.serviceArea.length);
  });

  it("Service : jamais d'aggregateRating (règle : ne rien inventer)", () => {
    for (const prestation of prestations) {
      const schema = serialize(serviceSchema(prestation));
      expect(schema.aggregateRating, `/${prestation.slug}`).toBeUndefined();
    }
  });

  it("Service : offers émis uniquement si la fourchette est déclarée", () => {
    for (const prestation of prestations) {
      const schema = serialize(serviceSchema(prestation));
      if (!prestation.offer) {
        expect(schema.offers, `/${prestation.slug}`).toBeUndefined();
        continue;
      }
      const offers = schema.offers as Json;
      const spec = offers.priceSpecification as Json;
      expect(spec["@type"]).toBe("UnitPriceSpecification");
      expect(spec.minPrice).toBe(prestation.offer.minPrice);
      expect(spec.maxPrice).toBe(prestation.offer.maxPrice);
      expect(spec.unitText).toBe(prestation.offer.unitText);
    }
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
        linkedServices: ["demoussage-toiture"],
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
