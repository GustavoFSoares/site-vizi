'use client';

import { useEffect, useMemo, useState } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig, { ScreenOptions } from '@root/tailwind.config';

interface IBreakpoints {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

interface IScreenOptionsWidth {
  mobile: {
    max: number;
  };
  tablet: {
    min: number;
    max: number;
  };
  desktop: {
    min: number;
  };
}

export function useBreakpoints(): IBreakpoints {
  const { theme } = resolveConfig(tailwindConfig);
  const screens = theme.screens as any as ScreenOptions;

  function prepareScreenSize(size: string): number {
    const sizeNumber = Number(size.replace('px', ''));

    return sizeNumber;
  }

  const [screensWidth] = useState<IScreenOptionsWidth>({
    mobile: {
      max: prepareScreenSize(screens.mobile.max),
    },
    tablet: {
      min: prepareScreenSize(screens.tablet.min),
      max: prepareScreenSize(screens.tablet.max),
    },
    desktop: {
      min: prepareScreenSize(screens.desktop.min),
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
      isMobile: screensWidth.mobile.max >= pageWidth,
      isTablet:
        screensWidth.tablet.max >= pageWidth &&
        screensWidth.tablet.min <= pageWidth,
      isDesktop: screensWidth.desktop.min <= pageWidth,
    };
  }, [pageWidth, screensWidth]);

  return {
    isDesktop: breakpoints.isDesktop,
    isMobile: breakpoints.isMobile,
    isTablet: breakpoints.isTablet,
  };
}
