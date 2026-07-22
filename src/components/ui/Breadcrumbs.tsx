import { ChevronRight } from "lucide-react";
import Link from "next/link";
import type { Route } from "next";

import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, type Crumb } from "@/lib/schema";
import { cn } from "@/lib/utils";

type BreadcrumbsProps = {
  /** Fil complet, page courante incluse en dernier. L'accueil est ajouté automatiquement. */
  crumbs: readonly Crumb[];
  className?: string;
};

/**
 * Fil d'Ariane : rendu visuel ET émission du BreadcrumbList JSON-LD depuis la
 * même donnée (une seule source de vérité — checklist SEO).
 */
export function Breadcrumbs({ crumbs, className }: BreadcrumbsProps) {
  const all: Crumb[] = [{ name: "Accueil", path: "/" }, ...crumbs];

  return (
    <nav aria-label="Fil d'Ariane" className={cn("text-sm", className)}>
      <JsonLd data={breadcrumbSchema(all)} />
      <ol className="flex flex-wrap items-center gap-1.5">
        {all.map((crumb, index) => {
          const isLast = index === all.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-1.5">
              {index > 0 ? <ChevronRight className="size-3.5 text-body/60" aria-hidden /> : null}
              {isLast ? (
                <span aria-current="page" className="font-medium text-navy">
                  {crumb.name}
                </span>
              ) : (
                <Link
                  href={crumb.path as Route}
                  className="text-body transition-colors hover:text-primary"
                >
                  {crumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
