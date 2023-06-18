/** @type {import('tailwindcss').Config} */
const typography = require("@tailwindcss/typography")({
  modifiers: ["sm"],
});
const { em } = require("./styles/utilities");
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: { 950: "#111" },
        green: { 250: "#88fdc5" },
        indigo: { 550: "#513eea" },
        magenta: "#ff0090",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            ".table": { overflowX: "auto" },
            table: { minWidth: "500px" },
            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false,
            code: {
              backgroundColor: "#f1f5f9",
              borderRadius: "3px",
              paddingBlock: ".4125ex",
              paddingInline: ".825ex",
            },
            "code::before": false,
            "code::after": false,
            "h1:first-of-type": {
              color: theme("colors.gray.900"),
              fontSize: theme("fontSize.3xl[0]"),
              fontWeight: theme("fontWeight.extrabold"),
              letterSpacing: theme("letterSpacing.tight"),
              marginBottom: theme("spacing.8"),
            },
            "h1 strong, h2 strong, h3 strong, h4 strong, h5 strong": {
              fontWeight: theme("fontWeight.extrabold"),
            },
            pre: {
              backgroundColor: theme("colors.gray.50"),
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: theme("colors.gray.200"),
            },
            "pre > code": {
              color: theme("colors.gray.800"),
            },
            ".code-block": {
              marginTop: em(24, 14),
            },
          },
        },
        sm: {
          css: {
            "h1:first-of-type": {
              fontSize: theme("fontSize.2xl[0]"),
              lineHeight: theme("lineHeight.none"),
            },
            ".code-block": {
              marginTop: em(20, 12),
            },
          },
        },
        md: {
          css: {
            "h1:first-of-type": {
              fontSize: theme("fontSize.5xl[0]"),
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.300"),
            "h1:first-of-type": {
              color: theme("colors.gray.100"),
            },
            "h1, h2, h3, h4, h5, h6, a, thead, :not(pre) code": {
              color: theme("colors.gray.100"),
            },
            hr: { borderColor: theme("colors.gray.700") },
            ol: {
              li: {
                "&::before": { color: theme("colors.gray.500") },
              },
            },
            ul: {
              li: {
                "&::before": { backgroundColor: theme("colors.gray.500") },
              },
            },
            strong: { color: theme("colors.gray.300") },
            tbody: {
              tr: {
                borderBottomColor: theme("colors.gray.700"),
              },
            },
            blockquote: {
              color: theme("colors.gray.500"),
              borderLeftColor: theme("colors.gray.700"),
            },
            pre: {
              backgroundColor: theme("colors.gray.900"),
              borderColor: theme("colors.gray.700"),
            },
            code:{
              backgroundColor: "#30363d",
            },
            "pre > code": {
              color: theme("colors.gray.200"),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ["dark"],
    },
  },
  plugins: [typography],
};
