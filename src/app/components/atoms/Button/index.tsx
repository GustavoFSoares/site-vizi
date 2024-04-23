import bindClass from '@helpers/bindClass';

import style from './button.module.scss';

type Props = {
  children: string;
  className?: string;
  type?: 'solid' | 'outlined';
  uppercase?: boolean;
  px?: string;
  py?: string;
};

export default function Button({
  children,
  className,
  type,
  uppercase,
  px,
  py,
}: Props) {
  return (
    <button
      className={bindClass(
        style['button'],
        className,
        px && `px-${px}`,
        py && `py-${py}`,
        type && style[`button--${type}`],
        uppercase && 'uppercase'
      )}
    >
      {children}
    </button>
  );
}
