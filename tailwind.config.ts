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
        sans: ["var(--font-outfit)", "sans-serif"],
        display: ["var(--font-instrument)", "serif"],
      },
      colors: {
        primary: {
          dark: "#0c0b09",
          light: "#171512",
        },
        accent: {
          primary: {
            DEFAULT: "#c6a57a",
            light: "#e4d2b4",
            dark: "#8f7350",
          },
          secondary: {
            DEFAULT: "#a89880",
            light: "#d9cbb8",
            dark: "#7a6b58",
          },
          warm: {
            DEFAULT: "#c6a57a",
            light: "#e4d2b4",
            dark: "#8f7350",
          },
        },
        text: {
          primary: "#f6f1e8",
          secondary: "#b7b0a4",
          muted: "#7c756b",
        },
        border: {
          subtle: "rgba(246, 241, 232, 0.12)",
          accent: "rgba(198, 165, 122, 0.45)",
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #e4d2b4, #c6a57a)",
        "gradient-glow": "linear-gradient(135deg, rgba(198, 165, 122, 0.16), rgba(228, 210, 180, 0.05))",
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
