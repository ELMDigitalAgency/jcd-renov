import Image from "next/image";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { PageTitle, TitleAccent } from "@/components/ui/PageTitle";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { StatsBand } from "@/components/ui/StatsBand";

/**
 * Hero de la page d'accueil (cahier §4.2, maquette BuildSafe) : fond crème,
 * H1 bicolore + double CTA à gauche, photo de chantier à droite, bandeau
 * stats orange pleine largeur en dessous.
 */
export function HomeHero() {
  return (
    <section aria-label="Présentation de JCD Rénovation">
      <div className="bg-cream">
        <Container className="grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:py-20">
          <div className="flex flex-col items-start gap-6">
            <p className="text-sm font-semibold tracking-wide text-primary-ink uppercase">
              Protégez votre toiture
            </p>
            <PageTitle>
              <TitleAccent>Couvreur &amp; Zingueur</TitleAccent>
              <span className="block">à Villemandeur</span>
            </PageTitle>
            <p className="max-w-xl text-base leading-relaxed sm:text-lg">
              Couvreur et zingueur qualifié : démoussage, zinguerie et recherche de fuite.
              Intervention rapide dans le 45700 et ses environs.
            </p>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
              <ButtonLink href="/devis-gratuit" variant="primary" withArrow>
                Devis Gratuit
              </ButtonLink>
              <PhoneLink withLabel />
            </div>
          </div>

          <Image
            src="/images/realisations/couvreurs-chantier-villemandeur-01.jpeg"
            alt="Couvreurs JCD Rénovation posant un écran de sous-toiture sur un chantier à Villemandeur"
            width={1600}
            height={1200}
            priority
            sizes="(min-width: 1024px) 544px, calc(100vw - 2rem)"
            className="rounded-card shadow-card w-full object-cover"
          />
        </Container>
      </div>

      <StatsBand />
    </section>
  );
}
