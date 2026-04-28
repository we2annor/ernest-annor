import { ImageResponse } from "next/og";
export const size = {
  width: 32,
  height: 32,
};

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: 32,
        height: 32,
        background: "#020d12",
        borderRadius: 6,
        display: "flex",
        alignItems: "cener",
        justifyContent: "center",
        border: "1.5px solid #00E5B0",
      }}
    >
      <span
        style={{
          color: "#00E5B0",
          fontSize: 14,
          fontWeight: 800,
          letterSpacing: -0.5,
          fontFamily: "sans-serif",
        }}
      >
        EA
      </span>
    </div>,
    { ...size }
  );
}
