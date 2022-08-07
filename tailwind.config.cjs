/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      "polar-night-100": "#2e3440",
      "polar-night-80": "#3b4252",
      "polar-night-60": "#434c5e",
      "polar-night-40": "#4c566a",
      "snowstorm-100": "#d8dee9",
      "snowstorm-80": "#e5e9f0",
      "snowstorm-60": "#eceff4",
    },
  },
  plugins: [],
};
