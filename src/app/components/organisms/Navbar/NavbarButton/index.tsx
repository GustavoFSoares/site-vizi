import styles from './styles.module.scss';

import bindClass from '@helpers/bindClass';

type Props = {
  isOpen: boolean;
  onClick: () => void;
};

export default function NavbarButton({ isOpen, onClick }: Props) {
  const bars = [1, 2, 3, 4];

  return (
    <button className={styles['navbar-button']} onClick={onClick}>
      {bars.map((_, index) => (
        <span
          key={index}
          className={bindClass(
            styles['navbar-button__bar'],
            isOpen && styles[`navbar-button__bar--${index + 1}`]
          )}
        ></span>
      ))}
    </button>
  );
}
