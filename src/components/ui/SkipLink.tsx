/** Lien d'évitement clavier — premier élément focusable de chaque page. */
export function SkipLink() {
  return (
    <a
      href="#contenu"
      className="sr-only rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100]"
    >
      Aller au contenu principal
    </a>
  );
}
