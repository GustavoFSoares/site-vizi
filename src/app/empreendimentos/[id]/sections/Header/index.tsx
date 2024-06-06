'use client';

import { useCallback } from 'react';
import Link from 'next/link';

import PageSection from '@atoms/PageSection';

import bindClass from '@helpers/bindClass';

import { useHash } from '@hooks/useHash';

import style from './header.module.scss';

type HeaderItem = {
  label: string;
  id: string;
};

export default function Header() {
  const [hash, setHash] = useHash();

  const items: HeaderItem[] = [
    {
      label: 'Informações',
      id: 'informacoes',
    },
    {
      label: 'Galeria',
      id: 'galeria',
    },
    {
      label: 'Localização',
      id: 'localizacao',
    },
    {
      label: 'Ficha Técnica',
      id: 'ficha-tecnica',
    },
    {
      label: 'Status da Obra',
      id: 'status-da-obra',
    },
  ];

  const itemIsSelected = useCallback((id: string) => id === hash, [hash]);

  function handleClickLink(id: string) {
    setHash(id);
  }

  return (
    <header className={style['header']}>
      <PageSection
        element='div'
        containerClassName={style['header__container']}
      >
        <div className={style['header__items-wrapper']}>
          {items.map((link, index) => (
            <Link
              className={bindClass(
                style['header__item'],
                itemIsSelected(link.id) && style['header__item--selected']
              )}
              key={index}
              href={{
                hash: link.id,
              }}
              onClick={() => handleClickLink(link.id)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </PageSection>
    </header>
  );
}
