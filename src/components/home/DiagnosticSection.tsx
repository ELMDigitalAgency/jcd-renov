import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { FramedImage } from "@/components/ui/FramedImage";
import { TitleAccent } from "@/components/ui/PageTitle";
import { SectionHeading } from "@/components/ui/SectionHeading";

const engagements = [
  {
    title: "Visite sur site",
    text: "Nous examinons votre toiture sur place, photos à l'appui.",
  },
  {
    title: "Devis gratuit sous 24-48 h",
    text: "Un chiffrage détaillé poste par poste, sans engagement.",
  },
  {
    title: "Chantier planifié vite",
    text: "Une fois validé, le chantier démarre rapidement et reste propre.",
  },
] as const;

/**
 * Section « diagnostic avant/après » (cahier §4.3) : la promesse de méthode
 * en 3 engagements cochés, illustrée par la rénovation à moitié réalisée
 * (un avant/après naturel) dans le cadre photo signature.
 */
export function DiagnosticSection() {
  return (
    <section aria-label="Diagnostic et devis gratuit" className="bg-white">
      <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start gap-6">
          <SectionHeading
            align="left"
            title={
              <>
                Un <TitleAccent>diagnostic précis</TitleAccent>, une intervention rapide
              </>
            }
          />

          <ul className="space-y-4">
            {engagements.map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <CheckCircleRoundedIcon fontSize="inherit" className="mt-0.5 text-2xl shrink-0 text-primary" aria-hidden />
                <div>
                  <p className="font-heading font-bold text-navy">{item.title}</p>
                  <p className="text-sm leading-relaxed">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <ButtonLink href="/devis-gratuit" variant="primary" withArrow>
            Demander un devis
          </ButtonLink>
        </div>

        <FramedImage
          src="/images/realisations/renovation-toiture-avant-apres-02.jpeg"
          alt="Rénovation de toiture à moitié réalisée à Villemandeur par JCD Rénovation : ancienne couverture d'un côté, tuiles neuves de l'autre"
          width={1600}
          height={756}
          sizes="(min-width: 1024px) 520px, calc(100vw - 2rem)"
        />
      </Container>
    </section>
  );
}
