import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import { ArticleHeader } from "@/components/blog/ArticleHeader";
import { mdxComponents, mdxRemoteOptions } from "@/components/blog/mdx-components";
import { RelatedServices } from "@/components/blog/RelatedServices";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import type { BlogSlug } from "@/content/types";
import { getPostSlugs, getPostSource } from "@/lib/blog";
import { articleSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

/**
 * Seuls les .mdx réellement présents dans src/content/blog sont générés
 * (getPostSlugs, PAS blogSlugs) : le build ne référence jamais un article
 * encore non rédigé du calendrier éditorial.
 */
export const dynamicParams = false;

export function generateStaticParams(): { slug: BlogSlug }[] {
  return getPostSlugs().map((slug) => ({ slug }));
}

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

/** Narrowing BlogSlug — inatteignable en pratique (dynamicParams = false). */
function resolveSlug(slug: string): BlogSlug {
  if (!(getPostSlugs() as readonly string[]).includes(slug)) {
    notFound();
  }
  return slug as BlogSlug;
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const { meta } = getPostSource(resolveSlug(slug));
  return buildMetadata({
    title: meta.title,
    description: meta.description,
    path: `/blog/${meta.slug}`,
    ogType: "article",
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const { meta, content } = getPostSource(resolveSlug(slug));
  const wordCount = content.split(/\s+/).filter(Boolean).length;
  const readingMinutes = Math.max(1, Math.round(wordCount / 220));

  return (
    <>
      <JsonLd data={articleSchema(meta)} />
      <ArticleHeader meta={meta} readingMinutes={readingMinutes} />

      <Container className="py-10 sm:py-14">
        <article className="mx-auto max-w-3xl">
          <MDXRemote source={content} components={mdxComponents} options={mdxRemoteOptions} />
        </article>
        <div className="mx-auto mt-14 max-w-3xl">
          <RelatedServices services={meta.linkedServices} />
        </div>
      </Container>

      <CtaBanner />

      <nav aria-label="Retour au blog">
        <Container className="py-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-semibold text-navy transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Tous les conseils
          </Link>
        </Container>
      </nav>
    </>
  );
}
