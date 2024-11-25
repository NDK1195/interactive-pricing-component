/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        box: "0px 20px 30px -5px rgba(127, 137, 185, 0.15)",
        slider: "0px 15px 30px 0px rgba(0, 255, 231, 0.60)",
      },
      colors: {
        "soft-cyan": "hsl(174, 77%, 80%)",
        "strong-cyan": "hsl(174, 86%, 45%)",
        "light-grayish-red": "hsl(14, 92%, 95%)",
        "light-red": "hsl(15, 100%, 70%)",
        "pale-blue": "hsl(226, 100%, 87%)",
        "very-pale-blue": "hsl(230, 100%, 99%)",
        "light-grayish-blue-slider": "hsl(224, 65%, 95%)",
        "light-grayish-blue-toggle": "hsl(223, 50%, 87%)",
        "grayish-blue": "hsl(225, 20%, 60%)",
        "dark-desaturated-blue": "hsl(227, 35%, 25%)",
      },
    },
  },
  plugins: [],
};
