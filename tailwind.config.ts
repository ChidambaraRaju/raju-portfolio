import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-bricolage)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      colors: {
        ink: {
          DEFAULT: "#070912",
          raised: "#0F1320",
          high: "#171C2E",
        },
        fg: {
          DEFAULT: "#ECEEF6",
          muted: "#8B90A6",
          faint: "#5E6379",
        },
        line: {
          DEFAULT: "rgba(236, 238, 246, 0.09)",
          strong: "rgba(236, 238, 246, 0.18)",
        },
        // Sampled from the plasma colormap. violet and pink are the lifted
        // steps that stay legible as text on ink.
        plasma: {
          indigo: "#3B1C8C",
          violet: "#9D7BFF",
          magenta: "#C7307C",
          pink: "#F0609B",
          amber: "#F6A33B",
        },
      },
      backgroundImage: {
        plasma: "linear-gradient(90deg, #3B1C8C, #C7307C 55%, #F6A33B)",
        "plasma-wash":
          "linear-gradient(90deg, rgba(59, 28, 140, 0.38), rgba(199, 48, 124, 0.16) 55%, rgba(246, 163, 59, 0.06))",
      },
      boxShadow: {
        plasma:
          "-10px 0 28px -8px rgba(123, 60, 220, 0.55), 0 0 18px -4px rgba(199, 48, 124, 0.5), 10px 0 28px -8px rgba(246, 163, 59, 0.45)",
        "plasma-lg":
          "-14px 0 36px -6px rgba(123, 60, 220, 0.75), 0 0 24px -2px rgba(199, 48, 124, 0.65), 14px 0 36px -6px rgba(246, 163, 59, 0.65)",
        panel: "0 30px 80px -20px rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: [],
};

export default config;
