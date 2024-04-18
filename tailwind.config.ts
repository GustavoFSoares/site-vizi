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
        xs: { max: '425px' },
        sm: { max: '765px' },
        md: { min: '766px', max: '890px' },
        lg: { min: '891px' },
      },
      colors: {
        'vizi-laranja': {
          100: '#DF763E',
        },
        'vizi-whatsapp': {
          100: '#1FAF38',
        },
        'vizi-white': {
          25: '#ffffff40',
          30: '#ffffff4d',
          40: '#ffffff66',
          50: '#ffffff80',
          100: '#ffffff',
        },
      },
    },
  },
  plugins: [],
};

export default config;

export type ScreenOptions = {
  xs: { max: string };
  sm: { max: string };
  md: { min: string; max: string };
  lg: { min: string };
};
