import Button from '@atoms/Button';

import style from './seeMoreButton.module.scss';

export default function SeeMoreButton() {
  return <Button className={style['see-more-button']}>Ver todos</Button>;
}
