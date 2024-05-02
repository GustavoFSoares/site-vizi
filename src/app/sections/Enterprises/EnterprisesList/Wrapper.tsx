import Carousel from '@organisms/Carousel';

type Props = {
  className?: string;
  shape: 'normal' | 'carousel';
  children: JSX.Element[];
};

export default function EnterprisesListWrapper({
  children,
  className,
  shape,
}: Props) {
  if (shape === 'carousel') {
    return (
      <div className={className}>
        <Carousel gap={13} cardSize={90} autoPlay>
          {children.map((item, index) => (
            <Carousel.Slide key={index}>{item}</Carousel.Slide>
          ))}
        </Carousel>
      </div>
    );
  }

  return <div className={className}>{children}</div>;
}
