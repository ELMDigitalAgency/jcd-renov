import { cn } from "@/lib/utils";

type BrandBadgeProps = {
  className?: string;
  /** Décoratif par défaut (aria-hidden) ; passe un title pour le rendre signifiant. */
  title?: string;
};

/** Couleurs du logo officiel JCD Rénovation (badge fourni par le client). */
const COCOA = "#45231A";
const ORANGE = "#D8703C";

/**
 * Logo officiel JCD Rénovation recréé en SVG vectoriel : badge circulaire,
 * « JCD RENOVATION » courbé en haut (brun), emblème compas + marteaux +
 * truelle (orange), « COUVERTURE ZINGUERIE » courbé en bas. Net à toutes les
 * tailles, aucun asset binaire.
 */
export function BrandBadge({ className, title }: BrandBadgeProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      className={cn("select-none", className)}
    >
      {title ? <title>{title}</title> : null}

      {/* Cercle du badge */}
      <circle cx="100" cy="100" r="97" fill="#FFFFFF" />
      <circle cx="100" cy="100" r="96" fill="none" stroke={COCOA} strokeWidth="1.6" />

      {/* Chemins des textes courbés */}
      <defs>
        <path id="badge-arc-top" d="M 26 100 A 74 74 0 0 1 174 100" fill="none" />
        <path id="badge-arc-bottom" d="M 22 100 A 78 78 0 0 0 178 100" fill="none" />
      </defs>

      {/* JCD RENOVATION (haut, brun) */}
      <text
        fill={COCOA}
        fontFamily="var(--font-jakarta), ui-sans-serif, sans-serif"
        fontWeight="800"
        fontSize="23"
        letterSpacing="1.5"
      >
        <textPath href="#badge-arc-top" startOffset="50%" textAnchor="middle">
          JCD RENOVATION
        </textPath>
      </text>

      {/* COUVERTURE ZINGUERIE (bas, orange) */}
      <text
        fill={ORANGE}
        fontFamily="var(--font-jakarta), ui-sans-serif, sans-serif"
        fontWeight="700"
        fontSize="17"
        letterSpacing="1.2"
      >
        <textPath href="#badge-arc-bottom" startOffset="50%" textAnchor="middle">
          COUVERTURE ZINGUERIE
        </textPath>
      </text>

      {/* Astérisques latéraux */}
      <text x="34" y="112" fill={COCOA} fontSize="15" fontWeight="700">
        ✳
      </text>
      <text x="152" y="112" fill={COCOA} fontSize="15" fontWeight="700">
        ✳
      </text>

      {/* Emblème central (orange) : filets de vitesse, marteaux croisés,
          compas ouvert, truelle pointe en bas */}
      <g stroke={ORANGE} strokeWidth="3.4" strokeLinecap="round">
        {/* Filets horizontaux gauche/droite */}
        <path d="M 30 96 H 64" />
        <path d="M 36 104 H 66" />
        <path d="M 44 112 H 70" />
        <path d="M 136 96 H 170" />
        <path d="M 134 104 H 164" />
        <path d="M 130 112 H 156" />
      </g>

      {/* Marteaux croisés */}
      <g stroke={ORANGE} strokeWidth="5" strokeLinecap="round">
        <path d="M 76 84 L 118 122" />
        <path d="M 124 84 L 82 122" />
      </g>
      <g fill={ORANGE}>
        <rect x="66" y="76" width="20" height="11" rx="2.5" transform="rotate(42 76 82)" />
        <rect x="114" y="76" width="20" height="11" rx="2.5" transform="rotate(-42 124 82)" />
      </g>

      {/* Compas ouvert */}
      <g stroke={ORANGE} strokeLinecap="round">
        <path d="M 100 66 L 79 120" strokeWidth="5.5" />
        <path d="M 100 66 L 121 120" strokeWidth="5.5" />
      </g>
      <circle cx="100" cy="62" r="6" fill={ORANGE} />
      <rect x="97.5" y="50" width="5" height="9" rx="2" fill={ORANGE} />

      {/* Truelle entre les branches */}
      <path d="M 100 134 L 88 112 L 100 96 L 112 112 Z" fill={ORANGE} />
      <rect x="97" y="88" width="6" height="9" rx="2.5" fill={ORANGE} />
    </svg>
  );
}
