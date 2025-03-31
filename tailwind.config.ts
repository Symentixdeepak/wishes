import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
      colors: {
        primary: {
          DEFAULT: "#25D366", // WhatsApp Green
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "rgba(37, 211, 102, 0.2)", // Light Transparent Green
          foreground: "#0b592a",
        },
        background: {
          DEFAULT: "#F0F2F5", // WhatsApp-like light background
          dark: "#0b141a", // Dark mode background
        },
        border: {
          DEFAULT: "#D1D7DB", // Light gray border
        },
      },
    },
    
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
