'use client';

import Carousel from '@organisms/Carousel';
import CarouselItem from './CarouselItem';

import BackgroundImage from '@assets/hero-carousel.png';
import Image from 'next/image';

export default function Hero() {
  return (
    <div>
      <Carousel>
        <Carousel.Slide>
          <CarouselItem
            title='Complexo La Bella Toscana'
            description='Complexo de condomínios com mais de 10 espaços de lazer. Lotes a partir de 128m² em uma excelente localização na região metropolitana de Curitiba'
            location={{ city: 'São José dos Pinhais', state: 'PR' }}
            url='/#cta/'
            backgroundImage={
              <Image src={BackgroundImage} alt={'Complexo La Bella Toscana'} />
            }
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <CarouselItem
            title='Complexo 2'
            description='Complexo 2. Lotes a partir de 128m² em uma excelente localização na região metropolitana de Curitiba'
            location={{ city: 'São José dos Pinhais', state: 'PR' }}
            url='/#cta2/'
            backgroundImage={<Image src={BackgroundImage} alt={'Complexo 2'} />}
          />
        </Carousel.Slide>
      </Carousel>
    </div>
  );
}
