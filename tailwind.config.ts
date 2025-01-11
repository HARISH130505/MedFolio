import { Comfortaa } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkPurple: 'rgb(33,19,55)',
        magenta: 'rgba(120,9,121,1)',
        cyan: 'rgba(0,212,255,1)',
      },
      fontFamily:{
        poppins:['Poppins'],
        comforta:['Comfortaa']
      }
    },
  },
  plugins: [],
} satisfies Config;
