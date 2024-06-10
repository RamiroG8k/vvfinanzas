import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        background: 'hsl(var(--color-background) / <alpha-value>)',
        content: 'hsl(var(--color-content) / <alpha-value>)',
        accent: {
          // light: 'hsl(35, 95%, 75%)',
          DEFAULT: 'hsl(var(--color-accent) / <alpha-value>)'
          // dark: 'hsl(35, 95%, 35%)'
        }
      }
    }
  },
  plugins: []
};
export default config;
