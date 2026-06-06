import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Vibrant coral-orange — main brand color
        primary: {
          50:  "#fff4f0",
          100: "#ffe4d9",
          200: "#ffc5ad",
          300: "#ff9e7a",
          400: "#ff7043",
          500: "#ff5722",
          600: "#e64a19",
          700: "#bf360c",
          800: "#922b10",
          900: "#6d200d",
        },
        // Warm amber-yellow — secondary accent
        accent: {
          50:  "#fffbea",
          100: "#fff3c4",
          200: "#fce588",
          300: "#f9cf4a",
          400: "#f7bc16",
          500: "#f5a800",
          600: "#d98c00",
          700: "#b36e00",
          800: "#8c5400",
          900: "#663d00",
        },
        // Deep navy for dark mode surfaces
        surface: {
          900: "#0f0f13",
          800: "#18181f",
          700: "#22222c",
          600: "#2d2d3a",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in":  "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "float":    "float 3s ease-in-out infinite",
        "glow":     "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%":   { transform: "translateY(24px)", opacity: "0" },
          "100%": { transform: "translateY(0)",    opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-8px)" },
        },
        glow: {
          "0%":   { boxShadow: "0 0 20px rgba(255, 87, 34, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(255, 87, 34, 0.6)" },
        },
      },
      backgroundImage: {
        "gradient-radial":  "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-light": "linear-gradient(135deg, #fff4f0 0%, #ffffff 50%, #fffbea 100%)",
        "hero-dark":  "linear-gradient(135deg, #0f0f13 0%, #18181f 50%, #0f0f13 100%)",
      },
      boxShadow: {
        "glow-sm":  "0 0 15px rgba(255, 87, 34, 0.25)",
        "glow-md":  "0 0 30px rgba(255, 87, 34, 0.3)",
        "glow-lg":  "0 0 50px rgba(255, 87, 34, 0.35)",
        "card":     "0 4px 24px rgba(0, 0, 0, 0.06)",
        "card-dark":"0 4px 24px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
