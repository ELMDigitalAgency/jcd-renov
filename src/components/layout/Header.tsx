"use client";

import { ChevronDown, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[4.5rem] lg:px-8">
        {/* Logo typographique bicolore (maquette BuildSafe) */}
        <Link href="/" className="font-heading text-lg font-extrabold tracking-tight lg:text-xl" aria-label="JCD Rénovation — accueil">
          <span className="text-navy">JCD</span> <span className="text-primary">RÉNOVATION</span>
        </Link>

        {/* Navigation desktop */}
        <nav aria-label="Navigation principale" className="hidden items-center gap-6 lg:flex">
          <Link
            href="/"
            className={cn(
              "text-sm font-semibold transition-colors hover:text-primary",
              pathname === "/" ? "text-primary" : "text-navy",
            )}
          >
            Accueil
          </Link>

          {/* Dropdown prestations (hover + focus clavier) */}
          <div className="group relative">
            <button
              type="button"
              className={cn(
                "flex items-center gap-1 text-sm font-semibold transition-colors group-hover:text-primary",
                prestations.some((p) => pathname === `/${p.slug}`) ? "text-primary" : "text-navy",
              )}
              aria-haspopup="true"
            >
              Nos prestations
              <ChevronDown className="size-4 transition-transform group-hover:rotate-180" aria-hidden />
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
                "text-sm font-semibold transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-navy",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-primary"
          >
            <Phone className="size-4 text-primary" aria-hidden />
            {siteConfig.phone}
          </a>
          <Link
            href="/devis-gratuit"
            className="rounded-full bg-navy px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary"
          >
            Devis Gratuit
          </Link>
        </div>

        {/* Burger mobile */}
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full text-navy lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="menu-mobile"
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
        </button>
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
            <ChevronDown
              className={cn("size-4 transition-transform", mobilePrestationsOpen && "rotate-180")}
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
              <Phone className="size-4 text-primary" aria-hidden />
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
