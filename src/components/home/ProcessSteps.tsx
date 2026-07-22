import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/ServiceIcon";
import { processSteps } from "@/content/process";

/**
 * Déroulé d'une intervention en 4 étapes (cahier §4.5) — cartes pilotées par
 * content/process.ts : 1 colonne mobile, 2 tablette, 4 desktop.
 */
export function ProcessSteps() {
  return (
    <section aria-label="Déroulé d'une intervention" className="bg-white">
      <Container className="py-16 sm:py-20">
        <SectionHeading title="Comment se déroule une intervention JCD Rénovation ?" />

        <ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <li key={step.title}>
              <Card className="flex h-full flex-col gap-4">
                <div className="flex items-center justify-between">
                  <IconBadge icon={step.icon} />
                  <span className="font-heading text-sm font-extrabold text-primary" aria-hidden>
                    0{index + 1}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-navy">{step.title}</h3>
                <p className="text-sm leading-relaxed">{step.text}</p>
              </Card>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
