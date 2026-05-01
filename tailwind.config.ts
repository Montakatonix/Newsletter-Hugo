import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        marfil: "#F3EFE6",
        "marfil-dark": "#EAE4D8",
        carbon: "#2C2926",
        "carbon-light": "#4A433D",
        musgo: "#4F5B4A",
        "musgo-light": "#6B7966",
        terracota: "#B06E4F",
        petroleo: "#24383B",
      },
    },
  },
  plugins: [],
};
export default config;