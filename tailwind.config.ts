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
        Issues: '#09090b',
        Navbar:'#09090b',
        Details: '#09090b',
        Card: '#09090b',
        CardHover: '#27272a',
        DetailSection: '#bebbbb',
        borderColor: '151518'
      },
    },
  },
  plugins: [],
};
export default config;
