import { PriceTable } from "@/components/prestations/PriceTable";
import { RelatedArticles } from "@/components/prestations/RelatedArticles";
import { ServiceExplainer } from "@/components/prestations/ServiceExplainer";
import { ContentSections } from "@/components/sections/ContentSections";
import { ServiceHero } from "@/components/prestations/ServiceHero";
import { ServiceZones } from "@/components/prestations/ServiceZones";
import { WarningSigns } from "@/components/prestations/WarningSigns";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { SourcesUtiles } from "@/components/sections/SourcesUtiles";
import { JsonLd } from "@/components/ui/JsonLd";
import { TitleAccent } from "@/components/ui/PageTitle";
import type { Prestation } from "@/content/types";
import type { PostMeta } from "@/lib/blog-types";
import { serviceSchema } from "@/lib/schema";

type PrestationPageTemplateProps = {
  prestation: Prestation;
  relatedPosts: PostMeta[];
};

/**
 * Template unique des pages prestations — ordre imposé par le cahier des
 * charges §5 : hero → explication → signes → tarifs → zones → FAQ → articles
 * liés → CTA final. Point d'émission unique du schéma Service : toute nouvelle
 * page prestation en hérite automatiquement.
 */
export function PrestationPageTemplate({ prestation, relatedPosts }: PrestationPageTemplateProps) {
  return (
    <>
      <JsonLd data={serviceSchema(prestation)} />
      <ServiceHero prestation={prestation} />
      <ServiceExplainer consiste={prestation.consiste} icon={prestation.icon} />
      {/* Contenu de fond unique à la prestation (méthode, contexte local…) */}
      <ContentSections sections={prestation.sections} startOn="cream" />
      <WarningSigns signes={prestation.signes} />
      <PriceTable tarifs={prestation.tarifs} />
      <ServiceZones currentPath={`/${prestation.slug}`} />
      <FaqSection
        items={prestation.faq}
        title={
          <>
            Questions <TitleAccent>fréquentes</TitleAccent>
          </>
        }
        subtitle="Les réponses aux questions que l’on nous pose le plus souvent avant un devis."
        withSchema
      />
      <RelatedArticles posts={relatedPosts} />
      <SourcesUtiles sources={prestation.sources} />
      <FinalCta />
    </>
  );
}
