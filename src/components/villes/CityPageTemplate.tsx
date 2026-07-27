import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";

import { ContentSections } from "@/components/sections/ContentSections";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { PageTitle, TitleAccent } from "@/components/ui/PageTitle";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/ServiceIcon";
import { communes } from "@/content/communes";
import { prestations } from "@/content/prestations";
import type { Ville } from "@/content/types";

/** Alternance bento des cartes atouts (design system §2.1). */
const ATOUT_VARIANTS = ["blush", "lavender", "cream"] as const;

/** « de Montargis » mais « d'Amilly » — élision devant voyelle. */
function deVille(name: string): string {
  return /^[aeiouyàâéèêëîïôöûü]/i.test(name) ? `d’${name}` : `de ${name}`;
}

/** Passe le nom de la ville en orange dans le H1 (titre bicolore, cahier §6). */
function splitCityH1(h1: string, city: string): { start: string; accent: string; end: string } {
  const index = h1.lastIndexOf(city);
  if (index === -1) {
    return { start: h1, accent: "", end: "" };
  }
  return { start: h1.slice(0, index), accent: city, end: h1.slice(index + city.length) };
}

type CityPageTemplateProps = {
  ville: Ville;
};

/**
 * Template unique des 3 pages villes (zones secondaires) : bandeau + ancrage
 * local + prestations + atouts + encart vers la page pilier + FAQ + CTA.
 */
export function CityPageTemplate({ ville }: CityPageTemplateProps) {
  const { start, accent, end } = splitCityH1(ville.h1, ville.name);
  // Cross-links villes ↔ villes : toutes les villes à page dédiée sauf celle-ci.
  const villesProches = communes.filter(
    (commune): commune is (typeof communes)[number] & { href: string } =>
      commune.href !== undefined && commune.href !== `/${ville.slug}`,
  );

  return (
    <>
      {/* 1. Bandeau : fil d'Ariane, H1, « En bref » (GEO), CTA devis + téléphone. */}
      <section className="bg-cream">
        <Container className="pt-6 pb-14 sm:pt-8 sm:pb-16">
          <Breadcrumbs
            crumbs={[
              { name: "Zone d’intervention", path: "/zone-intervention" },
              { name: ville.name, path: `/${ville.slug}` },
            ]}
          />
          <div className="mt-8 max-w-3xl lg:mt-10">
            <PageTitle>
              {start}
              {accent ? <TitleAccent>{accent}</TitleAccent> : null}
              {end}
            </PageTitle>
            <Card variant="white" className="mt-6 border-l-4 border-primary p-5 sm:p-6">
              <p className="leading-relaxed">
                <strong className="font-semibold text-navy">En bref :</strong> {ville.enBref}
              </p>
            </Card>
            <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <ButtonLink href="/devis-gratuit" variant="accent" withArrow>
                Devis Gratuit
              </ButtonLink>
              <PhoneLink withLabel />
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Ancrage local : contenu unique par ville + photo chantier. */}
      <section aria-label="Ancrage local">
        <Container className="py-16 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <SectionHeading
                align="left"
                title={
                  <>
                    Un couvreur qui connaît <TitleAccent>{ville.name}</TitleAccent>
                  </>
                }
              />
              <div className="mt-6 space-y-4 leading-relaxed">
                {ville.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <Image
              src="/images/realisations/couvreurs-chantier-villemandeur-01.jpeg"
              alt={`Couvreurs JCD Rénovation sur un chantier de toiture, à quelques minutes ${deVille(ville.name)}`}
              width={1600}
              height={1200}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-64 w-full rounded-card object-cover shadow-card sm:h-80 lg:h-full lg:max-h-[30rem]"
            />
          </div>
        </Container>
      </section>

      {/* Contenu de fond unique à la ville (bâti, climat, interventions types…) */}
      <ContentSections sections={ville.sections} startOn="cream" />

      {/* 3. Les 4 prestations — maillage interne avec les ancres recommandées. */}
      <section className="bg-cream">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            title={
              <>
                Nos prestations à <TitleAccent>{ville.name}</TitleAccent>
              </>
            }
            subtitle="Des expertises complémentaires, un seul artisan, et un devis gratuit pour chacune."
          />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {prestations.map((prestation) => (
              <li key={prestation.slug}>
                <Card variant="white" className="group relative flex h-full flex-col">
                  <IconBadge icon={prestation.icon} />
                  <h3 className="mt-4 font-heading text-lg font-bold text-navy transition-colors group-hover:text-primary">
                    <Link
                      href={`/${prestation.slug}`}
                      className="inline-block first-letter:uppercase after:absolute after:inset-0"
                    >
                      {prestation.ancre}
                    </Link>
                  </h3>
                  <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold text-primary-ink">
                    Découvrir
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
        </Container>
      </section>

      {/* 4. Atouts locaux. */}
      <section aria-label="Nos atouts">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            title={
              <>
                Pourquoi choisir <TitleAccent>JCD Rénovation</TitleAccent> ?
              </>
            }
          />
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {ville.atouts.map((atout, index) => (
              <li key={atout.title}>
                <Card
                  variant={ATOUT_VARIANTS[index % ATOUT_VARIANTS.length] ?? "cream"}
                  className="h-full"
                >
                  <span aria-hidden className="font-heading text-3xl font-extrabold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-bold text-navy">{atout.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/70 sm:text-base">
                    {atout.text}
                  </p>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 5. Encart pilier — maillage vers la page Couvreur à Villemandeur. */}
      <section aria-label="Notre page principale">
        <Container className="pb-16 sm:pb-20">
          <Card
            variant="navy"
            className="flex flex-col items-start justify-between gap-6 px-8 py-10 sm:px-12 lg:flex-row lg:items-center"
          >
            <div className="max-w-2xl">
              <p className="font-heading text-2xl font-extrabold sm:text-3xl">
                JCD Rénovation intervient à {ville.name} depuis sa base de l’agglomération
                Montargoise.
              </p>
              <p className="mt-3 text-white/75">
                Couverture, zinguerie, démoussage, recherche de fuite : tout notre savoir-faire est
                détaillé sur notre page principale.
              </p>
            </div>
            <ButtonLink
              href="/couvreur-villemandeur"
              variant="light"
              withArrow
              className="shrink-0"
            >
              Découvrir notre page Couvreur à Villemandeur
            </ButtonLink>
          </Card>
        </Container>
      </section>

      {/* 6. Villes proches — cross-links entre pages villes (stratégie SEO §4). */}
      <section aria-label="Nos autres villes" className="bg-cream">
        <Container className="pb-16 sm:pb-20 pt-16 sm:pt-20">
          <SectionHeading
            title={
              <>
                Nous intervenons aussi <TitleAccent>à proximité</TitleAccent>
              </>
            }
            subtitle="Les autres villes de notre zone où chaque prestation est détaillée sur sa propre page."
          />
          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {villesProches.map((commune) => (
              <li key={commune.name}>
                <Link
                  href={commune.href as Route}
                  className="inline-block rounded-full border border-navy/10 bg-white px-4 py-2 text-sm font-semibold text-navy transition-colors hover:border-primary hover:text-primary"
                >
                  Couvreur à {commune.name}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 7. FAQ locale + 8. CTA final. */}
      <FaqSection items={ville.faq} withSchema />
      <FinalCta />
    </>
  );
}
