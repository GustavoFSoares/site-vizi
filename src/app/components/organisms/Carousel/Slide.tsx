import { ReactNode } from 'react';
import styles from './styles/styles.module.scss';

export type SlideProps = {
  children: ReactNode;
};

export default function Slide({ children }: SlideProps) {
  return <article className={styles['embla__slide']}>{children}</article>;
}
