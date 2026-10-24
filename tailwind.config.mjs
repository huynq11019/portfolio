/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0a0d14',
          card: '#111726',
          border: '#1f293d',
          accent: '#3b82f6',
          glow: '#60a5fa',
          cyan: '#06b6d4',
          text: '#f1f5f9',
          muted: '#94a3b8',
        },
      },
      fontFamily: {
        sans: ['Switzer', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
