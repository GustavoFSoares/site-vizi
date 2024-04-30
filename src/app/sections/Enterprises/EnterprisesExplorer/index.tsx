'use client';

import { useBreakpoints } from '@hooks/useBreakpoints';

import EnterprisesHeader from '@molecules/EnterprisesHeader';
import EnterpriseItem, { EnterpriseItemProps } from '@molecules/EnterpriseItem';
import Carousel from '@organisms/Carousel';

import EntepriseBackground from '@assets/enterprise-background.png';
import EntepriseLogo from '@assets/enterprise-logo.png';

import SeeMoreButton from '../SeeMoreButton';

import style from './enterprisesExplorer.module.scss';
import EnterprisesList from '../EnterprisesList';

export default function EnterprisesExplorer() {
  const enterprisesList: EnterpriseItemProps[] = [
    {
      background: EntepriseBackground,
      title: 'LIFE GARDEN',
      description: 'Lotes a partir de 140,00M²',
      location: 'São José dos Pinhais',
      logo: EntepriseLogo,
      benefits: ['PR', 'Condomínio fechado', 'Pronto para morar'],
      ctaLink: '#',
    },
    {
      background: EntepriseBackground,
      title: 'LIFE GARDEN',
      description: 'Lotes a partir de 140,00M²',
      location: 'São José dos Pinhais',
      logo: EntepriseLogo,
      benefits: ['PR', 'Condomínio fechado', 'Pronto para morar'],
      ctaLink: '#',
    },
  ];

  const { isSm } = useBreakpoints();
  return (
    <div className={style['enterprises-explorer']}>
      {isSm && (
        <div className={style['enterprises-explorer__see-more']}>
          <SeeMoreButton />
        </div>
      )}

      <EnterprisesHeader>
        <SeeMoreButton />
      </EnterprisesHeader>

      <EnterprisesList list={enterprisesList} />

      <h1>text</h1>
    </div>
  );
}
