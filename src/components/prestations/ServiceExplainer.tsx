import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/ServiceIcon";
import type { IconKey, Prestation } from "@/content/types";

type ServiceExplainerProps = {
  consiste: Prestation["consiste"];
  /** Icône de la prestation, reprise sur chaque point de la grille. */
  icon: IconKey;
};

/**
 * « En quoi ça consiste » (cahier §5) : paragraphes d'explication puis grille
 * 2×2 des points clés de l'intervention.
 */
export function ServiceExplainer({ consiste, icon }: ServiceExplainerProps) {
  return (
    <section aria-label="Déroulé de la prestation">
      <Container className="py-16 sm:py-20">
        <SectionHeading eyebrow="Notre méthode" title={consiste.title} />
        <div className="mx-auto mt-8 max-w-3xl space-y-4 leading-relaxed">
          {consiste.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <ul className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
          {consiste.points.map((point) => (
            <li key={point.title}>
              <Card variant="cream" className="flex h-full items-start gap-4">
                <IconBadge icon={icon} tone="white" />
                <div>
                  <h3 className="font-heading text-lg font-bold text-navy">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed sm:text-base">{point.text}</p>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
