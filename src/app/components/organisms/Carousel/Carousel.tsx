'use client';

import useEmblaCarousel from 'embla-carousel-react';

import styles from './styles/styles.module.scss';
import NavigationButtons from './partials/NavigationButtons';

export type Props = {
  navigation?: boolean;
  children: JSX.Element | JSX.Element[];
};

export default function Carousel({ children, navigation }: Props) {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className={styles['embla']} ref={emblaRef}>
      <div className={styles['embla__container']}>{children}</div>

      {navigation && <NavigationButtons />}
    </div>
  );
}
