/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",   // adjust if your files are elsewhere
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
         screens: {
        xs: "400px",   // extra small
        sm: "1200px",   // small
        md: "768px",   // medium
        lg: "1024px",  // large
        xl: "1280px",  // extra large
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
