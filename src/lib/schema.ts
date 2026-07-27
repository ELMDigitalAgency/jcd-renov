import type {
  Article,
  BreadcrumbList,
  FAQPage,
  RoofingContractor,
  Service,
  WebSite,
  WithContext,
} from "schema-dts";

import type { FaqItem, Prestation } from "@/content/types";
import type { PostMeta } from "@/lib/blog-types";
import { siteConfig } from "@/site.config";

/**
 * Builders JSON-LD typés (schema-dts). Règles :
 * - jamais de donnée non validée (pas d'aggregateRating tant que
 *   siteConfig.googleRating est null) ;
 * - NAP strictement identique à site.config.ts (cohérence Google Business).
 */

export function roofingContractorSchema(): WithContext<RoofingContractor> {
  const schema: WithContext<RoofingContractor> = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": `${siteConfig.url}/#roofingcontractor`,
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phoneInternational,
    email: siteConfig.email,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.postalCode,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    areaServed: siteConfig.serviceArea.map((city) => ({
      "@type": "City" as const,
      name: city,
    })),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phoneInternational,
      contactType: "customer service",
      availableLanguage: "French",
      areaServed: "FR",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:30",
      closes: "19:00",
    },
    priceRange: "€€",
    image: `${siteConfig.url}/images/logo-jcd-renovation.png`,
  };

  // Note Google : injectée UNIQUEMENT si validée par le client (cahier §8).
  if (siteConfig.googleRating) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: siteConfig.googleRating.value,
      reviewCount: siteConfig.googleRating.count,
    };
  }

  return schema;
}

/**
 * Nœud WebSite du site, rattaché à l'entreprise par `publisher`.
 *
 * Pas de `potentialAction`/SearchAction : le site n'a pas de recherche interne,
 * en déclarer une serait un balisage mensonger. Pas d'`Organization` distinct
 * non plus — `RoofingContractor` en est déjà un sous-type, en ajouter un second
 * portant le même nom créerait deux entités concurrentes aux yeux de Google.
 */
export function websiteSchema(): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: "fr-FR",
    publisher: { "@id": `${siteConfig.url}/#roofingcontractor` },
  };
}

/**
 * Schéma Service d'une page prestation (stratégie SEO §5.2).
 *
 * `offers` n'est émis que si la prestation déclare explicitement une fourchette
 * (`prestation.offer`) : les libellés de `tarifs.rows` sont du texte libre
 * (« sur devis », « 150 à 500 € »), les parser reviendrait à publier un prix
 * approximatif en données structurées. Jamais d'`aggregateRating` : aucune note
 * réelle n'est disponible tant que la fiche Google n'existe pas (cahier §8).
 */
export function serviceSchema(prestation: Prestation): WithContext<Service> {
  const schema: WithContext<Service> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: prestation.serviceType,
    serviceType: prestation.serviceType,
    description: prestation.metaDescription,
    url: `${siteConfig.url}/${prestation.slug}`,
    provider: { "@id": `${siteConfig.url}/#roofingcontractor` },
    areaServed: siteConfig.serviceArea.map((city) => ({
      "@type": "City" as const,
      name: city,
    })),
  };

  if (prestation.offer) {
    schema.offers = {
      "@type": "Offer",
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "EUR",
        minPrice: prestation.offer.minPrice,
        maxPrice: prestation.offer.maxPrice,
        unitText: prestation.offer.unitText,
      },
    };
  }

  return schema;
}

export function faqPageSchema(items: readonly FaqItem[]): WithContext<FAQPage> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question" as const,
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: item.answer,
      },
    })),
  };
}

export type Crumb = {
  name: string;
  /** Chemin relatif ("/blog") — converti en URL absolue. */
  path: string;
};

export function breadcrumbSchema(crumbs: readonly Crumb[]): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem" as const,
      position: index + 1,
      name: crumb.name,
      item: crumb.path === "/" ? siteConfig.url : `${siteConfig.url}${crumb.path}`,
    })),
  };
}

export function articleSchema(post: PostMeta): WithContext<Article> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    inLanguage: "fr-FR",
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/logo-jcd-renovation.png`,
      },
    },
  };
}
