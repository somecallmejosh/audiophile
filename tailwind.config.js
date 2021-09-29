module.exports = {
  mode: "jit",
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "ap-orange-200": "#D87D4A",
        "ap-orange-100": "#fbaf85",
        "ap-black-900": "#101010",
        "ap-black-800": "#191919",
        "ap-black-700": "#979797",
        "ap-gray-100": "#FAFAFA",
        "ap-gray-200": "#F1F1F1"
      },
      maxWidth: {
        reset: "none"
      },
      letterSpacing: {
        extreme: ".75rem;"
      },
      translate: {
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%"
      }
    },
    fontFamily: {
      sans: ["Manrope", "ui-sans-serif", "sans-serif", "system-ui"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Manrope", "ui-sans-serif", "sans-serif", "system-ui"],
      body: ["Manrope", "ui-sans-serif", "sans-serif", "system-ui"]
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/forms")]
};
