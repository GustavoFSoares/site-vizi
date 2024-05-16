import bindClass from '@helpers/bindClass';
import styles from './sectionTitle.module.scss';

type Props = {
  children: string;
  decorator?: 'orange' | 'blue' | 'hide';
  className?: string;
};

export default function SectionTitle({
  children,
  className,
  decorator = 'blue',
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
