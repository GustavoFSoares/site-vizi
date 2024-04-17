import { ReactNode, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

export default function useCarouselController() {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  return {
    emblaRef,
    emblaApi,
  };
}
