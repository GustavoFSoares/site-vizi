import PageSection from '@atoms/PageSection';
import SectionTitle from '@atoms/SectionTitle';

import styles from './enterprises.module.scss';
import EnterprisesExplorer from './EnterprisesExplorer';

export default function Enterprises() {
  return (
    <PageSection sectionId='enterprise' className={styles['enterprises']}>
      <div className={styles['enterprises__header']}>
        <SectionTitle decorator='blue'>Empreendimentos</SectionTitle>

        <p>
          Confira os empreendimentos disponíveis no site da Vizi Lotes e
          encontre, aqui, seu próximo endereço ou investimento
        </p>
      </div>

      <article className={styles['enterprises__content']}>
        <EnterprisesExplorer />
      </article>
    </PageSection>
  );
}
