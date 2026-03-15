import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        teal: {
          deeper: "#052920",
          dark: "#083D31",
          DEFAULT: "#0D5C4A",
          light: "#1A7A62",
        },
        amber: {
          DEFAULT: "#E8A020",
          light: "#F5B942",
          dark: "#B87C10",
        },
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        sans: ["DM Sans", "sans-serif"],
      },
    },
  },
};

export default config;