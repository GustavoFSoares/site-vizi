import bindClass from '@helpers/bindClass';
import styles from './shortSectionTitle.module.scss';

type Props = {
  children: string;
  className?: string;
};

export default function ShortSectionTitle({ children, className }: Props) {
  return (
    <h1 className={bindClass(styles['short-section-title'], className)}>
      {children}
    </h1>
  );
}
