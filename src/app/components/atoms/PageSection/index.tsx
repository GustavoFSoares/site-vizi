import { ReactNode } from 'react';

import style from './pageSection.module.scss';

type Prop = {
  children: ReactNode;
};

export default function PageSection({ children }: Prop) {
  return <section className={style['page-section']}>{children}</section>;
}
