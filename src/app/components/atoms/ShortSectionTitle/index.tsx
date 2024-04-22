import styles from './shortSectionTitle.module.scss';

type Props = {
  title: string;
  align?: 'left' | 'center';
};

export default function ShortSectionTitle({ title, align = 'left' }: Props) {
  return (
    <div className={styles['short-section-title']}>
      <h1 className={styles['short-section-title__text']}>{title}</h1>
    </div>
  );
}
