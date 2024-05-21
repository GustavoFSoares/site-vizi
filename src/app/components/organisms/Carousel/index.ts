import Carousel, { Props as CarouselProps } from './Carousel';
import CarouselSlide, { SlideProps } from './Slide';

interface ICarouselComponents extends React.FC<CarouselProps> {
  Slide: React.FC<SlideProps>;
}

const carouselComponents = Carousel as any as ICarouselComponents;
carouselComponents.Slide = CarouselSlide;

export default carouselComponents;

type CarouselOptions = Omit<CarouselProps, 'children'>;
export type { CarouselOptions };
