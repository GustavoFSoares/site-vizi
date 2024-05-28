import { ReactNode } from 'react';

import bindClass from '@helpers/bindClass';
import style from './enterpriseButton.module.scss';

type Props = {
  children: String | ReactNode;
  selected?: boolean;
  isDark?: boolean;
  uppercase?: boolean;
  onClick?: () => void;
};

export default function EnterpriseButton({
  children,
  selected,
  isDark,
  uppercase,
  onClick,
}: Props) {
  return (
    <button
      className={bindClass(
        style['enterprise-button'],
        isDark && style['enterprise-button--is-dark'],
        selected && style['enterprise-button--selected'],
        uppercase && style['enterprise-button--uppercase']
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
