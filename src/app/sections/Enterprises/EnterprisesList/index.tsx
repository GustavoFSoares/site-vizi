import EnterpriseItem, { EnterpriseItemProps } from '@molecules/EnterpriseItem';
import Carousel from '@organisms/Carousel';

import style from './enterprisesList.module.scss';

type Props = {
  list: EnterpriseItemProps[];
};

export default function EnterprisesList({ list }: Props) {
  return (
    <div className={style['enterprises-explorer__list']}>
      <Carousel
        className={style['enterprises-explorer__list-carousel']}
        gap={13}
        cardSize={90}
        autoPlay
      >
        {list.map((item, index) => (
          <Carousel.Slide key={index}>
            <EnterpriseItem
              className={style['enterprises-explorer__item']}
              key={index}
              {...item}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
}
