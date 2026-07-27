import { CityPageTemplate } from "@/components/villes/CityPageTemplate";
import { getVille } from "@/content/villes";
import { buildMetadata } from "@/lib/seo";

const ville = getVille("couvreur-sens");

export const metadata = buildMetadata({
  title: ville.metaTitle,
  description: ville.metaDescription,
  path: `/${ville.slug}`,
});

/** Page ville Sens, wrapper mince : contenu unique → template (cahier §6). */
export default function Page() {
  return <CityPageTemplate ville={ville} />;
}
