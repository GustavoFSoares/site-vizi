import bindClass from '@helpers/bindClass';

import style from './button.module.scss';

type Props = {
  children: string;
  className?: string;
  type?: 'solid' | 'outlined';
  uppercase?: boolean;
};

export default function Button({
  children,
  className,
  type,
  uppercase,
}: Props) {
  return (
    <button
      className={bindClass(
        style['button'],
        className,
        type && style[`button--${type}`],
        uppercase && 'uppercase'
      )}
    >
      {children}
    </button>
  );
}
