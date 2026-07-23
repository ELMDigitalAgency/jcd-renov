import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { TitleAccent } from "@/components/ui/PageTitle";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Vitrine de la prestation phare (cahier §4.4) : titre + sous-titre centrés,
 * puis grand visuel pleine largeur cliquable vers la page recherche de fuite.
 */
export function LeakSpotlight() {
  return (
    <section aria-label="Recherche de fuite et diagnostic toiture" className="bg-cream">
      <Container className="py-16 sm:py-20">
        <SectionHeading
          title={
            <>
              <TitleAccent>Recherche de fuite</TitleAccent> &amp; diagnostic toiture
            </>
          }
          subtitle="Localisez précisément l’origine d’une infiltration avant qu’elle n’aggrave les dégâts, grâce à une inspection méthodique de votre toiture."
        />

        <Link
          href="/recherche-de-fuite-toiture-villemandeur"
          className="group relative mt-10 block"
          aria-label="Découvrir la recherche de fuite en toiture à Villemandeur"
        >
          <span className="rounded-card shadow-card block overflow-hidden">
            <Image
              src="/images/realisations/remaniement-toiture-loiret-01.jpeg"
              alt="Remaniement des tuiles d'une toiture dans le Loiret par les couvreurs JCD Rénovation"
              width={1600}
              height={1200}
              sizes="(min-width: 1152px) 1120px, calc(100vw - 2rem)"
              className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </span>
          <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-5 py-2.5 text-sm font-semibold text-navy shadow-card transition-colors group-hover:bg-primary group-hover:text-white sm:bottom-6 sm:left-6">
            Découvrir la recherche de fuite
            <ArrowForwardRoundedIcon fontSize="inherit" className="text-base" aria-hidden />
          </span>
        </Link>
      </Container>
    </section>
  );
}
