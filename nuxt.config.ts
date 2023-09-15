// https://nuxt.com/docs/api/configuration/nuxt-config
import { existsSync, readFileSync } from "node:fs";
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    vue: {
      script: {
        fs: {
          fileExists(file: string) {
            return existsSync(file);
          },
          readFile(file: string) {
            return readFileSync(file, "utf-8");
          },
        },
      },
    },
  },
  modules: ['@nuxt/ui'],
  ui: {
    primary: 'green',
    gray: 'cool'
  },
  alias: {
    "@Components": "./components",
    "@Layouts": "./layouts",
  },
});
