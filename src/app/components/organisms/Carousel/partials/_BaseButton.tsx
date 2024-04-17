import { cloneElement } from 'react';
import styles from '../styles/buttons.module.scss';
import bindClass from '@helpers/bindClass';

export type ButtonProps = {
  disabled?: boolean;
  onClick: () => void;
};

type Props = ButtonProps & {
  position: 'prev' | 'next';
  children: JSX.Element;
};

export default function BaseButton({
  position,
  disabled,
  children,
  onClick,
}: Props) {
  return (
    <div
      className={bindClass(
        styles['embla-button'],
        styles['embla-button--' + position]
      )}
    >
      <button
        className={bindClass(disabled && styles['embla-button--disabled'])}
        type='button'
        onClick={onClick}
      >
        <div className={styles['embla-button__content']}>
          {cloneElement(children, {
            className: styles['embla-button__svg'],
          })}
        </div>
      </button>
    </div>
  );
}
