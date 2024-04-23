'use client';

import { useEffect, useMemo, useState } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig, { ScreenOptions } from '@root/tailwind.config';

interface IBreakpoints {
  isXs: boolean;
  isSm: boolean;
  isMd: boolean;
  isLg: boolean;
}

interface IUseBrekpoints extends IBreakpoints {
  pageWidth: number;
}

interface IScreenOptionsWidth {
  xs: {
    max: number;
  };
  sm: {
    max: number;
  };
  md: {
    min: number;
    max: number;
  };
  lg: {
    min: number;
  };
}

export function useBreakpoints(): IUseBrekpoints {
  const { theme } = resolveConfig(tailwindConfig);
  const screens = theme.screens as any as ScreenOptions;

  function prepareScreenSize(size: string): number {
    const sizeNumber = Number(size.replace('px', ''));

    return sizeNumber;
  }

  const [screensWidth] = useState<IScreenOptionsWidth>({
    xs: {
      max: prepareScreenSize(screens.xs.max),
    },
    sm: {
      max: prepareScreenSize(screens.sm.max),
    },
    md: {
      min: prepareScreenSize(screens.md.min),
      max: prepareScreenSize(screens.md.max),
    },
    lg: {
      min: prepareScreenSize(screens.lg.min),
    },
  });

  const [pageWidth, setPageWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    setPageWidth(window.innerWidth);

    window.addEventListener('resize', () => {
      setPageWidth(window.innerWidth);
    });
  }, []);

  const breakpoints = useMemo<IBreakpoints>(() => {
    return {
      isXs: screensWidth.xs.max >= pageWidth,
      isSm: screensWidth.sm.max >= pageWidth,
      isMd:
        screensWidth.md.max >= pageWidth && screensWidth.md.min <= pageWidth,
      isLg: screensWidth.lg.min <= pageWidth,
    };
  }, [pageWidth, screensWidth]);

  return {
    pageWidth,
    isXs: breakpoints.isXs,
    isSm: breakpoints.isSm,
    isMd: breakpoints.isMd,
    isLg: breakpoints.isLg,
  };
}
