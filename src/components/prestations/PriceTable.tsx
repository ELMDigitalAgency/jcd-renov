import { Check } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Prestation } from "@/content/types";

type PriceTableProps = {
  tarifs: Prestation["tarifs"];
};

/**
 * Tableau de prix (cahier §5) : table sémantique responsive, facteurs de
 * variation, disclaimer. Fourchettes indicatives — jamais d'engagement chiffré.
 */
export function PriceTable({ tarifs }: PriceTableProps) {
  return (
    <section aria-label="Tarifs">
      <Container className="py-16 sm:py-20">
        <SectionHeading eyebrow="Tarifs indicatifs" title={tarifs.title} />
        <div className="mx-auto mt-10 max-w-3xl">
          <div className="overflow-x-auto rounded-card shadow-card">
            <table className="w-full min-w-[30rem]">
              <caption className="sr-only">{tarifs.title} (fourchettes indicatives)</caption>
              <thead>
                <tr className="bg-navy text-white">
                  <th
                    scope="col"
                    className="px-6 py-4 text-left font-heading text-sm font-bold sm:text-base"
                  >
                    Prestation
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left font-heading text-sm font-bold sm:text-base"
                  >
                    Fourchette
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left font-heading text-sm font-bold sm:text-base"
                  >
                    Unité
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy/10 bg-white">
                {tarifs.rows.map((row) => (
                  <tr key={row.label}>
                    <th
                      scope="row"
                      className="px-6 py-4 text-left text-sm font-medium text-navy sm:text-base"
                    >
                      {row.label}
                    </th>
                    <td className="px-6 py-4 text-sm font-semibold whitespace-nowrap text-primary-ink sm:text-base">
                      {row.fourchette}
                    </td>
                    <td className="px-6 py-4 text-sm sm:text-base">{row.unite}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-10 font-heading text-lg font-bold text-navy">
            Ce qui fait varier le prix :
          </h3>
          <ul className="mt-4 space-y-2.5">
            {tarifs.facteurs.map((facteur) => (
              <li key={facteur} className="flex items-start gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                <span>{facteur}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm italic">{tarifs.disclaimer}</p>
        </div>
      </Container>
    </section>
  );
}
