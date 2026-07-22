import { ArrowRight } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";

import { CtaBanner } from "@/components/sections/CtaBanner";
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
import type { Commune } from "@/content/types";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Zone d'Intervention | JCD Rénovation Villemandeur",
  description:
    "Découvrez toutes les communes où intervient JCD Rénovation autour de Villemandeur : Montargis, Amilly, Cepoy, Corquilleroy...",
  path: "/zone-intervention",
});

const principale = communes.find((commune) => commune.statut === "principale");
const secondaires = communes.filter(
  (commune): commune is Commune & { href: string } =>
    commune.statut === "secondaire" && commune.href !== undefined,
);
const tertiaires = communes.filter((commune) => commune.statut === "tertiaire");

/** Page hub de la zone d'intervention : communes par statut + maillage vers les pages locales. */
export default function Page() {
  return (
    <>
      {/* Bandeau : H1 + « En bref » (extraction GEO). */}
      <section className="bg-cream">
        <Container className="pt-6 pb-14 sm:pt-8 sm:pb-16">
          <Breadcrumbs crumbs={[{ name: "Zone d’intervention", path: "/zone-intervention" }]} />
          <div className="mt-8 max-w-3xl lg:mt-10">
            <PageTitle>
              Notre zone d’intervention autour de <TitleAccent>Villemandeur</TitleAccent>
            </PageTitle>
            <p className="mt-5 text-base leading-relaxed sm:text-lg">
              Couvreur zingueur basé à Villemandeur, nous nous déplaçons dans toute l’agglomération
              Montargoise — diagnostic sur place et devis gratuits, sans frais de déplacement.
            </p>
            <Card variant="white" className="mt-6 border-l-4 border-primary p-5 sm:p-6">
              <p className="leading-relaxed">
                <strong className="font-semibold text-navy">En bref :</strong> JCD Rénovation
                intervient dans un rayon d’environ 20 km autour de Villemandeur (45700), dans toute
                l’agglomération Montargoise : Montargis, Amilly, Chalette-sur-Loing, Cepoy,
                Corquilleroy, Paucourt, Pannes, Solterre et Vimory.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Ville principale : grande carte navy → page pilier. */}
      {principale ? (
        <section aria-label="Ville principale">
          <Container className="py-16 sm:py-20">
            <Card
              variant="navy"
              className="flex flex-col items-start justify-between gap-8 px-8 py-10 sm:px-12 lg:flex-row lg:items-center"
            >
              <div className="flex max-w-2xl flex-col items-start gap-5 sm:flex-row">
                <IconBadge icon="map-pin" tone="white" className="shrink-0" />
                <div>
                  <h2 className="font-heading text-2xl font-extrabold sm:text-3xl">
                    {principale.name}, notre ville principale
                  </h2>
                  <p className="mt-3 text-white/75">
                    Le cœur de notre activité{principale.cp ? ` (${principale.cp})` : ""} : c’est
                    ici que nous intervenons le plus vite, avec une connaissance précise du bâti
                    local.
                  </p>
                </div>
              </div>
              <ButtonLink
                href="/couvreur-villemandeur"
                variant="light"
                withArrow
                className="shrink-0"
              >
                Couvreur à Villemandeur
              </ButtonLink>
            </Card>
          </Container>
        </section>
      ) : null}

      {/* Zones secondaires : 3 cartes cliquables vers les pages villes. */}
      <section className="bg-cream" aria-label="Zones secondaires">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Zones secondaires"
            title={
              <>
                Les grandes villes <TitleAccent>voisines</TitleAccent>
              </>
            }
            subtitle="Trois communes limitrophes où nous assurons toutes nos prestations, chacune avec sa page dédiée."
          />
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {secondaires.map((commune) => (
              <li key={commune.name}>
                <Card variant="white" className="group relative flex h-full flex-col">
                  <IconBadge icon="map-pin" />
                  <h3 className="mt-4 font-heading text-xl font-bold text-navy transition-colors group-hover:text-primary">
                    <Link href={commune.href as Route} className="after:absolute after:inset-0">
                      {commune.name}
                    </Link>
                  </h3>
                  {commune.cp ? <p className="mt-1 text-sm">{commune.cp}</p> : null}
                  <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold text-primary">
                    Voir nos services à {commune.name}
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Autres communes desservies : chips + phrase honnête. */}
      <section aria-label="Autres communes desservies">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="À proximité"
            title={
              <>
                Les autres communes <TitleAccent>desservies</TitleAccent>
              </>
            }
          />
          <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
            {tertiaires.map((commune) => (
              <li key={commune.name}>
                <span className="inline-block rounded-full border border-navy/10 bg-cream px-4 py-2 text-sm font-medium text-navy">
                  {commune.name}
                  {commune.cp ? ` (${commune.cp})` : ""}
                </span>
              </li>
            ))}
          </ul>
          <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center gap-5 text-center">
            <p className="font-medium text-navy">
              Votre commune n’est pas listée ? Appelez-nous : si le chantier est à moins de 30
              minutes, nous étudions toute demande.
            </p>
            <PhoneLink withLabel />
          </div>
        </Container>
      </section>

      <CtaBanner />
      <FinalCta />
    </>
  );
}
