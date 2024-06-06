'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCallback } from 'react';

import ArrowRight from '@assets/icons/arrow-right.svg';

import bindClass from '@helpers/bindClass';

import { useHash } from '@hooks/useHash';
import { useBreakpoints } from '@hooks/useBreakpoints';

import PageSection from '@atoms/PageSection';
import WhatsappButton from '@atoms/WhatsappButton';

import style from './header.module.scss';

type HeaderItem = {
  label: string;
  id: string;
};

type Props = {
  businessName: string;
};

export default function Header({ businessName }: Props) {
  const [hash, setHash] = useHash();
  const { isSm, isLg } = useBreakpoints();

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
        className={style['header__content']}
      >
        <div className={style['header__items-wrapper']}>
          {!isSm && (
            <span
              className={bindClass(
                style['header__item'],
                style['header__item--business-name']
              )}
            >
              <span>{businessName}</span>

              <Image src={ArrowRight} alt='arrow-right' />
            </span>
          )}

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

        {isLg && (
          <WhatsappButton className={style['header__whatsapp-button']} wide />
        )}
      </PageSection>
    </header>
  );
}
