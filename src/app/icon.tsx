import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#030303",
          borderRadius: 8,
          fontSize: 13,
          fontWeight: 700,
          color: "#fafafa",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        RV
      </div>
    ),
    { ...size }
  );
}
