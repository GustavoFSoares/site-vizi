import bindClass from '@helpers/bindClass';
import style from './enterpriseButton.module.scss';

type Props = {
  children: String;
  selected?: boolean;
  onClick?: () => void;
};

export default function EnterpriseButton({
  children,
  selected,
  onClick,
}: Props) {
  return (
    <button
      className={bindClass(
        style['enterprise-button'],
        selected && style['enterprise-button--selected']
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
