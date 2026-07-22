import { ImageResponse } from "next/og";

/** Icône Apple touch générée au build — carré marine, monogramme bicolore. */
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#16213E",
          borderRadius: "36px",
          fontSize: "64px",
          fontWeight: 800,
          color: "#FFFFFF",
        }}
      >
        J<span style={{ color: "#F2731E" }}>C</span>D
      </div>
    ),
    size,
  );
}
