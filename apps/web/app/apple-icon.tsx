import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: 180,
        height: 180,
        background: "#020d12",
        borderRadius: 32,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "6px solid #00E5B0",
      }}
    >
      <span
        style={{
          color: "#00E5B0",
          fontSize: 72,
          fontWeight: 800,
          letterSpacing: -2,
          fontFamily: "sans-serif",
        }}
      >
        EA
      </span>
    </div>,
    { ...size }
  );
}
