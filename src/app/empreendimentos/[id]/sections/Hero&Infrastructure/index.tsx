import PageSection from '@atoms/PageSection';

import style from './hero&Infrastructure.module.scss';
import { IEnterpriseInfrastructure } from '@interfaces/EnterpriseInterface';

type Props = {
  infrastructure: IEnterpriseInfrastructure;
};

export default function HeroInfrastructure({
  infrastructure: { background },
}: Props) {
  return (
    <PageSection
      className={style['hero-infraestructure']}
      containerClassName={style['hero-infraestructure__container']}
    >
      <figure
        className={style['hero-infraestructure__background']}
        style={{ backgroundImage: `url(${background.src})` }}
      />

      <div className={style['hero-infraestructure__content']}>
        <h1>
          Infraestrutura completa, conforto, segurança e modernidade para toda a
          família
        </h1>

        <article></article>

        <article className='information'></article>
      </div>
    </PageSection>
  );
}
