'use client';

import WhatsappButton from '@atoms/WhatsappButton';
import EnterprisesHeader from '@molecules/EnterprisesHeader';

import backgroundImage from '@assets/enterprises/hero.png';

import style from './enterprisesList.module.scss';
import { useBreakpoints } from '@hooks/useBreakpoints';

export default function Header() {
  const { isSm } = useBreakpoints();

  return (
    <div className={style['enterprises-list__header']}>
      <EnterprisesHeader isDark>
        {!isSm ? <WhatsappButton wide /> : undefined}
      </EnterprisesHeader>

      <div className={style['enterprises-list__hero']}>
        <figure className={style['enterprises-list__hero-background']}>
          <div
            className={style['enterprises-list__hero-background-content']}
            style={{ backgroundImage: `url(${backgroundImage.src})` }}
          />
        </figure>

        <article className={style['enterprises-list__hero-content']}>
          <small>Seu novo lote está aqui</small>

          <h1>Lotes selecionados próximos de você</h1>

          <h2>
            Na Vizi Lotes, simplificamos o caminho para que você alcance seu
            sonho de possuir um terreno próprio. Aqui você encontrará lotes
            negociados com os principais loteadores do Brasil, garantindo os
            melhores produtos para você.
          </h2>
        </article>
      </div>
    </div>
  );
}
