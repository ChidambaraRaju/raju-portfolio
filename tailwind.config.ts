import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#0a0a0f",
          light: "#1a1a2e",
        },
        accent: {
          purple: {
            DEFAULT: "#8b5cf6",
            light: "#a78bfa",
            dark: "#7c3aed",
          },
          blue: {
            DEFAULT: "#3b82f6",
            light: "#60a5fa",
          },
          teal: {
            DEFAULT: "#14b8a6",
          },
        },
        text: {
          primary: "#f8fafc",
          secondary: "#94a3b8",
          muted: "#64748b",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.1)",
          accent: "rgba(139, 92, 246, 0.5)",
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #8b5cf6, #3b82f6)",
        "gradient-glow": "linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.3))",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
