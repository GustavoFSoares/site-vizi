'use client';

import Image from 'next/image';

import BackgroundImage from '@assets/hero-carousel.png';

import Carousel from '@organisms/Carousel';
import CarouselItem from './CarouselItem';

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
      backgroundImage: (
        <Image
          className='h-full'
          src={BackgroundImage}
          alt={'Complexo La Bella Toscana'}
        />
      ),
    },
    {
      title: 'Complexo 2',
      description:
        'Complexo 2. Lotes a partir de 128m² em uma excelente localização na região metropolitana de Curitiba',
      location: { city: 'São José dos Pinhais', state: 'PR' },
      url: '/#cta2/',
      backgroundImage: (
        <Image className='h-full' src={BackgroundImage} alt={'Complexo 2'} />
      ),
    },
  ];

  return (
    <div>
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
    </div>
  );
}
