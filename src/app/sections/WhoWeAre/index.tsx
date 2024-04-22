import Button from '@atoms/Button';
import PageSection from '@atoms/PageSection';
import SectionSubtitle from '@atoms/SectionSubtitle';
import ShortSectionTitle from '@atoms/ShortSectionTitle';

import style from './whoWeAre.module.scss';

export default function WhoWeAre() {
  return (
    <PageSection className={style['who-we-are']}>
      <div className={style['who-we-are__header']}>
        <ShortSectionTitle>Quem somos</ShortSectionTitle>
        <SectionSubtitle>
          Um ecossistema completo para viabilizar a construção de sonhos
        </SectionSubtitle>
      </div>

      <div className={style['who-we-are__content']}>
        <p>
          Na Vizi Lotes, simplificamos o caminho para que você alcance seu
          desejo de possuir um terreno próprio.
        </p>

        <p>
          Especialistas no assunto, firmamos parcerias com as mais renomadas
          loteadoras do Brasil, realizando uma curadoria das principais
          oportunidades e garantindo os melhores lotes para você.
        </p>

        <Button className={style['who-we-are__cta']}>Saiba mais</Button>
      </div>
    </PageSection>
  );
}
