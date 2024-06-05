'use client';

import { useEffect, useMemo } from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';
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
  empreendimentos: 'blue',
};

export function useBackgroundColor(): IUseBackground {
  const layoutSegment = useSelectedLayoutSegment();

  const currentBackground = useMemo<IUseBackground>(() => {
    if (layoutSegment && pages[layoutSegment]) {
      return backgroundTypes[pages[layoutSegment]];
    }

    return backgroundTypes.default;
  }, [layoutSegment]);

  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      body.style.backgroundColor = currentBackground.default;
    }
  }, [currentBackground]);

  return currentBackground;
}
