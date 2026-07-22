import { CategoryBadge, formatPostDate } from "@/components/blog/BlogCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { PageTitle } from "@/components/ui/PageTitle";
import type { PostMeta } from "@/lib/blog-types";

type ArticleHeaderProps = {
  meta: PostMeta;
  /** Mots / 220, arrondi — calculé par la page à partir du contenu MDX. */
  readingMinutes: number;
};

/**
 * Bandeau d'en-tête d'article : fil d'Ariane, catégorie, H1 (title du
 * frontmatter), dates de publication/mise à jour et temps de lecture.
 * Colonne alignée sur la largeur de lecture du corps (max-w-3xl).
 */
export function ArticleHeader({ meta, readingMinutes }: ArticleHeaderProps) {
  return (
    <header className="bg-cream">
      <Container className="py-10 sm:py-14">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs
            crumbs={[
              { name: "Blog", path: "/blog" },
              { name: meta.title, path: `/blog/${meta.slug}` },
            ]}
          />
          <div className="mt-6">
            <CategoryBadge category={meta.category} tone="white" />
          </div>
          <PageTitle className="mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            {meta.title}
          </PageTitle>
          <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-body">
            <time dateTime={meta.date}>Publié le {formatPostDate(meta.date)}</time>
            {meta.updated ? (
              <>
                <span aria-hidden>·</span>
                <time dateTime={meta.updated}>Mis à jour le {formatPostDate(meta.updated)}</time>
              </>
            ) : null}
            <span aria-hidden>·</span>
            <span>{readingMinutes} min de lecture</span>
          </p>
        </div>
      </Container>
    </header>
  );
}
