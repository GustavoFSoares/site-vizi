'use client';

import { useBreakpoints } from '@hooks/useBreakpoints';

import EnterprisesHeader from '@molecules/EnterprisesHeader';
import EnterpriseItem, { EnterpriseItemProps } from '@molecules/EnterpriseItem';
import Carousel from '@organisms/Carousel';

import EntepriseBackground from '@assets/enterprise-background.png';
import EntepriseLogo from '@assets/enterprise-logo.png';

import SeeMoreButton from '../SeeMoreButton';

import style from './enterprisesList.module.scss';

export default function EnterprisesList() {
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
    <div className={style['enterprises-list']}>
      {isSm && (
        <div className={style['enterprises-list__see-more']}>
          <SeeMoreButton />
        </div>
      )}

      <EnterprisesHeader>
        <SeeMoreButton />
      </EnterprisesHeader>

      <div className={style['enterprises-list__list']}>
        <Carousel
          className={style['enterprises-list__list-carousel']}
          gap={13}
          cardSize={90}
          autoPlay
        >
          {enterprisesList.map((item, index) => (
            <Carousel.Slide key={index}>
              <EnterpriseItem
                className={style['enterprises-list__item']}
                key={index}
                {...item}
              />
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>

      <h1>text</h1>
    </div>
  );
}
