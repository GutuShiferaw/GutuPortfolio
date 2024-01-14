/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mygrey: "rgb(137, 145, 167)",
        mygray: "rgb(69, 73, 84)",
        mylime: "rgb(0,214,70)",
        DimGrey: "#232b2b",
      },
      boxShadow: {
        shd: "0 4px 27px 0 rgba(45, 45, 45, 0.15)",
      },
    },
  },
  plugins: [],
};
