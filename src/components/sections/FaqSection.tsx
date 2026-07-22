import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { FaqItem } from "@/content/types";
import { faqPageSchema } from "@/lib/schema";

type FaqSectionProps = {
  items: readonly FaqItem[];
  title?: React.ReactNode;
  eyebrow?: string;
  subtitle?: string;
  /** N'émettre le schema FAQPage qu'une fois par page. */
  withSchema?: boolean;
};

/**
 * Section FAQ accordéon + schema.org FAQPage émis depuis LES MÊMES données
 * (cohérence garantie — checklist SEO + GEO).
 */
export function FaqSection({
  items,
  title = "Questions fréquentes",
  eyebrow = "FAQ",
  subtitle,
  withSchema = true,
}: FaqSectionProps) {
  return (
    <section aria-label="Questions fréquentes" className="bg-cream">
      <Container className="py-16 sm:py-20">
        {withSchema ? <JsonLd data={faqPageSchema(items)} /> : null}
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <Accordion items={items} className="mx-auto mt-10 max-w-3xl" />
      </Container>
    </section>
  );
}
