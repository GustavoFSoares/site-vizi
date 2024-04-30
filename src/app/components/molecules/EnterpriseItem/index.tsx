import Button from '@atoms/Button';
import bindClass from '@helpers/bindClass';

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
    <li className={bindClass('enterprise-item', className)}>
      <div className='enterprise-item__background'></div>

      <div className='content'>
        <h4 className='content__title'>{title}</h4>
        <h5 className='content__location'>{location}</h5>
        <h5 className='content__description'>{description}</h5>
        <figure className='content__logo'>LOGO</figure>
      </div>

      <div className='benefits'>
        {benefits.map((benefit, index) => (
          <p key={index} className='benefits__item'>
            {benefit}
          </p>
        ))}
      </div>

      <Button type='solid'>Conheça</Button>
    </li>
  );
}
