/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#FFFFFF",
          2: "#C5F82A",
          3: "#141414",
        },
        n: {
          1: "#141414",
          2: "#1f1f1f",
          3: "#333333",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}

