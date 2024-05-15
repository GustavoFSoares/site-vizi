'use client';

import { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import bindClass from '@helpers/bindClass';

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
  cardSize?: number;
  gap?: number;
  className?: string;
  onSlideChange?: (slideIndex: number) => void;
};

export default function Carousel({
  children,
  navigation,
  dotsNavigation,
  disableLoop,
  startIndex = 0,
  autoPlay,
  cardSize = 100,
  gap = 0,
  className,
  onSlideChange,
}: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: !disableLoop,
      startIndex,
    },
    [Autoplay({ playOnInit: autoPlay, delay: 3000 })]
  );

  const handleSetCurrentSlide = useCallback(() => {
    if (!emblaApi) {
      return;
    }

    if (onSlideChange) {
      onSlideChange(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi, onSlideChange]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    handleSetCurrentSlide();

    emblaApi.on('select', () => {
      handleSetCurrentSlide();
    });
  }, [emblaApi, handleSetCurrentSlide]);

  const cssVariables = {
    '--card-size': `${cardSize}%`,
    '--gap': `${gap}px`,
  } as React.CSSProperties;

  return (
    <div
      style={cssVariables}
      className={bindClass(styles['embla'], className)}
      ref={emblaRef}
    >
      <div className={styles['embla__container']}>{children}</div>

      {navigation && <NavigationButtons emblaApi={emblaApi} />}
      {dotsNavigation && <NavigationDots emblaApi={emblaApi} />}
    </div>
  );
}
