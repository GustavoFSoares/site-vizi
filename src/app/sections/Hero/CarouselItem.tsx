import { ReactNode } from 'react';
import styles from './carouselItem.module.scss';

type Props = {
  title: string;
  description: string;
  location: {
    city: string;
    state: string;
  };
  url: string;
  backgroundImage: ReactNode;
};

export default function CarouselItem({
  title,
  description,
  location,
  backgroundImage,
}: Props) {
  return (
    <section className={styles['carousel-item']}>
      <div className={styles['carousel-item__background-image']}>
        {backgroundImage}
      </div>

      <div className={styles['carousel-item__container']}>
        <p className={styles['carousel-item__location']}>
          {location.city} - {location.state}
        </p>

        <h1 className={styles['carousel-item__title']}>{title}</h1>

        <h2 className={styles['carousel-item__description']}>{description}</h2>

        <button className={styles['carousel-item__cta']}>Conheça</button>
      </div>
    </section>
  );
}
