'use client';

import { useBreakpoints } from '@hooks/useBreakpoints';
import { useState, useEffect, useCallback } from 'react';

export default function RouteNavigator() {
  const { isSm } = useBreakpoints();

  const [hash, setHash] = useState(window.location.hash);

  const scrollToSection = useCallback(
    (id: string) => {
      const element = document.getElementById(id.replace('#', ''));

      if (element) {
        const yOffset = isSm ? 64 : 96;
        const y =
          element.getBoundingClientRect().top + window.scrollY - yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    },
    [isSm]
  );

  useEffect(() => {
    const onHashChange = () => {
      const { hash } = window.location;
      setHash(hash);
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    scrollToSection(hash);
  }, [hash, scrollToSection]);

  return <></>;
}
