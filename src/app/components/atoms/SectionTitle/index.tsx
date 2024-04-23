import bindClass from '@helpers/bindClass';
import styles from './sectionTitle.module.scss';

type Props = {
  children: string;
  decorator?: 'orange' | 'blue';
};

export default function SectionTitle({ children, decorator = 'blue' }: Props) {
  return (
    <h1
      className={bindClass(
        styles['section-title'],
        styles[`section-title--decorator-${decorator}`]
      )}
    >
      {children}
    </h1>
  );
}
