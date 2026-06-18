import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Speeda — WhatsApp AI for Saudi restaurants";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #006C35 0%, #064e3b 60%, #0a0a0a 100%)",
          padding: "80px",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
              fontWeight: 800,
              color: "#006C35",
            }}
          >
            S
          </div>
          <div style={{ fontSize: "36px", fontWeight: 700, letterSpacing: "-1px" }}>
            Speeda
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 800,
              lineHeight: 1.1,
              maxWidth: "900px",
              letterSpacing: "-2px",
            }}
          >
            موظف واتساب ما ينام،
            <br />
            ما يغلط، وما يطلب راتب.
          </div>

          <div
            style={{
              fontSize: "28px",
              opacity: 0.85,
              maxWidth: "900px",
            }}
          >
            بوت AI يرد على عملاء مطعمك بالعربي السعودي ويربط Foodics — 24/7
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            fontSize: "22px",
            opacity: 0.7,
          }}
        >
          <span>🇸🇦 صنع في السعودية</span>
          <span>·</span>
          <span>🏆 شريك Foodics معتمد</span>
          <span>·</span>
          <span>speeda.sa</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
