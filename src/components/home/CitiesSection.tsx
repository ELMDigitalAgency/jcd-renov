import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import type { Route } from "next";
import Link from "next/link";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { TitleAccent } from "@/components/ui/PageTitle";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/ServiceIcon";
import { communes } from "@/content/communes";

/**
 * Section « Nos villes » de la page d'accueil.
 *
 * La homepage ne liait aucune page ville avant la refonte SEO : c'était le
 * principal trou du maillage interne (stratégie SEO §4). La liste est dérivée
 * de `communes` filtrée sur `href`, et non de `villes`, pour inclure la page
 * pilier /couvreur-villemandeur qui vit dans `prestations`.
 */
export function CitiesSection() {
  const villesAvecPage = communes.filter(
    (commune): commune is (typeof communes)[number] & { href: string } =>
      commune.href !== undefined,
  );

  return (
    <section aria-label="Nos villes d’intervention" className="bg-white">
      <Container className="py-16 sm:py-20">
        <SectionHeading
          title={
            <>
              Un couvreur près de <TitleAccent>chez vous</TitleAccent>
            </>
          }
          subtitle="Nous intervenons depuis Villemandeur dans le Loiret, l’Yonne et la Seine-et-Marne. Chaque ville a sa page dédiée."
        />
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {villesAvecPage.map((commune) => (
            <li key={commune.name}>
              <Card variant="cream" className="group relative flex h-full flex-col">
                <IconBadge icon="map-pin" tone="white" />
                <h3 className="mt-4 font-heading text-lg font-bold text-navy transition-colors group-hover:text-primary">
                  <Link href={commune.href as Route} className="after:absolute after:inset-0">
                    Couvreur à {commune.name}
                  </Link>
                </h3>
                {commune.cp ? <p className="mt-1 text-sm text-navy/60">{commune.cp}</p> : null}
                <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold text-primary-ink">
                  Voir la page
                  <ArrowForwardRoundedIcon
                    fontSize="inherit"
                    className="text-base transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </span>
              </Card>
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <Link
            href="/zone-intervention"
            className="inline-flex items-center gap-2 font-semibold text-navy transition-colors hover:text-primary"
          >
            Voir toute notre zone d’intervention
            <ArrowForwardRoundedIcon fontSize="inherit" className="text-base" aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  );
}
