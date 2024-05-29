'use client';

import PageSection from '@atoms/PageSection';
import WhatsappButton from '@atoms/WhatsappButton';
import EnterprisesHeader from '@molecules/EnterprisesHeader';

import { useBreakpoints } from '@hooks/useBreakpoints';

import backgroundImage from '@assets/enterprises/hero.png';

import style from './enterprisesList.module.scss';

export default function EnterprisesList() {
  const { isSm } = useBreakpoints();

  return (
    <PageSection className={style['enterprises-list']}>
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

            <h1>Lotes selecionados próximos de você - {isSm.toString()}</h1>

            <h2>
              Na Vizi Lotes, simplificamos o caminho para que você alcance seu
              sonho de possuir um terreno próprio. Aqui você encontrará lotes
              negociados com os principais loteadores do Brasil, garantindo os
              melhores produtos para você.
            </h2>
          </article>
        </div>

        {isSm && (
          <div className={style['enterprises-list__whatsapp-button']}>
            <WhatsappButton />
          </div>
        )}
      </div>
    </PageSection>
  );
}
