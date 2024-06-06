import getHost from '@helpers/getHost';

import { IEnterpise } from '@interfaces/EnterpriseInterface';

import Header from './sections/Header';
import HeroInfrastructure from './sections/Hero&Infrastructure';

import EmptySection from './sections/EmptySection';

export default async function EnterprisesById() {
  const { api } = getHost();

  async function getEnterpriseData(): Promise<IEnterpise> {
    const data = await fetch(`${api}/enterprises/1`);

    return await data.json();
  }

  const enterpriseData = await getEnterpriseData();

  return (
    <>
      <Header businessName={enterpriseData.title} />

      <HeroInfrastructure infrastructure={enterpriseData.infrastructure} />

      <EmptySection />
    </>
  );
}
