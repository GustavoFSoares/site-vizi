'use client';

import style from '@app/style.module.scss';

import { useBreakpoints } from '@hooks/useBreakpoints';

export default function Home() {
  const { isXs, isSm, isMd, isLg } = useBreakpoints();

  return (
    <div className={style.page}>
      <p className={style.teste}>isXs: {isXs.toString()}</p>
      <p className={style.teste}>isSm: {isSm.toString()}</p>
      <p className={style.teste}>isMd: {isMd.toString()}</p>
      <p className={style.teste}>isLg: {isLg.toString()}</p>
    </div>
  );
}
