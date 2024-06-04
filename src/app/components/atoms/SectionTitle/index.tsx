import { ReactNode } from 'react';

import bindClass from '@helpers/bindClass';
import styles from './sectionTitle.module.scss';

type Props = {
  children: ReactNode;
  decorator?: 'orange' | 'blue' | 'yellow' | 'hide';
  className?: string;
};

export default function SectionTitle({
  children,
  className,
  decorator = 'hide',
}: Props) {
  return (
    <h1
      className={bindClass(
        styles['section-title'],
        styles[`section-title--decorator-${decorator}`],
        className
      )}
    >
      {children}
    </h1>
  );
}
