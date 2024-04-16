import { ReactNode, useState } from 'react';

export default function useCarouselController() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesCount, setSlidesCount] = useState(0);

  function calculateSlidesCount(children: ReactNode[]) {}

  return {
    currentSlide,
  };
}
