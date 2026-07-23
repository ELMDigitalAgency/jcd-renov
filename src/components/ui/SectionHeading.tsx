import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  /** Titre H2 — peut contenir <TitleAccent> pour le segment orange. */
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

/** En-tête de section : H2 bicolore + sous-titre gris (sans libellé au-dessus). */
export function SectionHeading({ title, subtitle, align = "center", className }: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <h2 className="font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-[2.6rem] sm:leading-[1.15]">
        {title}
      </h2>
      {subtitle ? <p className="mt-4 text-base leading-relaxed sm:text-lg">{subtitle}</p> : null}
    </div>
  );
}
