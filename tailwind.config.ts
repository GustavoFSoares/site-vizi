import type { Config } from 'tailwindcss';

const config: Config = {
  important: true,
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
        xl: { min: '1440px' },
        break: { min: '1730px' },
      },
      colors: {
        'vizi-laranja': {
          100: '#DF763E',
          30: '#EA74324D',
          s: '#97471A',
        },
        'vizi-amarelo': {
          100: '#FFB31C',
        },
        'vizi-whatsapp': {
          100: '#1FAF38',
        },
        'vizi-azul': {
          100: '#4B40C5',
          s: '#1D194A',
        },
        'vizi-white': {
          10: '#FFFFFF1A',
          25: '#ffffff40',
          30: '#ffffff4d',
          40: '#ffffff66',
          50: '#ffffff80',
          70: '#FFFFFFB2',
          100: '#ffffff',
        },
        'vizi-text': {
          1: '#3C3C3C',
          70: '#000000B2',
        },
        'vizi-black': {
          10: '#0000001A',
          40: '#00000066',
          60: '#00000099',
          100: '#000000',
        },
        'vizi-gray': {
          25: '#85858540',
          40: '#54545466',
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
  xl: { min: string };
};
