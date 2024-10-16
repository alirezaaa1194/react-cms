const { nextui } = require("@nextui-org/theme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        primaryShadow: "0px 0px 6px rgba(0,0,0,.2)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
