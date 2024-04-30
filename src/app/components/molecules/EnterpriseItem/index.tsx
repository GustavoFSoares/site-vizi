import Button from '@atoms/Button';
import bindClass from '@helpers/bindClass';

import style from './enterpriseItem.module.scss';

export type EnterpriseItemProps = {
  background: string;
  title: string;
  location: string;
  description: string;
  logo: string;
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
      <div className={style['enterprise-item__background']}></div>

      <div className={style['content']}>
        <h4 className={style['content__title']}>{title}</h4>
        <h5 className={style['content__location']}>{location}</h5>
        <h5 className={style['content__description']}>{description}</h5>
        <figure className={style['content__logo']}>LOGO</figure>
      </div>

      <div className={style['benefits']}>
        {benefits.map((benefit, index) => (
          <p key={index} className={style['benefits__item']}>
            {benefit}
          </p>
        ))}
      </div>

      <Button type='solid'>Conheça</Button>
    </div>
  );
}
