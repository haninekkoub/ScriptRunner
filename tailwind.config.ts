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
        thunder: ["var(--neueMontreal)"],
        inter: ["var(--inter)"],
      },
      colors: {
        primary: "#FF6200",
      },
    },
  },
  plugins: [],
};
export default config;
