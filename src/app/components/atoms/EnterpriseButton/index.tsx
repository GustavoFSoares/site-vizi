import style from './enterpriseButton.module.scss';

type Props = {
  children: String;
};

export default function EnterpriseButton({ children }: Props) {
  return <button className={style['enterprise-button']}>{children}</button>;
}
