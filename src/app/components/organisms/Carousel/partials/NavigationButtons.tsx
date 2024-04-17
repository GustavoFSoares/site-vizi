import { NextButton } from './_NextButton';
import { PrevButton } from './_PrevButton';

import styles from '../styles/buttons.module.scss';

import { EmblaCarouselType } from 'embla-carousel';
import { useCallback, useEffect, useState } from 'react';
import useCarouselController from '../hooks/useCarouselController';

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export default function NavigationButtons() {
  const { emblaApi } = useCarouselController();

  const [prevButtonDisabled, setPrevButtonDisabled] = useState(true);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true);

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

  // const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
  //   setPrevBtnDisabled(!emblaApi.canScrollPrev());
  //   setNextBtnDisabled(!emblaApi.canScrollNext());
  // }, []);

  // useEffect(() => {
  //   if (!emblaApi) return;

  //   onSelect(emblaApi);
  //   emblaApi.on('reInit', onSelect);
  //   emblaApi.on('select', onSelect);
  // }, [emblaApi, onSelect]);

  return (
    <div>
      <PrevButton onClick={handlePrev} disabled={prevButtonDisabled} />

      <NextButton onClick={handleNext} disabled={nextButtonDisabled} />
    </div>
  );
}
