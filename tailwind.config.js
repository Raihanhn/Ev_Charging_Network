module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: { 700: "#4d5055", 900: "#2d3036" },
        black: { 900: "#01020d", "900_01": "#000000" },
        gray: { 200: "#efefef", 300: "#e6e6e8", 600: "#767676", 900: "#191919" },
        white: { A700: "#ffffff" },
        blue: { 700: "#115adf", 900: "#112bcc" },
        teal: { A700: "#19d0a5" },
      },
      boxShadow: {},
      fontFamily: { roboto: "Roboto" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
