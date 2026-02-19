import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // These are declared in globals.css via @theme{} for v4,
      // but kept here too for IDE autocomplete with v3-compatible tooling.
      colors: {
        electric: "#00cfff",
        gold: "#f5a623",
        muted: "#7fb3d3",
        "blue-950": "#020b18",
        "blue-900": "#051628",
        "blue-800": "#0a2540",
        "blue-700": "#0e3761",
        "blue-600": "#1455a0",
        "blue-500": "#1d6fc4",
        "blue-400": "#3b8ee0",
        "blue-300": "#6eb0f0",
        "blue-200": "#a8d0f8",
        "blue-100": "#dceefb",
      },
      fontFamily: {
        display: ["'Barlow Condensed'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
