import { siteConfig } from "@/site.config";

/**
 * Bandeau statistiques orange plein, 3 colonnes séparées par un filet
 * vertical fin (cahier §2.3 + §4.2). Les valeurs viennent de site.config.ts
 * (stats flaguées « à valider client »).
 */
export function StatsBand() {
  return (
    <div className="bg-primary-ink">
      <dl className="mx-auto grid w-full max-w-6xl grid-cols-1 divide-y divide-white/25 px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {siteConfig.stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1 px-6 py-6 text-center sm:py-8">
            <dt className="order-2 text-sm font-medium text-white">{stat.label}</dt>
            <dd className="order-1 font-heading text-3xl font-extrabold text-white sm:text-4xl">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
