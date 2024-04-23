import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Issues: '#5f82ad',
        Details: '#7e9dbc',
        Card: '#C0C5CF',
        DetailSection: '#202d3d',
      },
    },
  },
  plugins: [],
};
export default config;
