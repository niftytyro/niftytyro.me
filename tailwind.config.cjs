/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      polarnight100: "#1e2430",
      polarnight80: "#161b27",
      polarnight60: "#2e3440",
      snowstorm100: "#d8dee9",
      snowstorm80: "#e5e9f0",
      snowstorm60: "#eceff4",
    },
  },
  plugins: [],
};
