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
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
      },
      colors: {
        primary: {
          dark: "#0a0a0f",
          light: "#12121a",
        },
        accent: {
          primary: {
            DEFAULT: "#10b981",
            light: "#34d399",
            dark: "#059669",
          },
          secondary: {
            DEFAULT: "#06b6d4",
            light: "#22d3ee",
            dark: "#0891b2",
          },
          warm: {
            DEFAULT: "#f59e0b",
            light: "#fbbf24",
            dark: "#d97706",
          },
        },
        text: {
          primary: "#f8fafc",
          secondary: "#94a3b8",
          muted: "#64748b",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          accent: "rgba(16, 185, 129, 0.4)",
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #10b981, #06b6d4)",
        "gradient-glow": "linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(6, 182, 212, 0.15))",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 8s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "dash": "dash 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(1deg)" },
        },
        dash: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
