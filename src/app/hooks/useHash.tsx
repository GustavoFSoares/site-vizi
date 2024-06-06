'use client';

import {
  useState,
  useEffect,
  useCallback,
  Dispatch,
  SetStateAction,
} from 'react';

type IUseHash = [string, Dispatch<SetStateAction<string>>];

export function useHash(): IUseHash {
  const [hash, setHash] = useState<string>('');

  useEffect(() => {
    const onHashChange = () => {
      const { hash } = window.location;

      setHash(hash);
    };

    onHashChange();

    window.addEventListener('hashchange', onHashChange);

    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

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
    scrollToSection(hash);
  }, [hash, scrollToSection]);

  return [hash, setHash];
}
