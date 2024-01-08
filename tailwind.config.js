/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        // You can also add custom sizes
        huge: "5rem", // 80px
      },
    },
  },
  plugins: [],
};
