import PageSection from '@atoms/PageSection';
import SectionTitle from '@atoms/SectionTitle';

import EnterprisesHeader from '@molecules/EnterprisesHeader';

import styles from './enterprises.module.scss';
import SeeMoreButton from './SeeMoreButton';

export default function Enterprises() {
  return (
    <PageSection className={styles['enterprises']}>
      <div className={styles['enterprises__header']}>
        <SectionTitle>Empreendimentos</SectionTitle>

        <p>
          Confira os empreendimentos disponíveis no site da Vizi Lotes e
          encontre, aqui, seu próximo endereço ou investimento
        </p>
      </div>

      <div className={styles['enterprises__content']}>
        <EnterprisesHeader>
          <SeeMoreButton />
        </EnterprisesHeader>
      </div>
    </PageSection>
  );
}
