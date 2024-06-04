import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "landing-page-2": "url('../public/motif_background.png')",
        "degradee-ensemble": "url('../public/degradee ensemble.png')",
        "bckg-btns-ensemble": "url('../public/322x1309.png')",
        enfant_au_dos: "url('../public/enfant_au_dos.jpg')",
        fille_souriante: "url('../public/fille_souriante.jpg')",
      },
      colors: {
        topBarColor: "#05542C",
        navBarColor: "#EDEDCB",
        rejoignezNous: "#DB9833",
        newTopBar: "#EA4335",
        statisticLandingPage: "#F59300",
        backgroundStatistic: "#A8DCB6",
        icons_color: "#F59300",
        vision_color: "#B9DEC3",
        bgcolor_equipe: "#D9D9D9",
        bgcolor_apropos_presentation: "#E8DAA9",
        color_border_stats: "#E89315",
      },
    },
  },
  plugins: [],
};
export default config;
