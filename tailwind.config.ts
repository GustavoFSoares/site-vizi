import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        mobile: { max: '425px' },
        tablet: { min: '426px', max: '768px' },
        desktop: { min: '769px' },
      },
    },
  },
  plugins: [],
};

export default config;

export type ScreenOptions = {
  mobile: { max: string };
  tablet: { min: string; max: string };
  desktop: { min: string };
};
