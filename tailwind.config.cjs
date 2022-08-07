/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      polarnight100: "#1e2430",
      polarnight80: "#161b27",
      polarnight60: "#2e3440",
      polarnight40: "#4c566a",
      snowstorm100: "#d8dee9",
      snowstorm80: "#e5e9f0",
      snowstorm60: "#eceff4",
      frost100: "#5e81ac",
      frost80: "#91a1b1",
      frost60: "#88c0d0",
    },
  },
  plugins: [],
};
