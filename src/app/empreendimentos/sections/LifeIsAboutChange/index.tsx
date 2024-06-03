import Button from '@atoms/Button';
import PageSection from '@atoms/PageSection';
import SectionTitle from '@atoms/SectionTitle';

import Background from '@assets/life-is-about-change-background.png';

import style from './lifeIsAboutChange.module.scss';

export default function LifeIsAboutChange() {
  return (
    <PageSection
      sectionId='life-is-about-change'
      containerClassName={style['life-is-about-change__container']}
      className={style['life-is-about-change']}
      style={{
        backgroundImage: `url(${Background.src})`,
      }}
    >
      <article className={style['life-is-about-change__wrapper']}>
        <div className={style['life-is-about-change__content']}>
          <SectionTitle className={style['life-is-about-change__title']}>
            <span>A vida é feita de mudanças e a Vizi</span>
            <span>quer participar da sua próxima mudança</span>
          </SectionTitle>

          <div className={style['life-is-about-change__description']}>
            <p>
              Nascemos da vontade de ajudar a solucionar o grande problema de
              défict habitacional do Brasil. A falta de financiamento para a
              compra de lotes fez com que uma parcela da população não pudesse
              realizar o sonho da casa própria.
            </p>

            <p>
              Nossa linha de crédito facilitada existe porque acreditamos nos
              desejos de cada um. Sonhe. E conte com a Vizi para realizar.
            </p>
          </div>

          <Button className={style['life-is-about-change__button']}>
            Saiba mais
          </Button>
        </div>
      </article>
    </PageSection>
  );
}
