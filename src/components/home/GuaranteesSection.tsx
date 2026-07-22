import { Container } from "@/components/ui/Container";
import { TitleAccent } from "@/components/ui/PageTitle";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/ServiceIcon";
import { garanties } from "@/content/garanties";

/**
 * Section « artisan de confiance » (cahier §4.7) : argumentaire à gauche,
 * les 3 garanties de content/garanties.ts empilées à droite.
 */
export function GuaranteesSection() {
  return (
    <section aria-label="Nos garanties" className="bg-white">
      <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start gap-6">
          <SectionHeading
            align="left"
            title={
              <>
                Votre artisan couvreur <TitleAccent>de confiance</TitleAccent> à Villemandeur
              </>
            }
          />
          <p className="max-w-xl leading-relaxed">
            JCD Rénovation est une entreprise artisanale de couverture et de zinguerie qui
            intervient à Villemandeur et dans toute l’agglomération Montargoise. Un seul
            interlocuteur du diagnostic à la fin du chantier, un devis détaillé avant toute
            intervention, et des travaux couverts par la garantie décennale.
          </p>
        </div>

        <ul className="flex flex-col gap-8">
          {garanties.map((garantie) => (
            <li key={garantie.title} className="flex items-start gap-5">
              <IconBadge icon={garantie.icon} />
              <div>
                <h3 className="font-heading text-lg font-bold text-navy">{garantie.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed sm:text-base">{garantie.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
