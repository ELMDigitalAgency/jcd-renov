import { cn } from "@/lib/utils";

type TableauPrixProps = {
  caption?: string;
  headers: string[];
  rows: string[][];
};

/**
 * Table de prix des articles MDX :
 * `<TableauPrix caption="…" headers={[…]} rows={[[…]]} />`.
 * Table sémantique (caption, scope) dans un conteneur scrollable — la page
 * ne déborde jamais horizontalement sur mobile.
 */
export function TableauPrix({ caption, headers, rows }: TableauPrixProps) {
  return (
    <div className="rounded-card shadow-card my-8 overflow-x-auto">
      <table className="w-full min-w-[28rem] border-collapse bg-white text-left text-sm sm:text-base">
        {caption ? (
          <caption className="bg-cream px-5 py-3 text-left text-sm font-medium text-navy">
            {caption}
          </caption>
        ) : null}
        <thead className="bg-navy text-white">
          <tr>
            {headers.map((header) => (
              <th key={header} scope="col" className="font-heading px-5 py-3.5 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-navy/10">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={cn("px-5 py-3.5 align-top", cellIndex === 0 && "font-medium text-navy")}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
