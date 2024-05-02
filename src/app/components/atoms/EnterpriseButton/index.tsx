import { ReactNode } from 'react';

import bindClass from '@helpers/bindClass';
import style from './enterpriseButton.module.scss';

type Props = {
  children: String | ReactNode;
  selected?: boolean;
  uppercase?: boolean;
  onClick?: () => void;
};

export default function EnterpriseButton({
  children,
  selected,
  uppercase,
  onClick,
}: Props) {
  return (
    <button
      className={bindClass(
        style['enterprise-button'],
        selected && style['enterprise-button--selected'],
        uppercase && style['enterprise-button--uppercase']
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
