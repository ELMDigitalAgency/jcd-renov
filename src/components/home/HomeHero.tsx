import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import VerifiedUserRoundedIcon from "@mui/icons-material/VerifiedUserRounded";

import { HeroBackground, type HeroSlide } from "@/components/home/HeroBackground";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { PageTitle } from "@/components/ui/PageTitle";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { StatsBand } from "@/components/ui/StatsBand";

const heroPoints = [
  "Diagnostic et devis gratuits sous 24-48 h",
  "Intervention dans le Loiret, l'Yonne et la Seine-et-Marne",
] as const;

/** Chantiers réels utilisés en fond plein écran du hero. */
const heroSlides: readonly HeroSlide[] = [
  {
    src: "/images/hero/hero-chantier-01.jpeg",
    alt: "Rénovation de charpente et de toiture par JCD Rénovation",
  },
  {
    src: "/images/hero/hero-chantier-02.jpeg",
    alt: "Réfection complète d'une toiture ancienne par JCD Rénovation",
  },
  {
    src: "/images/hero/hero-chantier-03.jpeg",
    alt: "Ravalement de façade d'une grande demeure par JCD Rénovation",
  },
] as const;

/**
 * Hero de la page d'accueil : photo de chantier en fond plein écran, voile
 * marine dégradé pour la lisibilité, titre et CTA en blanc par-dessus.
 * Bandeau stats orange pleine largeur en dessous.
 */
export function HomeHero() {
  return (
    <section aria-label="Présentation de JCD Rénovation">
      <div className="relative isolate overflow-hidden">
        {/* Fond : carrousel de chantiers plein écran */}
        <HeroBackground slides={heroSlides} />
        {/* Voile marine pour garantir le contraste du texte */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/92 via-navy/80 to-navy/45"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-t from-navy/70 via-transparent to-transparent"
        />

        <Container className="flex min-h-[36rem] flex-col justify-center py-20 sm:min-h-[40rem] lg:min-h-[44rem] lg:py-28">
          <div className="flex max-w-2xl flex-col items-start gap-6">
            <PageTitle className="text-white lg:text-[4rem] xl:text-[4.4rem]">
              {/* Accent orange VIF (et non terracotta) : lisible sur fond sombre.
                  L'espace explicite évite « Zingueurà Villemandeur » dans le DOM :
                  `block` sépare visuellement, pas textuellement (audit SEO §3.1). */}
              <span className="text-primary">Couvreur &amp; Zingueur</span>{" "}
              <span className="block">à Villemandeur</span>
            </PageTitle>
            <p className="max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              Couverture, charpente, démoussage, zinguerie, recherche de fuite et peinture : un
              artisan qualifié qui intervient vite dans le 45700 et ses environs.
            </p>

            <ul className="space-y-2.5">
              {heroPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm font-medium text-white sm:text-base">
                  <CheckCircleRoundedIcon
                    fontSize="inherit"
                    className="mt-0.5 shrink-0 text-[20px] text-primary"
                    aria-hidden
                  />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-2 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
              <ButtonLink href="/devis-gratuit" variant="accent" withArrow>
                Devis Gratuit
              </ButtonLink>
              <PhoneLink
                withLabel
                className="text-white hover:text-primary [&_.text-body]:text-white/70 [&_.text-navy]:text-white"
              />
            </div>

            <div className="mt-2 inline-flex items-center gap-2.5 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur">
              <VerifiedUserRoundedIcon fontSize="inherit" className="text-[20px] text-primary" aria-hidden />
              Garantie décennale · 14 ans d&apos;expérience
            </div>
          </div>
        </Container>
      </div>

      <StatsBand />
    </section>
  );
}
