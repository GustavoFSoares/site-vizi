import bindClass from '@helpers/bindClass';

import style from './button.module.scss';

type Props = {
  children: string;
  className?: string;
};

export default function Button({ children, className }: Props) {
  return (
    <button className={bindClass(style['button'], className)}>
      {children}
    </button>
  );
}
