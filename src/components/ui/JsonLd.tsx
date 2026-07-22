import type { Thing, WithContext } from "schema-dts";

type JsonLdProps = {
  data: WithContext<Thing>;
};

/** Sérialise un schéma JSON-LD en échappant `<` (anti-injection). */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
