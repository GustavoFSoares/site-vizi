'use client';

import { useEffect, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig, { ColorOptions } from '@root/tailwind.config';

interface IUseBackground {
  dark: string;
  default: string;
}

const { theme } = resolveConfig(tailwindConfig);
const colors = theme.colors as any as ColorOptions;
const backgroundTypes = {
  default: {
    default: colors['vizi-laranja'][100],
    dark: colors['vizi-laranja'].s,
  },
  blue: {
    default: colors['vizi-azul'][100],
    dark: colors['vizi-azul'].s,
  },
} as const;

type PagesTypes = keyof typeof backgroundTypes;

const pages: {
  [key: string]: PagesTypes;
} = {
  '/empreendimentos': 'blue',
};

export function useBackgroundColor(): IUseBackground {
  const pathname = usePathname();

  const currentBackground = useMemo<IUseBackground>(() => {
    if (pages[pathname]) {
      return backgroundTypes[pages[pathname]];
    }

    return backgroundTypes.default;
  }, [pathname]);

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return currentBackground;
}
