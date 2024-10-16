import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)"
      },
      mainColors: {
        bg: "[#ffefd3]",
        primary: "[#22223b]",
        secondary: "[#c9ada7]"
      },
      textColors: { h1: "[#000000]", p: "[#ffffff]" }
    }
  },
  plugins: []
};
export default config;
