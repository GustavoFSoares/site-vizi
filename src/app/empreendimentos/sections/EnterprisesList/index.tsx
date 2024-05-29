import PageSection from '@atoms/PageSection';

import getHost from '@helpers/getHost';

import EnterpriseItem, { EnterpriseItemProps } from '@molecules/EnterpriseItem';

import EnterpriseListHeader from './EnterpriseListHeader';

import style from './enterprisesList.module.scss';

export default async function EnterprisesList() {
  const { api } = getHost();

  async function getEnterpriseList(): Promise<EnterpriseItemProps[]> {
    const res = await fetch(api + '/enterprises');
    return res.json();
  }

  const enterpriseList = await getEnterpriseList();

  return (
    <PageSection className={style['enterprises-list']}>
      <EnterpriseListHeader />

      <article className={style['enterprises-list__items-list']}>
        {enterpriseList.map((item) => (
          <EnterpriseItem key={item.id} {...item} />
        ))}
      </article>
    </PageSection>
  );
}
