import Image from "next/image";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { TitleAccent } from "@/components/ui/PageTitle";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Section « diagnostic avant/après » (cahier §4.3) : promesse de méthode
 * (visite, devis 24-48 h, chantier planifié) illustrée par la photo de
 * rénovation à moitié réalisée — un avant/après naturel.
 */
export function DiagnosticSection() {
  return (
    <section aria-label="Diagnostic et devis gratuit" className="bg-white">
      <Container className="grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-14">
        <div className="flex flex-col items-start gap-6">
          <SectionHeading
            align="left"
            eyebrow="Diagnostic avant/après"
            title={
              <>
                Un <TitleAccent>diagnostic précis</TitleAccent>, une intervention rapide
              </>
            }
          />
          <p className="max-w-xl leading-relaxed">
            Chaque chantier commence par une visite sur site : nous examinons votre toiture,
            photos à l’appui, puis vous recevez un devis gratuit et détaillé sous 24 à 48 h. Une
            fois validé, le chantier est planifié rapidement — et laissé propre.
          </p>
          <ButtonLink href="/devis-gratuit" variant="primary" withArrow>
            Demander un devis
          </ButtonLink>
        </div>

        <Image
          src="/images/realisations/renovation-toiture-avant-apres-02.jpeg"
          alt="Rénovation de toiture à moitié réalisée à Villemandeur par JCD Rénovation : ancienne couverture d'un côté, tuiles neuves de l'autre"
          width={1600}
          height={756}
          sizes="(min-width: 1024px) 544px, calc(100vw - 2rem)"
          className="rounded-card shadow-card w-full object-cover"
        />
      </Container>
    </section>
  );
}
