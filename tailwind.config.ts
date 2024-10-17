import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        rolexSky: "#C3EBFA",
        rolexSkyLight: "#EDF9FD",
        rolexPurple: "#CFCEFF",
        rolexPurpleLight: "#F1F0FF",
        rolexYellow: "#FAE27C",
        rolexYellowLight: "#FEFCE8",
      },
    },
  },
  plugins: [],
};
export default config;
