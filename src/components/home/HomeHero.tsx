import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import VerifiedUserRoundedIcon from "@mui/icons-material/VerifiedUserRounded";

import { HeroCarousel, type HeroSlide } from "@/components/home/HeroCarousel";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { PageTitle, TitleAccent } from "@/components/ui/PageTitle";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { StatsBand } from "@/components/ui/StatsBand";

const heroPoints = [
  "Diagnostic et devis gratuits sous 24-48 h",
  "Intervention rapide dans toute l'agglomération Montargoise",
] as const;

/** Chantiers réels mis en avant dans le carrousel du hero. */
const heroSlides: readonly HeroSlide[] = [
  {
    src: "/images/realisations/couvreurs-chantier-villemandeur-01.jpeg",
    alt: "Couvreurs JCD Rénovation posant un écran de sous-toiture sur un chantier à Villemandeur",
  },
  {
    src: "/images/realisations/renovation-toiture-villemandeur-01.jpeg",
    alt: "Rénovation complète de toiture en tuiles terre cuite par JCD Rénovation",
  },
  {
    src: "/images/realisations/remaniement-toiture-loiret-01.jpeg",
    alt: "Remaniement de toiture dans le Loiret : tuiles triées et liteaunage neuf",
  },
  {
    src: "/images/realisations/demoussage-toiture-villemandeur-01.jpeg",
    alt: "Traitement de démoussage appliqué sur une toiture, contraste avant après",
  },
] as const;

/**
 * Hero de la page d'accueil (cahier §4.2, maquette BuildSafe), version
 * éditoriale : titre XXL, points de réassurance, photo signature avec badge
 * décennale flottant, bandeau stats pleine largeur en dessous.
 */
export function HomeHero() {
  return (
    <section aria-label="Présentation de JCD Rénovation">
      <div className="bg-cream bg-dots">
        <Container className="grid items-center gap-12 py-14 sm:py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-24">
          <div className="flex flex-col items-start gap-6">
            <PageTitle className="lg:text-[3.9rem] xl:text-[4.3rem]">
              <TitleAccent>Couvreur &amp; Zingueur</TitleAccent>
              <span className="block">à Villemandeur</span>
            </PageTitle>
            <p className="max-w-xl text-base leading-relaxed sm:text-lg">
              Démoussage, zinguerie, recherche de fuite : un artisan qualifié qui intervient
              vite dans le 45700 et ses environs.
            </p>

            <ul className="space-y-2.5">
              {heroPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm font-medium text-navy sm:text-base">
                  <CheckCircleRoundedIcon fontSize="inherit" className="mt-0.5 text-[20px] shrink-0 text-primary" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-2 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
              <ButtonLink href="/devis-gratuit" variant="primary" withArrow>
                Devis Gratuit
              </ButtonLink>
              <PhoneLink withLabel />
            </div>
          </div>

          {/* Carrousel de chantiers dans le cadre photo signature */}
          <div className="relative mb-8">
            <div
              aria-hidden
              className="rounded-card absolute inset-x-0 top-0 bottom-9 -z-10 translate-x-3 translate-y-3 bg-primary/20 sm:translate-x-5 sm:translate-y-5"
            />
            <HeroCarousel slides={heroSlides} />
            <div className="absolute -bottom-2 left-4 sm:left-6">
              <div className="shadow-card flex items-center gap-3 rounded-2xl bg-navy px-5 py-3.5 text-white">
                <VerifiedUserRoundedIcon fontSize="inherit" className="text-[32px] shrink-0 text-primary" aria-hidden />
                <div className="leading-tight">
                  <p className="font-heading text-sm font-extrabold sm:text-base">
                    Garantie décennale
                  </p>
                  <p className="text-xs text-white/75">10 ans sur tous nos travaux</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <StatsBand />
    </section>
  );
}
