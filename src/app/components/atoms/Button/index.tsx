import bindClass from '@helpers/bindClass';

import style from './button.module.scss';
import EventEmitter from 'events';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  type?: 'solid' | 'outlined';
  uppercase?: boolean;
  onClick?: (ev: EventEmitter) => void;
};

export default function Button({
  children,
  className,
  type,
  uppercase,
  onClick,
}: Props) {
  function handleClick(ev: any) {
    if (!onClick) {
      return;
    }

    onClick(ev);
  }

  return (
    <button
      className={bindClass(
        style['button'],
        className,
        type && style[`button--${type}`],
        uppercase && 'uppercase'
      )}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
