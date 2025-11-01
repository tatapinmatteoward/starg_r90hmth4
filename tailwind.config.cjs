/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#610023',
        accent: '#ff6f61',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
