import type { Metadata } from "next";

import { BlogCard } from "@/components/blog/BlogCard";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { PageTitle, TitleAccent } from "@/components/ui/PageTitle";
import { getAllPosts } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Conseils Toiture, Zinguerie & Démoussage | Blog JCD Rénovation",
  description:
    "Conseils d'experts sur l'entretien de toiture, la zinguerie, le démoussage et la recherche de fuite. Par JCD Rénovation.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="bg-cream">
        <Container className="py-10 sm:py-14">
          <Breadcrumbs crumbs={[{ name: "Blog", path: "/blog" }]} />
          <PageTitle className="mt-6">
            Nos conseils <TitleAccent>toiture &amp; zinguerie</TitleAccent>
          </PageTitle>
          <p className="mt-5 max-w-2xl leading-relaxed">
            Prix, entretien, fuites, zinguerie : des réponses concrètes et chiffrées, rédigées par
            un couvreur zingueur qui intervient chaque semaine sur les toits de Villemandeur et du
            Montargois.
          </p>
        </Container>
      </section>

      <section aria-label="Articles du blog">
        <Container className="py-12 sm:py-16">
          {posts.length === 0 ? (
            <p className="text-center leading-relaxed">
              Les premiers articles arrivent très bientôt. En attendant, demandez votre devis
              gratuit : réponse sous 24 à 48 h.
            </p>
          ) : (
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <li key={post.slug}>
                  <BlogCard post={post} />
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
