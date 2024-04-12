import styles from './styles.module.scss';

type Props = {
  isOpen: boolean;
  onClick: () => void;
};

export default function NavbarButton({ isOpen, onClick }: Props) {
  const bars = [1, 2, 3, 4];

  console.log(styles);

  return (
    <button className={styles['navbar-button']} onClick={onClick}>
      {bars.map((_, index) => (
        <span
          key={index}
          className={[
            styles['navbar-button__bar'],
            isOpen && styles[`navbar-button__bar--${index + 1}`],
          ].join(' ')}
        ></span>
      ))}
    </button>
  );
}
