// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  imports: {
    dirs: ["composables/**", "composables/**/global"],
  },
  modules: ["@nuxt/ui"],
  css: ["~/assets/css/main.css"],
});
