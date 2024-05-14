import PageSection from '@atoms/PageSection';
import SectionSubtitle from '@atoms/SectionSubtitle';
import SectionTitle from '@atoms/SectionTitle';
import Carousel from '@organisms/Carousel';

import style from './depositions.module.scss';

export default function Depositions() {
  return (
    <PageSection className={style['depositions']}>
      <SectionTitle className={style['depositions__title']} decorator='yellow'>
        Depoimentos
      </SectionTitle>

      <SectionSubtitle className={style['depositions__description']}>
        Confira os relatos de quem já contou com a ajuda da Vizi para realizar
        sonhos! Separamos alguns depoimentos de compradores satisfeitos, que
        adquiriram lotes para morar, investir ou montar seu negócio em parceria
        com a Vizi Lotes:
      </SectionSubtitle>

      <Carousel className={style['depositions__carousel']}>
        <Carousel.Slide>
          <h1>Item</h1>
        </Carousel.Slide>
      </Carousel>
    </PageSection>
  );
}
