import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette inspired by the Pulgarcito logo
        burgundy: {
          DEFAULT: "#7B1E22", // deep wine red
          dark: "#5A1316",
          light: "#9B2A2E",
        },
        ember: {
          DEFAULT: "#E1502A", // warm orange-red (logo script accent)
          light: "#F2703F",
          dark: "#C23D1C",
        },
        cream: {
          DEFAULT: "#FBF4E9", // warm off-white / handmade paper
          dark: "#F3E7D3",
        },
        charcoal: {
          DEFAULT: "#2A2422",
          light: "#4A413D",
        },
        // Gold/amber accent — stars, seals, eyebrow dots, decorative
        gold: {
          DEFAULT: "#D4A853",
          light: "#E8C27A",
          dark: "#B8892F",
        },
        // Small Salvadoran blue/white accents
        salva: {
          blue: "#0F47AF",
          sky: "#3B82C4",
        },
      },
      fontFamily: {
        // Wired up in app/layout.tsx via next/font CSS variables
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        warm: "0 20px 45px -15px rgba(123, 30, 34, 0.35)",
        "warm-sm": "0 10px 25px -12px rgba(123, 30, 34, 0.3)",
      },
      backgroundImage: {
        "warm-gradient":
          "linear-gradient(135deg, #7B1E22 0%, #C23D1C 55%, #E1502A 100%)",
        "ember-gradient": "linear-gradient(135deg, #E1502A 0%, #C23D1C 100%)",
      },
      keyframes: {
        steam: {
          "0%": { opacity: "0", transform: "translateY(0) scaleX(1)" },
          "15%": { opacity: "0.6" },
          "50%": { opacity: "0.25", transform: "translateY(-14px) scaleX(1.4)" },
          "95%": { opacity: "0", transform: "translateY(-26px) scaleX(0.8)" },
          "100%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(212,168,83,0)" },
          "50%": { boxShadow: "0 0 20px 6px rgba(212,168,83,0.35)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        steam: "steam 3s ease-in-out infinite",
        "steam-delayed": "steam 3s ease-in-out 1.5s infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
