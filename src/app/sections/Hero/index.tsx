'use client';

import Image from 'next/image';

import BackgroundImage from '@assets/hero-carousel.png';
import WhatsappLogo from '@assets/whatsapp-logo.svg';

import PageSection from '@atoms/PageSection';
import Carousel from '@organisms/Carousel';

import CarouselItem from './CarouselItem';
import style from './hero.module.scss';

import { useBreakpoints } from '@hooks/useBreakpoints';

export default function Hero() {
  const { isXs } = useBreakpoints();

  const carouselData = [
    {
      title: 'Complexo La Bella Toscana',
      description:
        'Complexo de condomínios com mais de 10 espaços de lazer. Lotes a partir de 128m² em uma excelente localização na região metropolitana de Curitiba',
      location: { city: 'São José dos Pinhais', state: 'PR' },
      url: '/#cta/',
      backgroundImage: BackgroundImage,
    },
    {
      title: 'Complexo 2',
      description:
        'Complexo 2. Lotes a partir de 128m² em uma excelente localização na região metropolitana de Curitiba',
      location: { city: 'São José dos Pinhais', state: 'PR' },
      url: '/#cta2/',
      backgroundImage: BackgroundImage,
    },
  ];

  return (
    <PageSection sectionId='hero' isHero className={style['hero__content']}>
      <Carousel navigation dotsNavigation={!isXs}>
        {carouselData.map((item, itemIndex) => (
          <Carousel.Slide key={itemIndex}>
            <CarouselItem
              title={item.title}
              description={item.description}
              location={item.location}
              url={item.url}
              backgroundImage={item.backgroundImage}
            />
          </Carousel.Slide>
        ))}
      </Carousel>

      <button className={style['hero__whatsapp-button']}>
        <Image
          src={WhatsappLogo}
          alt='Whatsapp Logo'
          className={style['hero__whatsapp-button-content']}
        />
      </button>
    </PageSection>
  );
}
