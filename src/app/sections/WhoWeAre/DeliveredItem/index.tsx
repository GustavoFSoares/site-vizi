import Button from '@atoms/Button';

import style from './deliveredItem.module.scss';

type Props = {
  value: string;
  label: string;
};

export default function DeliveredItem({ value, label }: Props) {
  return (
    <div className={style['delivered-item']}>
      <div className={style['delivered-item__of']}>
        <span className={style['delivered-item__of-label']}>+ DE</span>
        <span className={style['delivered-item__of-value']}>{value}</span>
      </div>

      <Button uppercase type='solid' className={style['delivered-item__cta']}>
        {label}
      </Button>
    </div>
  );
}
