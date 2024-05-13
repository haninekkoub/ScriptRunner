import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        neueMontreal: ["var(--neueMontreal)"],
        inter: ["var(--inter)"],
      },
      colors: {
        primary: "#FF6200",
        primaryHovred: "#FF8133",
      },
      letterSpacing: {
        base: "-.015rem",
      },
      keyframes: {
        fadeDown: {
          "0%": { transform: "translateY(-200%) translateX(-50%)" },
          "100%": { transform: "translateY(0%) translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
