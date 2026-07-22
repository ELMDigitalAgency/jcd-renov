import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

/**
 * Template partagé des images OpenGraph (1200×630), généré au build par
 * next/og (Satori). Contraintes Satori respectées : police TTF chargée depuis
 * le disque, display:flex explicite sur chaque div multi-enfants.
 */

export const OG_SIZE = { width: 1200, height: 630 };

type OgTemplateProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
};

async function loadFont(): Promise<Buffer> {
  return readFile(join(process.cwd(), "src", "assets", "fonts", "PlusJakartaSans-ExtraBold.ttf"));
}

export async function buildOgImage({ title, subtitle, eyebrow }: OgTemplateProps) {
  const font = await loadFont();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#16213E",
          padding: "64px 72px",
          fontFamily: "Jakarta",
        }}
      >
        {/* Logo typographique */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              display: "flex",
              width: "18px",
              height: "44px",
              backgroundColor: "#F2731E",
              borderRadius: "9px",
            }}
          />
          <div style={{ display: "flex", fontSize: "34px", color: "#FFFFFF" }}>JCD</div>
          <div style={{ display: "flex", fontSize: "34px", color: "#F2731E" }}>RÉNOVATION</div>
        </div>

        {/* Titre */}
        <div style={{ display: "flex", flexDirection: "column", gap: "22px", maxWidth: "1000px" }}>
          {eyebrow ? (
            <div
              style={{
                display: "flex",
                fontSize: "28px",
                color: "#F2731E",
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              {eyebrow}
            </div>
          ) : null}
          <div
            style={{
              display: "flex",
              fontSize: title.length > 45 ? "58px" : "68px",
              lineHeight: 1.12,
              color: "#FFFFFF",
            }}
          >
            {title}
          </div>
          {subtitle ? (
            <div style={{ display: "flex", fontSize: "30px", color: "#C7CBD8" }}>{subtitle}</div>
          ) : null}
        </div>

        {/* Pied : domaine + bandeau orange */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", fontSize: "26px", color: "#C7CBD8" }}>
            www.jcd-renovation.fr
          </div>
          <div
            style={{
              display: "flex",
              backgroundColor: "#F2731E",
              color: "#FFFFFF",
              fontSize: "26px",
              padding: "14px 32px",
              borderRadius: "999px",
            }}
          >
            Devis gratuit : 07 49 10 06 56
          </div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [{ name: "Jakarta", data: font, weight: 800, style: "normal" }],
    },
  );
}
