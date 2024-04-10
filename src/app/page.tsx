'use client';

import style from '@app/style.module.scss';

import { useBreakpoints } from '@hooks/useBreakpoints';

export default function Home() {
  const { isDesktop, isMobile, isTablet } = useBreakpoints();

  return (
    <div className={style.page}>
      <p className={style.teste}>isMobile: {isMobile.toString()}</p>
      <p className={style.teste}>isTablet: {isTablet.toString()}</p>
      <p className={style.teste}>isDesktop: {isDesktop.toString()}</p>
    </div>
  );
}
