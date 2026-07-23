"use client";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { BrandLogo } from "@/components/ui/BrandLogo";
import { prestations } from "@/content/prestations";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/site.config";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Zone d'intervention", href: "/zone-intervention" },
  { label: "Avis clients", href: "/avis-clients" },
  { label: "Blog", href: "/blog" },
] as const;

/**
 * Header sticky fond blanc (cahier §4.1) : logo bicolore, menu avec
 * dropdown « Nos prestations », CTA pill « Devis Gratuit ».
 */
export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobilePrestationsOpen, setMobilePrestationsOpen] = useState(false);
  const pathname = usePathname();

  // Referme le menu mobile à chaque navigation.
  useEffect(() => {
    setMobileOpen(false);
    setMobilePrestationsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/5 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl flex-nowrap items-center justify-between gap-3 px-4 sm:px-6 lg:h-[4.5rem] lg:px-6 xl:px-8">
        {/* Logo officiel seul (demande client : pas de texte dans la navbar) */}
        <Link href="/" className="shrink-0" aria-label="JCD Rénovation, accueil">
          <BrandLogo size={52} priority className="size-11 lg:size-13" />
        </Link>

        {/* Navigation desktop : une seule ligne, jamais de retour */}
        <nav
          aria-label="Navigation principale"
          className="hidden flex-nowrap items-center gap-x-4 lg:flex xl:gap-x-6"
        >
          <Link
            href="/"
            className={cn(
              "text-sm font-semibold whitespace-nowrap transition-colors hover:text-primary",
              pathname === "/" ? "text-primary-ink" : "text-navy",
            )}
          >
            Accueil
          </Link>

          {/* Dropdown prestations (hover + focus clavier) */}
          <div className="group relative">
            <button
              type="button"
              className={cn(
                "flex items-center gap-1 text-sm font-semibold whitespace-nowrap transition-colors group-hover:text-primary",
                prestations.some((p) => pathname === `/${p.slug}`) ? "text-primary-ink" : "text-navy",
              )}
              aria-haspopup="true"
            >
              Nos prestations
              <ExpandMoreRoundedIcon fontSize="inherit" className="text-base transition-transform group-hover:rotate-180" aria-hidden />
            </button>
            <div className="invisible absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 transition-all group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              <ul className="rounded-card shadow-card w-64 border border-navy/5 bg-white p-2">
                {prestations.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/${p.slug}`}
                      className="block rounded-2xl px-4 py-3 text-sm font-medium text-navy transition-colors hover:bg-cream hover:text-primary"
                    >
                      {p.nav}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-semibold whitespace-nowrap transition-colors hover:text-primary",
                pathname === link.href ? "text-primary-ink" : "text-navy",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 flex-nowrap items-center gap-4 lg:flex">
          {/* Le numéro n'apparaît qu'en xl : garantit la nav sur UNE ligne en lg */}
          <a
            href={siteConfig.phoneHref}
            className="hidden items-center gap-2 text-sm font-semibold whitespace-nowrap text-navy transition-colors hover:text-primary xl:flex"
          >
            <PhoneRoundedIcon fontSize="inherit" className="text-base text-primary" aria-hidden />
            {siteConfig.phone}
          </a>
          <Link
            href="/devis-gratuit"
            className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-white transition-colors hover:bg-primary xl:px-6"
          >
            Devis Gratuit
          </Link>
        </div>

        {/* Mobile : appel direct + burger */}
        <div className="flex items-center gap-1 lg:hidden">
          <a
            href={siteConfig.phoneHref}
            aria-label={`Appeler JCD Rénovation au ${siteConfig.phone}`}
            className="inline-flex size-10 items-center justify-center rounded-full bg-primary-ink text-white"
          >
            <PhoneRoundedIcon fontSize="inherit" className="text-[20px]" aria-hidden />
          </a>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full text-navy"
            aria-expanded={mobileOpen}
            aria-controls="menu-mobile"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? (
              <CloseRoundedIcon fontSize="inherit" className="text-2xl" aria-hidden />
            ) : (
              <MenuRoundedIcon fontSize="inherit" className="text-2xl" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {/* Panneau mobile */}
      <div
        id="menu-mobile"
        hidden={!mobileOpen}
        className="border-t border-navy/5 bg-white lg:hidden"
      >
        <nav aria-label="Navigation mobile" className="space-y-1 px-4 py-4">
          <Link href="/" className="block rounded-2xl px-4 py-3 font-semibold text-navy hover:bg-cream">
            Accueil
          </Link>
          <button
            type="button"
            aria-expanded={mobilePrestationsOpen}
            onClick={() => setMobilePrestationsOpen((open) => !open)}
            className="flex w-full items-center justify-between rounded-2xl px-4 py-3 font-semibold text-navy hover:bg-cream"
          >
            Nos prestations
            <ExpandMoreRoundedIcon
              fontSize="inherit"
              className={cn("text-base transition-transform", mobilePrestationsOpen && "rotate-180")}
              aria-hidden
            />
          </button>
          {mobilePrestationsOpen ? (
            <ul className="space-y-1 pl-4">
              {prestations.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/${p.slug}`}
                    className="block rounded-2xl px-4 py-2.5 text-sm font-medium text-navy hover:bg-cream"
                  >
                    {p.nav}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-2xl px-4 py-3 font-semibold text-navy hover:bg-cream"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-3">
            <a
              href={siteConfig.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full border border-navy/10 px-6 py-3 font-semibold text-navy"
            >
              <PhoneRoundedIcon fontSize="inherit" className="text-base text-primary" aria-hidden />
              {siteConfig.phone}
            </a>
            <Link
              href="/devis-gratuit"
              className="rounded-full bg-navy px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-primary"
            >
              Devis Gratuit
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
