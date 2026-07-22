import { blogSlugs } from "@/content/types";

/** Stub — remplacé en Phase 6. */
export const dynamicParams = false;

export function generateStaticParams() {
  return blogSlugs.map((slug) => ({ slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <div className="p-8">Article {slug} en construction</div>;
}
