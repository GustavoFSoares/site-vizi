import { EmblaCarouselType } from 'embla-carousel';
import { useCallback, useEffect, useState } from 'react';

import { NextButton } from './_NextButton';
import { PrevButton } from './_PrevButton';

type Props = {
  emblaApi?: EmblaCarouselType;
  className?: string;
};

export default function NavigationButtons({ emblaApi, className }: Props) {
  const [prevButtonDisabled, setPrevButtonDisabled] = useState(false);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(false);

  const handlePrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const handleNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevButtonDisabled(!emblaApi.canScrollPrev());
    setNextButtonDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div>
      <PrevButton
        className={className}
        onClick={handlePrev}
        disabled={prevButtonDisabled}
      />

      <NextButton
        className={className}
        onClick={handleNext}
        disabled={nextButtonDisabled}
      />
    </div>
  );
}
