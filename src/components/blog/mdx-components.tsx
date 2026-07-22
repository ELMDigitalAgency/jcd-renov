import type { MDXComponents } from "mdx/types";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import type { Route } from "next";
import Link from "next/link";
import { isValidElement, type ComponentPropsWithoutRef, type ReactElement, type ReactNode } from "react";
import remarkGfm from "remark-gfm";

import { CtaEncart } from "@/components/blog/mdx/CtaEncart";
import { FaqArticle } from "@/components/blog/mdx/FaqArticle";
import { TableauPrix } from "@/components/blog/mdx/TableauPrix";

/**
 * Options MDX partagées entre la page article (MDXRemote) et le test de
 * registre (compileMDX) — une seule source de vérité : ce que le test compile
 * est exactement ce que la prod rend.
 *
 * `blockJS: false` est OBLIGATOIRE : les articles passent des attributs JSX en
 * expression (`rows={[…]}`, `items={[…]}`) que le blocage par défaut de
 * next-mdx-remote v6 supprimerait silencieusement (tableaux et FAQ vides).
 * Le contenu est local au repo (jamais distant) et `blockDangerousJS` reste
 * actif par défaut (eval, constructor, process… interdits).
 */
export const mdxRemoteOptions: NonNullable<MDXRemoteProps["options"]> = {
  mdxOptions: { remarkPlugins: [remarkGfm] },
  blockJS: false,
};

/** Texte brut d'un arbre React (pour générer les ancres de titres). */
function textOf(node: ReactNode): string {
  if (node == null || typeof node === "boolean") {
    return "";
  }
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(textOf).join("");
  }
  if (isValidElement(node)) {
    const element = node as ReactElement<{ children?: ReactNode }>;
    return textOf(element.props.children);
  }
  return "";
}

/** « Pourquoi la fuite n'est-elle pas là ? » → "pourquoi-la-fuite-nest-elle-pas-la" */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/œ/g, "oe")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/[\s-]+/g, "-");
}

const linkClass =
  "font-medium text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:text-primary-dark hover:decoration-primary";

/**
 * Mapping des éléments Markdown → design system, + composants exposés aux
 * articles (CtaEncart, TableauPrix, FaqArticle). JAMAIS de h1 ici : le h1
 * vient du frontmatter via <PageTitle> (règle : 1 h1/page).
 */
export const mdxComponents: MDXComponents = {
  h2: ({ children, ...props }: ComponentPropsWithoutRef<"h2">) => (
    <h2
      {...props}
      id={slugify(textOf(children))}
      className="font-heading mt-10 mb-4 scroll-mt-24 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl"
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: ComponentPropsWithoutRef<"h3">) => (
    <h3
      {...props}
      id={slugify(textOf(children))}
      className="font-heading mt-8 mb-3 scroll-mt-24 text-xl font-bold text-navy sm:text-2xl"
    >
      {children}
    </h3>
  ),
  p: ({ children, ...props }: ComponentPropsWithoutRef<"p">) => (
    <p {...props} className="my-4 leading-relaxed">
      {children}
    </p>
  ),
  a: ({ href, children, ...props }: ComponentPropsWithoutRef<"a">) => {
    if (href?.startsWith("/")) {
      return (
        <Link href={href as Route} className={linkClass}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith("#")) {
      return (
        <a {...props} href={href} className={linkClass}>
          {children}
        </a>
      );
    }
    return (
      <a {...props} href={href} rel="noopener noreferrer" target="_blank" className={linkClass}>
        {children}
      </a>
    );
  },
  ul: ({ children, ...props }: ComponentPropsWithoutRef<"ul">) => (
    <ul {...props} className="my-4 list-disc space-y-2 pl-6 leading-relaxed marker:text-primary">
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: ComponentPropsWithoutRef<"ol">) => (
    <ol
      {...props}
      className="my-4 list-decimal space-y-2 pl-6 leading-relaxed marker:font-semibold marker:text-primary"
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }: ComponentPropsWithoutRef<"li">) => (
    <li {...props} className="pl-1">
      {children}
    </li>
  ),
  table: ({ children, ...props }: ComponentPropsWithoutRef<"table">) => (
    <div className="rounded-card shadow-card my-8 overflow-x-auto">
      <table
        {...props}
        className="w-full min-w-[28rem] border-collapse bg-white text-left text-sm sm:text-base"
      >
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }: ComponentPropsWithoutRef<"thead">) => (
    <thead {...props} className="bg-navy text-white">
      {children}
    </thead>
  ),
  tbody: ({ children, ...props }: ComponentPropsWithoutRef<"tbody">) => (
    <tbody {...props} className="divide-y divide-navy/10">
      {children}
    </tbody>
  ),
  th: ({ children, ...props }: ComponentPropsWithoutRef<"th">) => (
    <th {...props} className="font-heading px-5 py-3.5 font-semibold">
      {children}
    </th>
  ),
  td: ({ children, ...props }: ComponentPropsWithoutRef<"td">) => (
    <td {...props} className="px-5 py-3.5 align-top">
      {children}
    </td>
  ),
  blockquote: ({ children, ...props }: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      {...props}
      className="my-6 rounded-r-xl border-l-4 border-primary bg-cream px-5 py-4 font-medium text-navy [&>p]:my-0"
    >
      {children}
    </blockquote>
  ),
  strong: ({ children, ...props }: ComponentPropsWithoutRef<"strong">) => (
    <strong {...props} className="font-semibold text-navy">
      {children}
    </strong>
  ),
  CtaEncart,
  TableauPrix,
  FaqArticle,
};
