/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#2b6cb4',
          'blue-dark': '#1d5c9e',
          'blue-light': '#5b9fd6',
          orange: '#d97706',
          'orange-dark': '#b45309',
        },
      },
    },
  },
  plugins: [],
};
