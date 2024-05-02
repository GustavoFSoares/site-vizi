import styles from './shortSectionTitle.module.scss';

type Props = {
  children: string;
  align?: 'left' | 'center';
};

export default function ShortSectionTitle({ children, align = 'left' }: Props) {
  return <h1 className={styles['short-section-title']}>{children}</h1>;
}
