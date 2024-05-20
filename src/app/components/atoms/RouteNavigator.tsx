'use client';

import { useState, useEffect, useCallback } from 'react';

export default function RouteNavigator() {
  const [hash, setHash] = useState(window.location.hash);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id.replace('#', ''));

    if (element) {
      element.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    }
  }, []);

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
