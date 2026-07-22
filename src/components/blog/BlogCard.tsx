import { ArrowRight } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";

import { Card } from "@/components/ui/Card";
import type { PostFrontmatter, PostMeta } from "@/lib/blog-types";
import { cn } from "@/lib/utils";

/** Libellés français des catégories du frontmatter (enum blog-types). */
const categoryLabels: Record<PostFrontmatter["category"], string> = {
  demoussage: "Démoussage",
  fuite: "Recherche de fuite",
  zinguerie: "Zinguerie",
  couverture: "Couverture",
  entretien: "Entretien",
  conseils: "Conseils",
};

/**
 * Chip de catégorie — partagé entre la carte du listing (fond blanc → chip
 * crème) et l'en-tête d'article (bandeau crème → chip blanche).
 */
export function CategoryBadge({
  category,
  tone = "cream",
}: {
  category: PostFrontmatter["category"];
  tone?: "cream" | "white";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide text-primary-ink uppercase",
        tone === "cream" ? "bg-cream" : "bg-white",
      )}
    >
      {categoryLabels[category]}
    </span>
  );
}

/** "2026-07-22" → "22 juillet 2026" (UTC : jamais de décalage selon le serveur de build). */
export function formatPostDate(isoDate: string): string {
  return new Intl.DateTimeFormat("fr-FR", { dateStyle: "long", timeZone: "UTC" }).format(
    new Date(isoDate),
  );
}

type BlogCardProps = {
  post: PostMeta;
};

/** Carte article du listing /blog : entièrement cliquable, hauteur homogène en grille. */
export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}` as Route} className="group block h-full">
      <Card
        variant="white"
        className="flex h-full flex-col gap-4 transition-shadow duration-200 group-hover:shadow-lg"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <CategoryBadge category={post.category} />
          <time dateTime={post.date} className="text-xs text-body">
            {formatPostDate(post.date)}
          </time>
        </div>
        <h2 className="font-heading text-lg leading-snug font-bold text-navy transition-colors group-hover:text-primary sm:text-xl">
          {post.title}
        </h2>
        <p className="text-sm leading-relaxed">{post.description}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-semibold text-primary-ink">
          Lire l’article
          <ArrowRight
            className="size-4 transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden
          />
        </span>
      </Card>
    </Link>
  );
}
