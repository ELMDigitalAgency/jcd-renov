import { ArrowRight } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";

import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/ServiceIcon";
import { getPrestation } from "@/content/prestations";
import type { PrestationSlug } from "@/content/types";

type RelatedServicesProps = {
  services: readonly PrestationSlug[];
};

/**
 * Bloc de maillage systématique article → prestations (frontmatter
 * linkedServices, jamais optionnel : le maillage est garanti par
 * construction). Libellé de lien = ancre SEO recommandée de la prestation.
 */
export function RelatedServices({ services }: RelatedServicesProps) {
  const prestations = [...new Set(services)].map(getPrestation);

  return (
    <section aria-label="Prestations liées à cet article">
      <h2 className="font-heading text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
        Nos prestations liées à ce sujet
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {prestations.map((prestation) => (
          <Card key={prestation.slug} variant="cream" className="flex items-start gap-4 p-6">
            <IconBadge icon={prestation.icon} tone="white" />
            <div>
              <p className="font-heading font-bold text-navy">{prestation.name}</p>
              <Link
                href={`/${prestation.slug}` as Route}
                className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
              >
                {prestation.ancre}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
