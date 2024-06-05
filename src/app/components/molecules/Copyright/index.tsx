import style from './copyright.module.scss';

type Props = {
  backgroundColor: string;
};

export default function Copyright({ backgroundColor }: Props) {
  const year = new Date().getFullYear();

  return (
    <small className={style['copyright']} style={{ backgroundColor }}>
      Copyright ©️ {year} Vizi Lotes - Todos os direitos reservados.
    </small>
  );
}
