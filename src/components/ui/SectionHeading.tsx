import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  /** Petit label orange au-dessus du titre (ex. « Diagnostic avant/après »). */
  eyebrow?: string;
  /** Titre H2 — peut contenir <TitleAccent> pour le segment orange. */
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

/** En-tête de section : eyebrow orange + H2 bicolore + sous-titre gris. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold tracking-wide text-primary uppercase">{eyebrow}</p>
      ) : null}
      <h2 className="font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-4 text-base leading-relaxed sm:text-lg">{subtitle}</p> : null}
    </div>
  );
}
