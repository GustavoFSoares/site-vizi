'use client';

import { useBreakpoints } from '@hooks/useBreakpoints';

import EnterprisesHeader from '@molecules/EnterprisesHeader';
import EnterpriseItem, { EnterpriseItemProps } from '@molecules/EnterpriseItem';

import SeeMoreButton from '../SeeMoreButton';

import style from './enterprisesList.module.scss';

export default function EnterprisesList() {
  const enterprisesList: EnterpriseItemProps[] = [
    {
      background: '',
      title: 'LIFE GARDEN',
      description: 'Lotes a partir de 140,00M²',
      location: 'São José dos Pinhais',
      logo: '',
      benefits: ['PR', 'Condomínio fechado', 'Pronto para morar'],
      ctaLink: '#',
    },
    {
      background: '',
      title: 'LIFE GARDEN',
      description: 'Lotes a partir de 140,00M²',
      location: 'São José dos Pinhais',
      logo: '',
      benefits: ['PR', 'Condomínio fechado', 'Pronto para morar'],
      ctaLink: '#',
    },
  ];

  const { isSm } = useBreakpoints();
  return (
    <div className={style['enterprises-list']}>
      {isSm && (
        <div className={style['enterprises-list__see-more']}>
          <SeeMoreButton />
        </div>
      )}

      <EnterprisesHeader>
        <SeeMoreButton />
      </EnterprisesHeader>

      <ul className={style['enterprises-list__list']}>
        {enterprisesList.map((item, index) => (
          <EnterpriseItem
            className={style['enterprises-list__item']}
            key={index}
            {...item}
          />
        ))}
      </ul>

      <h1>text</h1>
    </div>
  );
}
