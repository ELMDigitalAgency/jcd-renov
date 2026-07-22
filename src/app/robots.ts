import type { MetadataRoute } from "next";

import { siteConfig } from "@/site.config";

/**
 * robots.txt — tout est crawlable sauf l'API. Les crawlers IA sont
 * explicitement autorisés (stratégie GEO : visibilité dans ChatGPT, Claude,
 * Perplexity, Google AI Overviews…).
 */
export default function robots(): MetadataRoute.Robots {
  const aiCrawlers = [
    "GPTBot",
    "ChatGPT-User",
    "ClaudeBot",
    "PerplexityBot",
    "Applebot",
    "Google-Extended",
    "Bytespider",
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
      ...aiCrawlers.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: "/api/",
      })),
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
