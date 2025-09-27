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
        xs: "300px",   // extra small
        sm: "768px",   // small
        md: "1200px",   // medium
        lg: "1500px",  // large
        xl: "2000px",  // extra large
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
