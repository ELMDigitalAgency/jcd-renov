import type { Metadata } from "next";
import Image from "next/image";

import { FinalCta } from "@/components/sections/FinalCta";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { PageTitle, TitleAccent } from "@/components/ui/PageTitle";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/ServiceIcon";
import { garanties } from "@/content/garanties";
import { processSteps } from "@/content/process";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = buildMetadata({
  title: "À Propos de JCD Rénovation | Couvreur Villemandeur",
  description:
    "JCD Rénovation : artisan couvreur zingueur qualifié, garantie décennale, intervention rapide à Villemandeur et alentours.",
  path: "/a-propos",
});

export default function AProposPage() {
  return (
    <>
      <div className="bg-cream">
        <Container className="py-10 sm:py-14">
          <Breadcrumbs crumbs={[{ name: "À propos", path: "/a-propos" }]} />
          <PageTitle className="mt-6">
            Qui <TitleAccent>sommes-nous</TitleAccent>
          </PageTitle>
          <p className="mt-5 max-w-2xl text-base leading-relaxed sm:text-lg">
            Une entreprise artisanale de couverture et de zinguerie, ancrée à Villemandeur et dans
            l’agglomération Montargoise.
          </p>
        </Container>
      </div>

      <section aria-label="L’essentiel sur JCD Rénovation">
        <Container className="py-12 sm:py-16">
          <Card variant="white" className="border-l-4 border-primary">
            <h2 className="font-heading text-xl font-bold text-navy">En bref</h2>
            <p className="mt-3 leading-relaxed">
              JCD Rénovation est une entreprise artisanale de couverture et de zinguerie du Loiret
              (SIRET {siteConfig.siret}), centrée sur Villemandeur et l’agglomération Montargoise.
              Prestations : démoussage, zinguerie, recherche de fuite, rénovation de toiture.
              Travaux couverts par la garantie décennale.
            </p>
          </Card>
        </Container>
      </section>

      <section aria-label="Notre approche artisanale">
        <Container className="pb-14 sm:pb-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Notre approche"
                title={
                  <>
                    Un artisan, pas un <TitleAccent>intermédiaire</TitleAccent>
                  </>
                }
              />
              <div className="mt-6 space-y-4 leading-relaxed">
                <p>
                  Quand vous contactez JCD Rénovation, vous échangez directement avec l’artisan qui
                  interviendra sur votre toit — pas avec un commercial ni une plateforme de mise en
                  relation.
                </p>
                <p>
                  Cette relation directe change tout : un diagnostic expliqué simplement, des
                  conseils francs — si un démoussage suffit, nous ne vous vendrons pas une
                  rénovation complète — et un devis honnête, détaillé poste par poste, gratuit et
                  sans engagement.
                </p>
                <p>
                  Du premier appel à la réception du chantier, votre interlocuteur reste le même.
                  C’est notre façon de garantir un travail soigné et des engagements tenus.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              <Image
                src="/images/realisations/chantier-couverture-loiret-03.jpeg"
                alt="Travaux de couverture en cours sur un chantier JCD Rénovation près de Villemandeur"
                width={1600}
                height={1200}
                sizes="(min-width: 1024px) 270px, 50vw"
                className="rounded-card aspect-[3/4] w-full object-cover shadow-card"
              />
              <Image
                src="/images/realisations/chantier-couverture-loiret-05.jpeg"
                alt="Chantier de couverture avec échafaudage sécurisé mené par JCD Rénovation dans le Loiret"
                width={1600}
                height={1200}
                sizes="(min-width: 1024px) 270px, 50vw"
                className="rounded-card aspect-[3/4] mt-8 w-full object-cover shadow-card"
              />
            </div>
          </div>
        </Container>
      </section>

      <section aria-label="Notre façon de travailler" className="bg-cream">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            eyebrow="Méthode"
            title={
              <>
                Notre façon de <TitleAccent>travailler</TitleAccent>
              </>
            }
            subtitle="Quatre étapes, toujours les mêmes : du diagnostic gratuit au contrôle final."
          />
          <ol className="mx-auto mt-12 max-w-2xl">
            {processSteps.map((step, i) => (
              <li key={step.title} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <IconBadge icon={step.icon} tone="white" />
                  {i < processSteps.length - 1 ? (
                    <div className="my-2 w-px flex-1 bg-primary/25" aria-hidden />
                  ) : null}
                </div>
                <div className="pb-8">
                  <p className="text-xs font-semibold tracking-wide text-primary uppercase">
                    Étape {i + 1}
                  </p>
                  <h3 className="font-heading mt-1 text-lg font-bold text-navy">{step.title}</h3>
                  <p className="mt-2 leading-relaxed">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-label="Nos engagements">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            eyebrow="Confiance"
            title={
              <>
                Nos <TitleAccent>engagements</TitleAccent>
              </>
            }
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {garanties.map((garantie) => (
              <Card key={garantie.title} variant="cream">
                <IconBadge icon={garantie.icon} tone="white" />
                <h3 className="font-heading mt-5 text-lg font-bold text-navy">{garantie.title}</h3>
                <p className="mt-2 leading-relaxed">{garantie.text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section aria-label="Notre zone d’intervention">
        <Container className="pb-14 sm:pb-20">
          <Card variant="lavender" className="sm:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <SectionHeading
                  align="left"
                  title={
                    <>
                      Notre <TitleAccent>zone d’intervention</TitleAccent>
                    </>
                  }
                />
                <p className="mt-4 leading-relaxed text-navy/80">
                  Nos chantiers se concentrent sur Villemandeur et l’agglomération Montargoise.
                  Votre commune n’est pas listée ? Contactez-nous : nous étudions toute demande dans
                  les environs.
                </p>
              </div>
              <div>
                <ul className="flex flex-wrap gap-2">
                  {siteConfig.serviceArea.map((city) => (
                    <li
                      key={city}
                      className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-navy"
                    >
                      {city}
                    </li>
                  ))}
                </ul>
                <ButtonLink href="/zone-intervention" variant="primary" withArrow className="mt-6">
                  Voir toute notre zone
                </ButtonLink>
              </div>
            </div>
          </Card>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
