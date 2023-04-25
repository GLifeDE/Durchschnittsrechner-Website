/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
      colors: {
        "gradiant-cyan": "#8ce8e0",
        "gradiant-purple": "#a77bf3",
      },
    },
  },
  plugins: [],
};
