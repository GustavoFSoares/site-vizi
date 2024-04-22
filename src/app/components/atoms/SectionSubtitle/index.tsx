import styles from './sectionSubtitle.module.scss';

type Props = {
  children: string;
};

export default function SectionSubtitle({ children }: Props) {
  return <h2 className={styles['section-subtitle']}>{children}</h2>;
}
