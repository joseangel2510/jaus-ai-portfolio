import { ImageResponse } from "next/og";

export const alt = "ULÍA — AI Systems Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(circle at 20% 0%, rgba(0,229,195,0.25), transparent 50%), #050608",
          color: "#F5F7FA",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "monospace",
            fontSize: 18,
            letterSpacing: 4,
            color: "#A8B2C1",
            textTransform: "uppercase",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ color: "#00E5C3" }}>[</span>
            <span style={{ color: "#F5F7FA" }}>ULÍA</span>
            <span style={{ color: "#00E5C3" }}>]</span>
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 999,
                background: "#00E5C3",
                boxShadow: "0 0 12px rgba(0,229,195,0.9)",
              }}
            />
            ai engineer · monterrey, mx
          </span>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span
            style={{
              fontFamily: "monospace",
              color: "#00A88F",
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            // Sistemas de IA en producción
          </span>
          <span
            style={{
              fontSize: 110,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: -4,
              color: "#F5F7FA",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Mientras lees esto,</span>
            <span>
              mis{" "}
              <span
                style={{
                  color: "#00E5C3",
                  textShadow: "0 0 40px rgba(0,229,195,0.5)",
                }}
              >
                agentes
              </span>{" "}
              están
            </span>
            <span>cerrando citas.</span>
          </span>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "monospace",
            fontSize: 18,
            color: "#6B7689",
            textTransform: "uppercase",
            letterSpacing: 3,
            borderTop: "1px solid #1A1F28",
            paddingTop: 32,
          }}
        >
          <span>ulia.agency</span>
          <span>// agents · voice · ops</span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
