import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        neueMontreal: ["var(--neueMontreal)"],
        inter: ["var(--inter)"],
      },
      colors: {
        primary: "#FF6200",
        primaryHovred: "#FF8133",
        card: "#f5f5f5",
      },
      letterSpacing: {
        base: "-.015rem",
      },
      dropShadow: {
        cta: "0 0 50px rgba(255,98,0,.5)",
        pils: "0 4 10px rgba(0,0,0,.1);",
        card: "0 0 10px  rgba(0,0,0,0.1)",
      },

      keyframes: {
        fadeDown: {
          "0%": { transform: "translateY(-200%) translateX(-50%)" },
          "100%": { transform: "translateY(0%) translateX(-50%)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
