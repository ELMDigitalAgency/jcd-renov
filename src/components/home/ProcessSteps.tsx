import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { processSteps } from "@/content/process";

/**
 * Déroulé d'une intervention en 4 étapes (cahier §4.5) : cartes crème avec
 * numéro géant en filigrane, la signature visuelle de la section.
 */
export function ProcessSteps() {
  return (
    <section aria-label="Déroulé d'une intervention" className="bg-white">
      <Container className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="Notre méthode"
          title="Comment se déroule une intervention JCD Rénovation ?"
        />

        <ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <li key={step.title}>
              <div className="rounded-card relative flex h-full flex-col gap-4 overflow-hidden bg-cream p-6 ring-1 ring-navy/5 transition-transform duration-300 hover:-translate-y-1 sm:p-7">
                {/* Numéro géant en filigrane */}
                <span
                  aria-hidden
                  className="font-heading pointer-events-none absolute -top-5 -right-1 text-[6rem] leading-none font-extrabold text-navy/[0.07] select-none"
                >
                  {index + 1}
                </span>
                <ServiceIcon icon={step.icon} className="text-4xl text-primary-ink" />
                <h3 className="font-heading text-lg font-bold text-navy">{step.title}</h3>
                <p className="text-sm leading-relaxed">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
