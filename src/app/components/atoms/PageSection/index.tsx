import { ReactNode } from 'react';

import style from './pageSection.module.scss';
import bindClass from '@helpers/bindClass';

type Prop = {
  children: ReactNode;
  isHero?: boolean;
  className?: string;
  contentClassName?: string;
};

export default function PageSection({
  children,
  isHero,
  className,
  contentClassName,
}: Prop) {
  return (
    <section
      className={bindClass(
        style['page-section'],
        isHero && style['page-section--is-hero'],
        className
      )}
    >
      <div
        className={bindClass(style['page-section__content'], contentClassName)}
      >
        {children}
      </div>
    </section>
  );
}
