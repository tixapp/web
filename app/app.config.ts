export default defineAppConfig({
  ui: {
    colors: {
      primary: "deep-sea-green",
      secondary: "gossamer",
      neutral: "zinc",
    },
    button: {
      slots: {
        base: "rounded-lg"
      },
      defaultVariants: {
        size: "lg",
      }
    }
  },
});
