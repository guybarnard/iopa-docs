const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './components/**/*.js',
    './components/**/*.tsx',
    './data/**/*.tsx',
    './nextra-theme-docs/**/*.js',
    './nextra-theme-docs/**/*.tsx',
    './nextra-theme-docs/**/*.css',
    './pages/**/*.md',
    './pages/**/*.mdx',
    './pages/**/*.tsx',
    './theme.config.js',
    './styles.css',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   light: "url('/logo-light.svg')",
      //   dark: "url('/logo-dark.svg')",
      // },
      fontFamily: {
        sans: [`"Inter"`, 'sans-serif'],
        mono: [
          'Menlo',
          'Monaco',
          'Lucida Console',
          'Liberation Mono',
          'DejaVu Sans Mono',
          'Bitstream Vera Sans Mono',
          'Courier New',
          'monospace',
        ],
      },
      colors: {
        dark: '#000',
        gray: colors.neutral,
        blue: colors.blue,
        orange: colors.orange,
        green: colors.green,
        red: colors.red,
        yellow: colors.yellow,
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        betterhover: { raw: '(hover: hover)' },
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
  darkMode: 'class',
}
