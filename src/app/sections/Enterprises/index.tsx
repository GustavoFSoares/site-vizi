import getHost from '@helpers/getHost';

import PageSection from '@atoms/PageSection';
import SectionTitle from '@atoms/SectionTitle';

import { EnterpriseItemProps } from '@molecules/EnterpriseItem';

import styles from './enterprises.module.scss';
import EnterprisesExplorer from './EnterprisesExplorer';

export default async function Enterprises() {
  const MAX_ITEMS = 4;

  const { origin } = getHost();

  async function getEnterprises(): Promise<EnterpriseItemProps[]> {
    const res = await fetch(origin + '/api/enterprises');

    const data: any[] = await res.json();
    return data.slice(0, MAX_ITEMS);
  }

  const enterprisesList = await getEnterprises();

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
        <EnterprisesExplorer list={enterprisesList} />
      </article>
    </PageSection>
  );
}
