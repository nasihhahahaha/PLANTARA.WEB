import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#22c55e',
        secondary: '#0ea5e9',
        soft: '#f0fdf4'
      }
    }
  },
  plugins: []
};

export default config;
