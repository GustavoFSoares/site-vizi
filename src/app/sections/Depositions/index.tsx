import PageSection from '@atoms/PageSection';
import SectionSubtitle from '@atoms/SectionSubtitle';
import SectionTitle from '@atoms/SectionTitle';

import DepositionsList from './DepositionsList';

import style from './depositions.module.scss';

export default function Depositions() {
  return (
    <PageSection sectionId='depositions' className={style['depositions']}>
      <SectionTitle className={style['depositions__title']} decorator='yellow'>
        Depoimentos
      </SectionTitle>

      <SectionSubtitle className={style['depositions__description']}>
        Confira os relatos de quem já contou com a ajuda da Vizi para realizar
        sonhos! Separamos alguns depoimentos de compradores satisfeitos, que
        adquiriram lotes para morar, investir ou montar seu negócio em parceria
        com a Vizi Lotes:
      </SectionSubtitle>

      <DepositionsList />
    </PageSection>
  );
}
