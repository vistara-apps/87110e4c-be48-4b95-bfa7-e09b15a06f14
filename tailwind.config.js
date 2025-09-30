/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        fg: 'var(--color-fg)',
        accent: 'var(--color-accent)',
        primary: 'var(--color-primary)',
        surface: 'var(--color-surface)',
      },
      borderRadius: {
        'lg': '20px',
        'md': '12px',
        'sm': '6px',
      },
      boxShadow: {
        'card': '0 4px 12px hsla(210, 35%, 12%, 0.2)',
        'glow': '0 0 16px hsla(45, 100%, 50%, 0.5)',
      },
      spacing: {
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
      },
    },
  },
  plugins: [],
}
