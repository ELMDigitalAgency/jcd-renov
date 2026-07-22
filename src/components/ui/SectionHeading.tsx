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
        <p
          className={cn(
            "mb-4 flex items-center gap-3 text-xs font-bold tracking-[0.18em] text-primary-ink uppercase sm:text-sm",
            align === "center" && "justify-center",
          )}
        >
          <span aria-hidden className="h-0.5 w-8 rounded-full bg-primary" />
          {eyebrow}
          {align === "center" ? (
            <span aria-hidden className="h-0.5 w-8 rounded-full bg-primary" />
          ) : null}
        </p>
      ) : null}
      <h2 className="font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-[2.6rem] sm:leading-[1.15]">
        {title}
      </h2>
      {subtitle ? <p className="mt-4 text-base leading-relaxed sm:text-lg">{subtitle}</p> : null}
    </div>
  );
}
