/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Include all paths that may contain class names (app/, app-example/, components/, etc.).
  // Adjust these globs if you add other folders that contain Tailwind/nativewind classes.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./app-example/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./assets/**/*.{svg,png,jpg,jpeg}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}

