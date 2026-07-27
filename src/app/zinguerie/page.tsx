import { PrestationPageTemplate } from "@/components/prestations/PrestationPageTemplate";
import { getPrestation } from "@/content/prestations";
import { getPostsForPrestation } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";

const prestation = getPrestation("zinguerie");

export const metadata = buildMetadata({
  title: prestation.metaTitle,
  description: prestation.metaDescription,
  path: `/${prestation.slug}`,
});

/** Page Zinguerie, wrapper mince : contenu + articles liés → template (cahier §5). */
export default function Page() {
  const relatedPosts = getPostsForPrestation(prestation.slug);
  return <PrestationPageTemplate prestation={prestation} relatedPosts={relatedPosts} />;
}
