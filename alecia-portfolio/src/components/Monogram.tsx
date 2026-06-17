"use client";

import { useTheme } from "next-themes";

export function Monogram() {
  const { theme } = useTheme();

  return (
    <svg
      width="100%"
      viewBox="230 50 220 220"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title style={{ fill: "currentColor" }}>
        AO Monogram — Alecia Ortiz
      </title>
      <desc style={{ fill: "currentColor" }}>
        Elegant italic AO monogram centered in a double-bordered square
      </desc>
      <defs></defs>

      {/* Outer border */}
      <rect
        x="240"
        y="60"
        width="200"
        height="200"
        rx="0"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      {/* Inner border */}
      <rect
        x="248"
        y="68"
        width="184"
        height="184"
        rx="0"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.4"
      />

      {/* Monogram */}
      <text
        x="340"
        y="195"
        textAnchor="middle"
        style={{
          fill: "currentColor",
          stroke: "none",
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontSize: "110px",
          fontWeight: 300,
          fontStyle: "italic",
          textAnchor: "middle",
          dominantBaseline: "auto",
        }}
      >
        AO
      </text>
    </svg>
  );
}
