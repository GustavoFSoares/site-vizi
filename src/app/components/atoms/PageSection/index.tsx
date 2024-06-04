import { CSSProperties, ReactNode, StyleHTMLAttributes } from 'react';

import style from './pageSection.module.scss';
import bindClass from '@helpers/bindClass';

type Prop = {
  children: ReactNode;
  sectionId?: string;
  isHero?: boolean;
  className?: string;
  containerClassName?: string;
  style?: CSSProperties;
  backgroundColor?: string;
  element?: 'section' | 'footer' | 'div';
};

export default function PageSection({
  children,
  isHero,
  sectionId,
  className,
  containerClassName,
  backgroundColor,
  style: inlineCssProps,
  element: Element = 'section',
}: Prop) {
  return (
    <Element
      className={bindClass(
        style['page-section'],
        isHero && style['page-section--is-hero'],
        containerClassName
      )}
      style={{
        ...(inlineCssProps ?? undefined),
        backgroundColor,
      }}
    >
      {sectionId && (
        <div className={style['page-section__anchor']} id={sectionId} />
      )}

      <div className={bindClass(style['page-section__content'], className)}>
        {children}
      </div>
    </Element>
  );
}
