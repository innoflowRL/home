/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Map Tailwind color names to CSS variables so the theme
           can be controlled from src/index.css (the single source of truth). */
        background: 'var(--color-background)',
        'background-alt': 'var(--color-background-alt)',
        surface: 'var(--color-surface)',
        'surface-soft': 'var(--color-surface-soft)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-muted': 'var(--color-text-muted)',
        accent: 'var(--color-accent)',
        'accent-strong': 'var(--color-accent-strong)',
        'accent-warm': 'var(--color-accent-warm)',
        border: 'var(--color-border)',
        /* Backwards-compatible aliases for places that reference older names */
        cyan: 'var(--color-accent)',
        yellow: 'var(--color-accent-warm)',
        'dark-blue': 'var(--color-accent-strong)',
        'dark-navy': 'var(--color-background-alt)',
        'dark-text': 'var(--color-text-primary)',
        'gray-text': 'var(--color-text-muted)',
        'light-gray': 'var(--color-background-alt)',
        'border-gray': 'var(--color-border)',
      },
    },
  },
  plugins: [],
}