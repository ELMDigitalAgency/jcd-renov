import { PrestationPageTemplate } from "@/components/prestations/PrestationPageTemplate";
import { getPrestation } from "@/content/prestations";
import { getRelatedPosts } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";

const prestation = getPrestation("demoussage-toiture");

export const metadata = buildMetadata({
  title: prestation.metaTitle,
  description: prestation.metaDescription,
  path: `/${prestation.slug}`,
});

/** Page Démoussage, wrapper mince : contenu + articles liés → template (cahier §5). */
export default function Page() {
  const relatedPosts = getRelatedPosts(prestation);
  return <PrestationPageTemplate prestation={prestation} relatedPosts={relatedPosts} />;
}
