import PageSection from '@atoms/PageSection';

import getHost from '@helpers/getHost';

import { EnterpriseItemProps } from '@molecules/EnterpriseItem';

import Header from './Header';

import style from './enterprisesList.module.scss';
import ItemsList from './ItemsList';

export default async function EnterprisesList() {
  const { api } = getHost();

  async function getEnterpriseList(): Promise<EnterpriseItemProps[]> {
    const res = await fetch(api + '/enterprises');
    return res.json();
  }

  const enterpriseList = await getEnterpriseList();

  return (
    <PageSection className={style['enterprises-list']}>
      <Header />

      <ItemsList list={enterpriseList} />
    </PageSection>
  );
}
