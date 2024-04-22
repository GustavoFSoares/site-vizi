import bindClass from '@helpers/bindClass';

import style from './button.module.scss';

type Props = {
  children: string;
  className?: string;
  px?: string;
  py?: string;
};

export default function Button({ children, className, px, py }: Props) {
  return (
    <button
      className={bindClass(
        style['button'],
        className,
        px && `px-${px}`,
        py && `py-${py}`
      )}
    >
      {children}
    </button>
  );
}
