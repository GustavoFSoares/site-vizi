import Button from '@atoms/Button';
import bindClass from '@helpers/bindClass';

import style from './enterpriseItem.module.scss';
import Image, { StaticImageData } from 'next/image';

export type EnterpriseItemProps = {
  id: string | number;
  background: StaticImageData;
  title: string;
  location: string;
  description: string;
  logo: StaticImageData;
  benefits: string[];
  ctaLink: string;
};

type Props = EnterpriseItemProps & {
  className?: string;
};

export default function EnterpriseItem({
  className,
  background,
  title,
  location,
  description,
  logo,
  benefits,
  ctaLink,
}: Props) {
  return (
    <div className={bindClass(style['enterprise-item'], className)}>
      <div
        className={style['enterprise-item__background']}
        style={{ backgroundImage: `url(${background.src})` }}
      />

      <div className={style['content']}>
        <div className={style['content__header']}>
          <h4 className={style['content__title']}>
            {title.split(' ').map((word) => (
              <span key={word}>{word}</span>
            ))}
          </h4>
          <h5 className={style['content__location']}>{location}</h5>
          <h5 className={style['content__description']}>{description}</h5>
        </div>

        <figure className={style['content__logo']}>
          <Image src={logo} alt={`LOGO ${title}`} />
        </figure>

        <div className={style['benefits']}>
          {benefits.map((benefit, index) => (
            <p key={index} className={style['benefits__item']}>
              {benefit}
            </p>
          ))}
        </div>
      </div>

      <Button className={style['enterprise-item__cta']} type='solid'>
        Conheça
      </Button>
    </div>
  );
}
