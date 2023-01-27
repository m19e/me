module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        latego: ["GenEiLateGo"],
        koburi: ["GenEiKoburiMin"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
