import { ImageResponse } from "next/og";
import { company } from "@/config/company";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0B1E3D",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#D4A62A",
            marginBottom: 24,
          }}
        >
          {company.name}
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.15,
          }}
        >
          Vos pièces automobiles, simplement.
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 26,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          Faches-Thumesnil · Lille · Hauts-de-France
        </div>
      </div>
    ),
    { ...size }
  );
}
