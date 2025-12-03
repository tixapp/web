export default defineAppConfig({
  ui: {
    colors: {
      primary: "deep-sea-green",
      secondary: "gossamer",
      neutral: "zinc",

      // NEW COLOR
      "footer-bg": "#DCF8C6",
    },
    button: {
      slots: {
        base: "rounded-lg",
      },
      defaultVariants: {
        size: "lg",
      },
    },
  },
});
