'use client';

import { useMemo, useState } from 'react';

import depositionProfile from '@assets/deposition-profile.jpeg';

import Carousel, { CarouselOptions } from '@organisms/Carousel';

import DepositionItem, { DepositionItemProps } from './DepositionItem';

import style from './depositions.module.scss';
import { useBreakpoints } from '@hooks/useBreakpoints';

export default function DepositionsList() {
  const { isMd, isLg } = useBreakpoints();

  const carouselOptions = useMemo<CarouselOptions>(() => {
    if (isMd) {
      return {
        cardSize: 55,
        gap: 20,
        startIndex: 1,
      };
    }

    if (isLg) {
      return {
        cardSize: 75,
        gap: 80,
        startIndex: 1,
        center: true,
        navigation: true,
        navigationMargin: '15%',
        baseNavigationClassName:
          style['depositions__carousel-navigation-button'],
      };
    }

    return {
      cardSize: 90,
      gap: 10,
      startIndex: 0,
    };
  }, [isMd, isLg]);

  const depositions: DepositionItemProps[] = [
    {
      businessName: 'Cliente empreendimento 1',
      name: 'Nome Sobrenome 1',
      description: [
        'Chuck Norris has a mug of nails instead of coffee in the morning. Chuck Norris drinks napalm to fight his heartburn. Death once had a near-Chuck-Norris experience. Chuck Norris sleeps with a pillow under his gun. When the Boogeyman goes to sleep every night he checks his closet for Chuck Norris.',
      ],
      profileImage: depositionProfile,
    },
    {
      businessName: 'Cliente empreendimento 2',
      name: 'Nome Sobrenome GRANDE 2',
      description: [
        'Chuck Norris does not use spell check. If he happens to misspell a word, Oxford will change the spelling. Chuck Norris’ cowboy boots are made from real cowboys. Chuck Norris doesn’t cheat death. He wins fair and square. Chuck Norris tells Simon what to do. Chuck Norris beats rock, paper, scissors. Cannon balls, tanks, super destroyers, exploding stars — I could go on.',
      ],
      profileImage: depositionProfile,
    },
    {
      businessName: 'Cliente empreendimento 3',
      name: 'Nome Sobrenome 3',
      description: [
        'What’s the strongest part of Chuck Norris? His opinion. Chuck Norris can hear sign language. Chuck Norris can squeeze orange juice out of a lemon. Chuck Norris knows Victoria’s secret. Chuck Norris can strangle you with a cordless phone.',
        'Chuck Norris is the reason why Waldo is hiding. When we first landed on the moon, the astronauts noted there was print on the moon that said “Chuck Norris was here.”. Chuck refers to himself in the fourth person. When the Boogeyman goes to sleep every night he checks his closet for Chuck Norris. Chuck Norris makes onions cry.',
      ],
      profileImage: depositionProfile,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState<number>(
    carouselOptions.startIndex || 0
  );

  function handleSetCurrentSlide(slideIndex: number) {
    setCurrentSlide(slideIndex);
  }

  return (
    <div className={style['depositions__carousel']}>
      <div className={style['depositions__carousel-content']}>
        <Carousel
          disableLoop
          onSlideChange={handleSetCurrentSlide}
          {...carouselOptions}
        >
          {depositions.map((deposition, index) => (
            <Carousel.Slide key={index}>
              <DepositionItem
                isChecked={currentSlide === index}
                {...deposition}
              ></DepositionItem>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
