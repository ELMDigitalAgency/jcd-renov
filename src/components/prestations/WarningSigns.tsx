import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import type { Prestation } from "@/content/types";

type WarningSignsProps = {
  signes: Prestation["signes"];
};

/**
 * Signes d'alerte (cahier §5) : liste à icônes alert-triangle, conclue par la
 * phrase d'aversion à la perte qui pousse au contrôle gratuit.
 */
export function WarningSigns({ signes }: WarningSignsProps) {
  return (
    <section className="bg-cream">
      <Container className="py-16 sm:py-20">
        <SectionHeading title={signes.title} />
        <ul className="mx-auto mt-10 max-w-3xl space-y-3">
          {signes.items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-card sm:px-6"
            >
              <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <ServiceIcon icon="alert-triangle" className="text-[20px] text-primary" />
              </span>
              <p className="font-medium text-navy">{item}</p>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-10 max-w-3xl text-center text-lg font-semibold text-navy">
          Plus on attend, plus la réparation coûte cher : un contrôle gratuit lève le doute.
        </p>
      </Container>
    </section>
  );
}
