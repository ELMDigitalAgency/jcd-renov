import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import Link from "next/link";

import { siteConfig } from "@/site.config";

/**
 * Barre d'action fixe en bas d'écran sur mobile, présente sur TOUT le site :
 * un appel ou une demande de devis reste toujours à un pouce du visiteur.
 * C'est le premier levier de conversion d'un artisan local (click-to-call).
 */
export function MobileCallBar() {
  return (
    <>
      {/* Cale : évite que la barre fixe masque le bas du footer */}
      <div aria-hidden className="h-16 lg:hidden" />
      <div className="fixed inset-x-0 bottom-0 z-[80] border-t border-navy/10 bg-white/95 backdrop-blur lg:hidden">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-2 p-2.5">
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-ink px-4 py-3 text-sm font-bold text-white"
          >
            <PhoneRoundedIcon fontSize="inherit" className="text-base" aria-hidden />
            Appeler
          </a>
          <Link
            href="/devis-gratuit"
            className="inline-flex items-center justify-center rounded-full bg-navy px-4 py-3 text-sm font-bold text-white"
          >
            Devis gratuit
          </Link>
        </div>
      </div>
    </>
  );
}
