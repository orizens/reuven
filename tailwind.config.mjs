/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1e40af',
          'blue-dark': '#1e3a8a',
          'blue-light': '#3b82f6',
          orange: '#f97316',
          'orange-dark': '#ea6b0a',
        },
      },
    },
  },
  plugins: [],
};
