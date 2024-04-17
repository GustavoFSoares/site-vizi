import Carousel, { Props as CaroulelProps } from './Carousel';
import CarouselSlide, { SlideProps } from './Slide';

interface ICarouselComponents extends React.FC<CaroulelProps> {
  Slide: React.FC<SlideProps>;
}

const carouselComponents = Carousel as any as ICarouselComponents;
carouselComponents.Slide = CarouselSlide;

export default carouselComponents;
