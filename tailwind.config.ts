import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#F7F3EB",
          warm: "#F3ECE1",
          light: "#FAF6EE",
          surface: "#EFE8DC",
          border: "#E2D9CC",
        },
        ink: {
          DEFAULT: "#100C0B",
          rich: "#0A0706",
          body: "#2A2422",
          muted: "#5A504C",
          faint: "#8C807B",
        },
        burgundy: {
          DEFAULT: "#650A14",
          deep: "#52060C",
          dark: "#59070A",
          vibrant: "#750B18",
          glow: "#94101E",
          hover: "#4D070E",
        },
        stone: {
          DEFAULT: "#A89D8F",
          light: "#D5CEC4",
          dark: "#6A6055",
          faint: "#E7E2DA",
        },
        obsidian: {
          DEFAULT: "#060302",
          surface: "#0E0A08",
          card: "#150F0D",
          border: "#2A1E1A",
          muted: "#9E908A",
        },
      },
      fontFamily: {
        serif: [
          "Italiana",
          "Bodoni Moda",
          "Playfair Display",
          "Didot",
          "Cormorant Garamond",
          "Cinzel",
          "serif",
        ],
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        editorial: [
          "Italiana",
          "Bodoni Moda",
          "Playfair Display",
          "Didot",
          "Cinzel",
          "serif",
        ],
      },
      letterSpacing: {
        ultra: "0.28em",
        wide: "0.18em",
      },
      boxShadow: {
        orb: "0 20px 60px -15px rgba(101, 10, 20, 0.4)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
