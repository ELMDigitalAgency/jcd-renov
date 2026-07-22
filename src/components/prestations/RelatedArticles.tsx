import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { TitleAccent } from "@/components/ui/PageTitle";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { PostMeta } from "@/lib/blog-types";

type RelatedArticlesProps = {
  posts: readonly PostMeta[];
};

/**
 * Maillage interne vers le blog (cahier §5). Les 15 articles sont publiés au
 * fil de l'eau : tant qu'aucun article lié n'existe, la section n'est
 * simplement pas rendue — jamais de grille vide ni de crash.
 */
export function RelatedArticles({ posts }: RelatedArticlesProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section aria-label="Articles liés">
      <Container className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="Blog"
          title={
            <>
              Pour aller <TitleAccent>plus loin</TitleAccent>
            </>
          }
          subtitle="Nos guides pour comprendre les enjeux, comparer les solutions et décider sereinement."
        />
        <ul className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <Card
                  variant="white"
                  className="flex h-full flex-col border border-navy/5 transition-transform duration-200 group-hover:-translate-y-1"
                >
                  <h3 className="font-heading text-lg font-bold text-navy transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed">{post.description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Lire l’article
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
