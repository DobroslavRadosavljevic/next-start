import { ImageResponse } from "next/og";

import { SITE_NAME, SITE_TAGLINE } from "@/constants/metadata";

export const alt = `${SITE_NAME} - ${SITE_TAGLINE}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 48,
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
      }}
    >
      <span style={{ fontWeight: "bold", color: "#000" }}>{SITE_NAME}</span>
      <span style={{ fontSize: 24, color: "#666" }}>{SITE_TAGLINE}</span>
    </div>,
    { ...size }
  );
}
