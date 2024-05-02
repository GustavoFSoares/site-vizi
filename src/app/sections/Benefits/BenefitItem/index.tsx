type Prop = {
  text: string;
  icon: StaticImageData;
};

import Image, { StaticImageData } from 'next/image';
import style from './benefitItem.module.scss';

export default function BenefitItem({ text, icon }: Prop) {
  return (
    <div className={style['benefit-item']}>
      <figure className={style['benefit-item__icon']}>
        <Image src={icon} alt={text} />
      </figure>

      <h6 className={style['benefit-item__text']}>{text}</h6>
    </div>
  );
}
