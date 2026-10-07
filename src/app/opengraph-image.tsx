import { ImageResponse } from "next/og";
import { wedding } from "@/data/wedding";

export const alt = "Gowtham and Nandhini wedding invitation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function InvitationCard() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(160deg, #2A1018 0%, #14080C 48%, #3A1522 100%)",
        color: "#F7F1E8",
        fontFamily: "Georgia, serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "1040px",
          height: "500px",
          border: "1px solid #C6A56A",
        }}
      >
        <div style={{ display: "flex", letterSpacing: "0.42em", fontSize: 20, color: "#E8D5A8" }}>
          TOGETHER WITH THEIR FAMILIES
        </div>
        <div style={{ display: "flex", fontSize: 92, marginTop: 18, fontWeight: 400 }}>
          {wedding.groom.name}
        </div>
        <div style={{ display: "flex", fontSize: 48, color: "#C6A56A", marginTop: 4 }}>&amp;</div>
        <div style={{ display: "flex", fontSize: 92, marginTop: 4 }}>{wedding.bride.name}</div>
        <div
          style={{
            display: "flex",
            marginTop: 22,
            letterSpacing: "0.28em",
            fontSize: 18,
            color: "#E8D5A8",
          }}
        >
          {wedding.hero.dateLabel}  ·  {wedding.hero.locationLabel}
        </div>
      </div>
    </div>
  );
}

export default function OpenGraphImage() {
  return new ImageResponse(<InvitationCard />, { ...size });
}
