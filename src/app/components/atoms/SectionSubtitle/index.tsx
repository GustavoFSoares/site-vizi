import bindClass from '@helpers/bindClass';
import styles from './sectionSubtitle.module.scss';

type Props = {
  children: string;
  className?: string;
};

export default function SectionSubtitle({ children, className }: Props) {
  return (
    <h2 className={bindClass(styles['section-subtitle'], className)}>
      {children}
    </h2>
  );
}
