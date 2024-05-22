import style from './copyright.module.scss';

export default function Copyright() {
  const year = new Date().getFullYear();

  return (
    <small className={style['copyright']}>
      Copyright ©️ {year} Vizi Lotes - Todos os direitos reservados.
    </small>
  );
}
