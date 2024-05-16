import { CSSProperties, ReactNode, StyleHTMLAttributes } from 'react';

import style from './pageSection.module.scss';
import bindClass from '@helpers/bindClass';

type Prop = {
  children: ReactNode;
  isHero?: boolean;
  className?: string;
  containerClassName?: string;
  style?: CSSProperties;
};

export default function PageSection({
  children,
  isHero,
  className,
  containerClassName,
  style: inlineCssProps,
}: Prop) {
  return (
    <section
      className={bindClass(
        style['page-section'],
        isHero && style['page-section--is-hero'],
        containerClassName
      )}
      style={inlineCssProps}
    >
      <div className={bindClass(style['page-section__content'], className)}>
        {children}
      </div>
    </section>
  );
}
