import { ImageResponse } from "next/og";

export const alt = "You-Ran Nai · Senior Software Engineer";
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
          justifyContent: "center",
          padding: "0 96px",
          background: "#ffffff",
          color: "#18181b",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 6,
            color: "#a1a1aa",
            textTransform: "uppercase",
          }}
        >
          Senior Software Engineer
        </div>
        <div style={{ fontSize: 96, fontWeight: 700, marginTop: 16 }}>
          You-Ran Nai
        </div>
        <div
          style={{
            fontSize: 34,
            color: "#52525b",
            marginTop: 28,
            lineHeight: 1.4,
            maxWidth: 960,
          }}
        >
          Web platforms, C++ systems, and developer tools. 6+ years; 1.4M+
          VSCode extension installs.
        </div>
        <div style={{ fontSize: 28, color: "#71717a", marginTop: 40 }}>
          TypeScript · C++ · Python · NestJS · AWS
        </div>
      </div>
    ),
    size,
  );
}
