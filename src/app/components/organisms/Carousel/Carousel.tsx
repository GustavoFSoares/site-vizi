'use client';

import useEmblaCarousel from 'embla-carousel-react';

import styles from './styles/styles.module.scss';
import NavigationDots from './partials/NavigationDots';
import NavigationButtons from './partials/NavigationButtons';

export type Props = {
  navigation?: boolean;
  dotsNavigation?: boolean;
  children: JSX.Element | JSX.Element[];
};

export default function Carousel({
  children,
  navigation,
  dotsNavigation,
}: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  return (
    <div className={styles['embla']} ref={emblaRef}>
      <div className={styles['embla__container']}>{children}</div>

      {navigation && <NavigationButtons emblaApi={emblaApi} />}
      {dotsNavigation && <NavigationDots emblaApi={emblaApi} />}
    </div>
  );
}
