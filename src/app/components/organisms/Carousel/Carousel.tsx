'use client';

import { useEffect } from 'react';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import styles from './styles/styles.module.scss';
import NavigationDots from './partials/NavigationDots';
import NavigationButtons from './partials/NavigationButtons';

export type Props = {
  navigation?: boolean;
  dotsNavigation?: boolean;
  disableLoop?: boolean;
  children: JSX.Element | JSX.Element[];
  startIndex?: number;
  autoPlay?: boolean;
};

export default function Carousel({
  children,
  navigation,
  dotsNavigation,
  disableLoop,
  startIndex = 0,
  autoPlay,
}: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: !disableLoop,
      startIndex,
    },
    [Autoplay({ playOnInit: autoPlay, delay: 3000 })]
  );

  return (
    <div className={styles['embla']} ref={emblaRef}>
      <div className={styles['embla__container']}>{children}</div>

      {navigation && <NavigationButtons emblaApi={emblaApi} />}
      {dotsNavigation && <NavigationDots emblaApi={emblaApi} />}
    </div>
  );
}
