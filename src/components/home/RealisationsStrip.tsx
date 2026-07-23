import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TitleAccent } from "@/components/ui/PageTitle";

const photos = [
  {
    src: "/images/realisations/renovation-toiture-villemandeur-01.jpeg",
    alt: "Rénovation complète de toiture en tuiles neuves par JCD Rénovation",
    className: "col-span-2 row-span-2",
  },
  {
    src: "/images/realisations/zinguerie-gouttiere-villemandeur-01.jpeg",
    alt: "Pose d'une gouttière zinc neuve par JCD Rénovation",
    className: "row-span-2",
  },
  {
    src: "/images/realisations/renovation-toiture-avant-apres-02.jpeg",
    alt: "Toiture à moitié rénovée : avant après saisissant",
    className: "",
  },
  {
    src: "/images/realisations/chantier-couverture-loiret-05.jpeg",
    alt: "Chantier de couverture mené par JCD Rénovation dans le Loiret",
    className: "",
  },
] as const;

/**
 * Mosaïque de chantiers réels sur l'accueil : la preuve par l'image, avec
 * renvoi vers la galerie complète (71 photos).
 */
export function RealisationsStrip() {
  return (
    <section aria-label="Nos réalisations" className="bg-cream bg-dots">
      <Container className="py-16 sm:py-20">
        <SectionHeading
          title={
            <>
              Nos <TitleAccent>réalisations</TitleAccent> parlent pour nous
            </>
          }
          subtitle="Rénovations de toiture, zinguerie, démoussage : photos prises sur nos chantiers dans le Loiret."
        />

        <div className="mt-12 grid auto-rows-[10rem] grid-cols-2 gap-4 sm:auto-rows-[11rem] lg:grid-cols-4">
          {photos.map((photo) => (
            <Link
              key={photo.src}
              href="/realisations"
              className={`group relative overflow-hidden rounded-card ring-1 ring-navy/10 ${photo.className}`}
              aria-label={`${photo.alt} (voir toutes nos réalisations)`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <ButtonLink href="/realisations" variant="primary" withArrow>
            Voir les 71 photos de chantiers
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
