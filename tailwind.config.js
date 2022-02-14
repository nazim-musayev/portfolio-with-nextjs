module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        "sm": "478px",
      },
      colors: {
        light: "rgb(16,16,16)",
        primary: "rgb(255,118,82)"
      },
    },
  },
  plugins: [],
};

//"rgb(255,118,82)"
