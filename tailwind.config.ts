import type { Config } from 'tailwindcss'
export default <Partial<Config>> {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    'docs/content/**/*.md'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}