import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { BrandBadge } from "@/components/ui/BrandBadge";
import { prestations } from "@/content/prestations";
import { siteConfig } from "@/site.config";

const quickLinks = [
  { label: "Accueil", href: "/" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Zone d'intervention", href: "/zone-intervention" },
  { label: "Avis clients", href: "/avis-clients" },
  { label: "Blog & conseils", href: "/blog" },
  { label: "Devis gratuit", href: "/devis-gratuit" },
] as const;

/** Footer marine plein : logo + baseline, 3 colonnes, ligne légale (cahier §4.11). */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <BrandBadge className="size-14" />
            <p className="font-heading text-lg font-extrabold">
              <span className="text-white">JCD</span>{" "}
              <span className="text-primary">RÉNOVATION</span>
            </p>
          </div>
          <p className="text-sm leading-relaxed text-white/70">
            Couvreur et zingueur qualifié à Villemandeur (45700) : démoussage, zinguerie, recherche
            de fuite et rénovation de toiture dans toute l&apos;agglomération Montargoise.
          </p>
        </div>

        <nav aria-label="Nos prestations">
          <p className="mb-4 font-heading text-sm font-bold tracking-wide uppercase">
            Nos prestations
          </p>
          <ul className="space-y-2.5 text-sm">
            {prestations.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/${p.slug}`}
                  className="text-white/70 transition-colors hover:text-primary"
                >
                  {p.nav}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Liens rapides">
          <p className="mb-4 font-heading text-sm font-bold tracking-wide uppercase">
            Liens rapides
          </p>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/70 transition-colors hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-4 font-heading text-sm font-bold tracking-wide uppercase">Contact</p>
          <ul className="space-y-3 text-sm text-white/70">
            <li>
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-2.5 transition-colors hover:text-primary"
              >
                <Phone className="size-4 shrink-0 text-primary" aria-hidden />
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 transition-colors hover:text-primary"
              >
                <Mail className="size-4 shrink-0 text-primary" aria-hidden />
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
              <span>
                Intervient à Villemandeur, Montargis, Amilly, Chalette-sur-Loing et dans toute
                l&apos;agglomération Montargoise
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-white/60 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {year} {siteConfig.name}. Tous droits réservés
          </p>
          <p className="flex gap-4">
            <Link href="/mentions-legales" className="transition-colors hover:text-primary">
              Mentions légales
            </Link>
            <Link href="/politique-de-confidentialite" className="transition-colors hover:text-primary">
              Politique de confidentialité
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
