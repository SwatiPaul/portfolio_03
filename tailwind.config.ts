import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0e0b0d",
          purple: "#1a1220",
          accent: "#7c6bb8",
          muted: "#cbc1c7",
          surface: "rgba(255,255,255,0.04)",
        },
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-inria)", "var(--font-nunito)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
