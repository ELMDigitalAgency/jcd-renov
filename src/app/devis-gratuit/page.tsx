import { DevisForm } from "@/components/devis/DevisForm";
import { FaqSection } from "@/components/sections/FaqSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { PageTitle, TitleAccent } from "@/components/ui/PageTitle";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { garanties } from "@/content/garanties";
import { processSteps } from "@/content/process";
import type { FaqItem } from "@/content/types";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Devis Gratuit Couvreur Villemandeur | JCD Rénovation",
  description:
    "Demandez votre devis gratuit pour vos travaux de couverture, zinguerie, démoussage ou recherche de fuite à Villemandeur.",
  path: "/devis-gratuit",
});

/** FAQ propre à la page devis. Le schema FAQPage principal est émis ailleurs. */
const devisFaq: readonly FaqItem[] = [
  {
    question: "Le devis est-il vraiment gratuit ?",
    answer:
      "Oui : la visite sur place et le devis détaillé sont entièrement gratuits et sans engagement. Vous restez libre d'accepter ou non.",
  },
  {
    question: "Sous quel délai recevrai-je le devis ?",
    answer:
      "Vous recevez votre devis sous 24 à 48 h après la visite, chaque poste chiffré clairement, sans surprise.",
  },
  {
    question: "Dois-je préparer quelque chose ?",
    answer:
      "Non, l'accès au terrain suffit pour le diagnostic. Si vous avez des photos du problème, elles nous aident à préparer la visite.",
  },
] as const;

export default function DevisGratuitPage() {
  return (
    <>
      <section className="bg-cream">
        <Container className="py-10 sm:py-14">
          <Breadcrumbs crumbs={[{ name: "Devis gratuit", path: "/devis-gratuit" }]} />
          <PageTitle className="mt-6">
            Votre devis <TitleAccent>gratuit</TitleAccent>
          </PageTitle>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed">
            Décrivez vos travaux de couverture, zinguerie, démoussage ou recherche de fuite : nous
            vous répondons sous 24 à 48 h, sans engagement.
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-12 sm:py-16">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)]">
            <DevisForm />

            <aside aria-label="Informations pratiques" className="space-y-6">
              <Card variant="cream">
                <h2 className="font-heading text-xl font-bold text-navy">
                  Comment ça se passe&nbsp;?
                </h2>
                <ol className="mt-5 space-y-4">
                  {processSteps.map((step, index) => (
                    <li key={step.title} className="flex gap-3">
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                        {index + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-navy">{step.title}</p>
                        <p className="mt-0.5 text-sm leading-relaxed">{step.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </Card>

              <Card variant="white">
                <PhoneLink withLabel />
                <p className="mt-4 text-sm">Du lundi au samedi</p>
                <p className="mt-1 text-sm font-medium text-navy">
                  Urgence fuite&nbsp;: appelez directement.
                </p>
                <ul className="mt-6 space-y-3 border-t border-navy/10 pt-5">
                  {garanties.map((garantie) => (
                    <li key={garantie.title} className="flex items-center gap-3">
                      <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-cream">
                        <ServiceIcon icon={garantie.icon} className="size-4.5 text-primary" />
                      </span>
                      <span className="text-sm font-semibold text-navy">{garantie.title}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </aside>
          </div>
        </Container>
      </section>

      <FaqSection
        items={devisFaq}
        title={
          <>
            Questions fréquentes sur le <TitleAccent>devis</TitleAccent>
          </>
        }
        withSchema={false}
      />
    </>
  );
}
