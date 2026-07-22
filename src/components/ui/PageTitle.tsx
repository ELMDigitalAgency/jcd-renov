import { cn } from "@/lib/utils";

/**
 * SEUL émetteur de <h1> du site (règle ESLint no-restricted-syntax) :
 * garantit par construction un unique h1 par page, contenant le mot-clé
 * principal (checklist SEO).
 */

type PageTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageTitle({ children, className }: PageTitleProps) {
  return (
    <h1
      className={cn(
        "font-heading text-4xl font-extrabold tracking-tight text-navy sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]",
        className,
      )}
    >
      {children}
    </h1>
  );
}

/** Segment orange dans un titre bicolore (H1 comme H2) — cahier des charges §4. */
export function TitleAccent({ children }: { children: React.ReactNode }) {
  return <span className="text-primary">{children}</span>;
}
