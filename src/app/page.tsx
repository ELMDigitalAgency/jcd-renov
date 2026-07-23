import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { DiagnosticSection } from "@/components/home/DiagnosticSection";
import { GuaranteesSection } from "@/components/home/GuaranteesSection";
import { HomeHero } from "@/components/home/HomeHero";
import { LeakSpotlight } from "@/components/home/LeakSpotlight";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { RealisationsStrip } from "@/components/home/RealisationsStrip";
import { ServicesBento } from "@/components/home/ServicesBento";
import { TestimonialCarousel } from "@/components/avis/TestimonialCarousel";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqSection } from "@/components/sections/FaqSection";
import { Container } from "@/components/ui/Container";
import { TitleAccent } from "@/components/ui/PageTitle";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { avisClients } from "@/content/avis";
import { faqHome } from "@/content/faq-home";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Couvreur Zingueur à Villemandeur (45700) | JCD Rénovation",
  description:
    "JCD Rénovation, couvreur et zingueur qualifié à Villemandeur : démoussage, zinguerie, recherche de fuite. Devis gratuit sous 24-48h.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <DiagnosticSection />
      <LeakSpotlight />
      <ProcessSteps />
      <ServicesBento />
      <GuaranteesSection />
      <RealisationsStrip />
      <FaqSection
        items={faqHome}
        title={
          <>
            Questions <TitleAccent>fréquentes</TitleAccent>
          </>
        }
        subtitle="Prix, délais, garanties, zone d’intervention : les réponses aux questions que l’on nous pose le plus souvent."
      />
      <CtaBanner />
      <section aria-label="Avis clients" className="bg-white">
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="Avis clients" title="Ce que disent nos clients" />
          <div className="mt-10">
            <TestimonialCarousel avis={avisClients} />
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/avis-clients"
              className="inline-flex items-center gap-2 font-semibold text-navy transition-colors hover:text-primary"
            >
              Voir tous les avis
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
