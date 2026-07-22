import { PriceTable } from "@/components/prestations/PriceTable";
import { RelatedArticles } from "@/components/prestations/RelatedArticles";
import { ServiceExplainer } from "@/components/prestations/ServiceExplainer";
import { ServiceHero } from "@/components/prestations/ServiceHero";
import { ServiceZones } from "@/components/prestations/ServiceZones";
import { WarningSigns } from "@/components/prestations/WarningSigns";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { TitleAccent } from "@/components/ui/PageTitle";
import type { Prestation } from "@/content/types";
import type { PostMeta } from "@/lib/blog-types";

type PrestationPageTemplateProps = {
  prestation: Prestation;
  relatedPosts: PostMeta[];
};

/**
 * Template unique des 4 pages prestations — ordre imposé par le cahier des
 * charges §5 : hero → explication → signes → tarifs → zones → FAQ → articles
 * liés → CTA final.
 */
export function PrestationPageTemplate({ prestation, relatedPosts }: PrestationPageTemplateProps) {
  return (
    <>
      <ServiceHero prestation={prestation} />
      <ServiceExplainer consiste={prestation.consiste} icon={prestation.icon} />
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
      <FinalCta />
    </>
  );
}
