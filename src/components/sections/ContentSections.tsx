import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

import { Container } from "@/components/ui/Container";
import type { ContentSection } from "@/content/types";
import { cn } from "@/lib/utils";

type ContentSectionsProps = {
  sections: readonly ContentSection[];
  /** Fond de la première section, puis alternance blanc/crème. */
  startOn?: "white" | "cream";
};

/**
 * Sections éditoriales longues des pages prestations et villes : H2 riche en
 * mots-clés + paragraphes + puces. C'est le contenu de fond qui donne à
 * chaque page la profondeur nécessaire pour se positionner seule.
 */
export function ContentSections({ sections, startOn = "white" }: ContentSectionsProps) {
  if (sections.length === 0) return null;

  return (
    <>
      {sections.map((section, index) => {
        const cream = (index + (startOn === "cream" ? 0 : 1)) % 2 === 0;
        return (
          <section
            key={section.title}
            aria-label={section.title}
            className={cn(cream ? "bg-cream" : "bg-white")}
          >
            <Container className="py-12 sm:py-16">
              <div className="max-w-3xl">
                <h2 className="font-heading text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                  {section.title}
                </h2>
                <div className="mt-5 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.bullets && section.bullets.length > 0 ? (
                  <ul className="mt-6 space-y-2.5">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-navy">
                        <CheckRoundedIcon
                          fontSize="inherit"
                          className="mt-0.5 shrink-0 text-[20px] text-primary"
                          aria-hidden
                        />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </Container>
          </section>
        );
      })}
    </>
  );
}
