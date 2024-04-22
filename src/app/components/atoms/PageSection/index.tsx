import { ReactNode } from 'react';

import style from './pageSection.module.scss';
import bindClass from '@helpers/bindClass';

type Prop = {
  children: ReactNode;
  className?: string;
};

export default function PageSection({ children, className }: Prop) {
  return (
    <section className={bindClass(style['page-section'], className)}>
      {children}
    </section>
  );
}
