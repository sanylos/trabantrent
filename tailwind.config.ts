import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          dark: 'var(--primary-dark)',
        },
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        'text-light': 'var(--text-light)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        container: 'var(--container-padding, 2rem)',
      },
      screens: {
        'xs': '475px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: 'var(--container-padding, 2rem)',
        },
      },
    },
  },  plugins: [],
  darkMode: 'class',
}

export default config
