/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-inset": "1px -5px 35px 16px rgba(24,16,58,0.75) inset",
      },
    },
  },
  plugins: [],
};
