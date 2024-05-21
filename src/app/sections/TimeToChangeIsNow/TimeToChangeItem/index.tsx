import Image, { StaticImageData } from 'next/image';

import style from './timeToChangeItem.module.scss';
import bindClass from '@helpers/bindClass';

export type TimeToChangeItemProps = {
  title: string;
  description: string;
  icon: StaticImageData;
};

export default function TimeToChangeItem({
  title,
  description,
  icon,
}: TimeToChangeItemProps) {
  return (
    <li
      className={bindClass('time-to-change-item', style['time-to-change-item'])}
    >
      <figure className={style['time-to-change-item__icon']}>
        <div className={style['time-to-change-item__icon-content']}>
          <Image src={icon} alt={title} />
        </div>
      </figure>

      <div className={style['time-to-change-item__content']}>
        <h5 className={style['time-to-change-item__title']}>{title}</h5>

        <h6 className={style['time-to-change-item__description']}>
          {description}
        </h6>
      </div>
    </li>
  );
}
