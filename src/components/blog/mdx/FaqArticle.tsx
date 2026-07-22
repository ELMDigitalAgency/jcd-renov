import { Accordion } from "@/components/ui/Accordion";
import { JsonLd } from "@/components/ui/JsonLd";
import type { FaqItem } from "@/content/types";
import { faqPageSchema } from "@/lib/schema";

type FaqArticleProps = {
  items: FaqItem[];
};

/**
 * Mini-FAQ de fin d'article MDX : `<FaqArticle items={[{ question, answer }]} />`.
 * Rend l'accordéon du design system ET le FAQPage JSON-LD depuis la même
 * donnée (extraction GEO : questions/réponses citables par les IA).
 */
export function FaqArticle({ items }: FaqArticleProps) {
  if (items.length === 0) {
    return null;
  }
  return (
    <section aria-label="Questions fréquentes" className="my-10">
      <JsonLd data={faqPageSchema(items)} />
      <h2
        id="questions-frequentes"
        className="font-heading mb-6 scroll-mt-24 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl"
      >
        Questions fréquentes
      </h2>
      <Accordion items={items} />
    </section>
  );
}
