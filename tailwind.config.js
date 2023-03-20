/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        chakara: ["Chakra Petch", "sans-serif"],
      },
      colors: {
        "bg-main": "var(--background)",
        "thick-text": "var(--text-thick)",
        "normal-text": "var(--text-normal)",
        dominant: "var(--dominant)",
        sundry: "var(--sundry)",
        "bg-trans": "var(--backgroundlight)",
        backdrop: "var(--backdrop)",
        backdroplight:"var(--backdroplight)",
      },
    },
  },
  plugins: [],
};
