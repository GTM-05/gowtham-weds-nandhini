import { ImageResponse } from "next/og";

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
          background: "#14080C",
          color: "#F7F1E8",
          fontFamily: "Georgia, serif",
          fontSize: 42,
        }}
      >
        <div
          style={{
            width: 132,
            height: 132,
            borderRadius: 999,
            border: "2px solid #C6A56A",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          G · N
        </div>
      </div>
    ),
    { ...size },
  );
}
