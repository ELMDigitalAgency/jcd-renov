import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import { ConsentBanner } from "@/components/consent/ConsentBanner";
import { GoogleAnalytics } from "@/components/consent/GoogleAnalytics";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { JsonLd } from "@/components/ui/JsonLd";
import { SkipLink } from "@/components/ui/SkipLink";
import { roofingContractorSchema } from "@/lib/schema";
import { siteConfig } from "@/site.config";

import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `Couvreur Zingueur à Villemandeur (45700) | ${siteConfig.name}`,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${jakarta.variable} ${inter.variable}`}>
      <body>
        {/* Schéma LocalBusiness/RoofingContractor sitewide, NAP unique (site.config) */}
        <JsonLd data={roofingContractorSchema()} />
        <SkipLink />
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        {/* Mobile : appel ou devis toujours à portée de pouce */}
        <MobileCallBar />
        {/* RGPD : rien ne se charge sans NEXT_PUBLIC_GA_ID + consentement */}
        <ConsentBanner />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
