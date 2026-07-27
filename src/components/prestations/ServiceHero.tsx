import Image from "next/image";

import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { PageTitle, TitleAccent } from "@/components/ui/PageTitle";
import { PhoneLink } from "@/components/ui/PhoneLink";
import type { Prestation } from "@/content/types";

/**
 * Découpe le H1 sur le fragment d'accent déclaré dans les données pour le
 * passer en orange — titre bicolore du cahier des charges §5.
 *
 * L'accent était auparavant déduit du suffixe « à Villemandeur », avec repli
 * sur le dernier mot : depuis que les H1 sont génériques (refonte SEO), ce
 * repli mettait en orange un mot arbitraire (« … & hydrofuge »). Le fragment
 * est donc explicite dans `prestations.ts`, et sa présence dans le H1 est
 * vérifiée par tests/content-integrity.test.ts.
 */
function splitH1(h1: string, h1Accent: string): { start: string; accent: string; end: string } {
  const index = h1Accent ? h1.lastIndexOf(h1Accent) : -1;
  if (index === -1) {
    return { start: h1, accent: "", end: "" };
  }
  return {
    start: h1.slice(0, index),
    accent: h1Accent,
    end: h1.slice(index + h1Accent.length),
  };
}

type ServiceHeroProps = {
  prestation: Prestation;
};

/**
 * Bandeau haut des pages prestations : fil d'Ariane + mini-hero 2 colonnes
 * (titre, intro, bloc « En bref » citable par les IA, CTA / photo chantier).
 */
export function ServiceHero({ prestation }: ServiceHeroProps) {
  const { start, accent, end } = splitH1(prestation.h1, prestation.h1Accent);

  return (
    <section className="bg-cream">
      <Container className="pt-6 pb-14 sm:pt-8 sm:pb-16 lg:pb-20">
        <Breadcrumbs crumbs={[{ name: prestation.name, path: `/${prestation.slug}` }]} />
        <div className="mt-8 grid items-center gap-10 lg:mt-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <PageTitle>
              {start}
              {accent ? <TitleAccent>{accent}</TitleAccent> : null}
              {end}
            </PageTitle>
            <p className="mt-5 text-base leading-relaxed sm:text-lg">{prestation.intro}</p>

            {/* Bloc « En bref » — extraction GEO : réponse directe, citable telle quelle. */}
            <Card variant="white" className="mt-6 border-l-4 border-primary p-5 sm:p-6">
              <p className="leading-relaxed">
                <strong className="font-semibold text-navy">En bref :</strong> {prestation.enBref}
              </p>
            </Card>

            <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <ButtonLink href="/devis-gratuit" variant="accent" withArrow>
                Devis Gratuit
              </ButtonLink>
              <PhoneLink withLabel />
            </div>
          </div>

          {/* Formats d'images hétérogènes (portrait/paysage) → cadre fixe + object-cover. */}
          <div className="relative h-64 overflow-hidden rounded-card shadow-card sm:h-80 lg:h-auto lg:min-h-[26rem] lg:self-stretch">
            <Image
              src={prestation.heroImage}
              alt={prestation.heroImageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
