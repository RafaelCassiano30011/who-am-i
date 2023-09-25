/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./**/*.tsx"],
  theme: {
    extend: {
      gridTemplateColumns: {
        default: "repeat(4,1fr)",
      },
      transitionProperty: {
        width: "width",
        height: {},
      },
      transitionDuration: {
        300: "300ms",
      },

      animation: {
        topbar: "topbar 0.3s linear",
        topbarMobile: "topbarMobile 0.3s linear",
        shipping: "shipping 0.3s linear",
      },

      keyframes: {
        topbar: {
          "0%": { display: "initial", height: "0px" },

          "100%": { height: "51px" },
        },

        topbarMobile: {
          "0%": { display: "initial", height: "0px" },

          "100%": { height: "36px" },
        },

        shipping: {
          "0%": { height: "82px" },

          "100%": { height: "100%" },
        },
      },
      colors: {
        "brand-black": "#000000",
        "brand-white": "#ffffff",
        "secondary-grey": "#999999",
        "secondary-grey-2": "#edebee",
        "secondary-grey-3": "#afafaf",
        "secondary-grey-4": "#c6c6c6",
        "secondary-grey-5": "#9A9595",
        "secondary-grey-6": "#A9A9A9",
        "error-danger": "#d43030",
        "error-danger-1": "#DC5959",
        success: "#00AC4E",
      },
      fontSize: {
        "light-12": [
          "0.75rem",
          {
            fontFamily: "Marlin Geo SQ",
            fontWeight: "300",
          },
        ],
        "light-14": [
          "0.875rem",
          {
            fontFamily: "Marlin Geo SQ",
            fontWeight: "300",
          },
        ],
        "light-16": [
          "1rem",
          {
            fontFamily: "Marlin Geo SQ",
            fontWeight: "300",
          },
        ],
        "light-18": [
          "1.125rem",
          {
            fontFamily: "Marlin Geo SQ",
            fontWeight: "300",
          },
        ],
        "light-20": [
          "1.25rem",
          {
            fontFamily: "Marlin Geo SQ",
            fontWeight: "300",
          },
        ],
        "light-24": [
          "1.5rem",
          {
            fontFamily: "Marlin Geo SQ",
            fontWeight: "300",
          },
        ],
        "light-28": [
          "1.75rem",
          {
            fontFamily: "Marlin Geo SQ",
            fontWeight: "300",
          },
        ],
        "light-32": [
          "2rem",
          {
            fontFamily: "Marlin Geo SQ",
            fontWeight: "300",
          },
        ],
        "regular-12": [
          "0.75rem",
          {
            fontFamily: "Marlin Geo SQ",
            fontWeight: "400",
          },
        ],
        "regular-14": [
          "0.875rem",
          {
            fontFamily: "Marlin Geo SQ",
            fontWeight: "400",
          },
        ],
        "regular-16": [
          "1rem",
          {
            fontFamily: "Marlin Geo SQ",
            fontWeight: "400",
          },
        ],
        "regular-18": [
          "1.125rem",
          {
            fontFamily: "Marlin Geo SQ",
            fontWeight: "400",
          },
        ],
        "regular-20": [
          "1.25rem",
          {
            fontFamily: "Marlin Geo SQ",
            fontWeight: "400",
          },
        ],
        "regular-24": [
          "1.5rem",
          {
            fontFamily: "Marlin Geo SQ",
            fontWeight: "400",
          },
        ],
        "regular-28": [
          "1.75rem",
          {
            fontFamily: "Marlin Geo SQ",
            fontWeight: "400",
          },
        ],
        "regular-32": [
          "2rem",
          {
            fontFamily: "Marlin Geo SQ",
            fontWeight: "400",
          },
        ],
        "bold-12": [
          "0.75rem",
          {
            fontFamily: "Marlin Geo SQ",
            fontWeight: "700",
          },
        ],
        "bold-14": [
          "0.875rem",
          {
            fontFamily: "Marlin Geo SQ",
            fontWeight: "700",
          },
        ],
        "bold-16": [
          "1rem",
          {
            fontFamily: "Marlin Geo SQ",
            fontWeight: "700",
          },
        ],
        "bold-18": [
          "1.125rem",
          {
            fontFamily: "Marlin Geo SQ",
            fontWeight: "700",
          },
        ],
        "bold-20": [
          "1.25rem",
          {
            fontFamily: "Marlin Geo SQ",
            fontWeight: "700",
          },
        ],
        "bold-24": [
          "1.5rem",
          {
            fontFamily: "Marlin Geo SQ",
            fontWeight: "700",
          },
        ],
        "bold-28": [
          "1.75rem",
          {
            fontFamily: "Marlin Geo SQ",
            fontWeight: "700",
          },
        ],
        "bold-32": [
          "2rem",
          {
            fontFamily: "Marlin Geo SQ",
            fontWeight: "700",
          },
        ],
        "black-12": [
          "0.75rem",
          {
            fontFamily: "Marlin Geo SQ",
            fontWeight: "900",
          },
        ],
        12: "0.75rem",
        14: "0.875rem",
        16: "1rem",
        18: "1.125rem",
        20: "1.25rem",
        24: "1.5rem",
        28: "1.75rem",
        32: "2rem",
      },
      fontWeight: {
        light: "300",
        regular: "400",
        bold: "700",
        black: "900",
        thin: "100",
      },
      fontFamily: {
        sans: ["Marlin Geo SQ", "sans-serif"],
        marlin: ["Marlin Geo SQ", "sans-serif"],
      },
      boxShadow: {
        "template-shadow":
          "0px 8px 10px 0px rgba(0, 0, 0, 0.2), 0px 6px 30px 0px rgba(0, 0, 0, 0.12), 0px 16px 24px 0px rgba(0, 0, 0, 0.14)",
      },
    },
  },
};
