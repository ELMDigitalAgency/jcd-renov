import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

import { Container } from "@/components/ui/Container";
import type { SourceUtile } from "@/content/types";

type SourcesUtilesProps = {
  sources?: readonly SourceUtile[];
};

/**
 * Bloc « Sources utiles » : références officielles appuyant les affirmations
 * réglementaires et tarifaires de la page (signal E-E-A-T).
 *
 * Liens en `nofollow noopener` et ouverts dans un nouvel onglet : ce sont des
 * références consultables, pas des recommandations, et rien ne justifie de leur
 * transmettre du PageRank.
 */
export function SourcesUtiles({ sources }: SourcesUtilesProps) {
  if (!sources || sources.length === 0) return null;

  return (
    <section aria-label="Sources utiles" className="bg-white">
      <Container className="py-12 sm:py-14">
        <div className="max-w-3xl">
          <h2 className="font-heading text-lg font-bold text-navy">Sources utiles</h2>
          <ul className="mt-4 space-y-2.5">
            {sources.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-start gap-2 text-sm leading-relaxed text-navy/80 underline decoration-navy/25 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
                >
                  {source.label}
                  <OpenInNewRoundedIcon
                    fontSize="inherit"
                    className="mt-1 shrink-0 text-[14px]"
                    aria-hidden
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
