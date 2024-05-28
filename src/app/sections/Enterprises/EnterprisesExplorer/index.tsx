'use client';

import { useBreakpoints } from '@hooks/useBreakpoints';

import EnterprisesHeader from '@molecules/EnterprisesHeader';
import { EnterpriseItemProps } from '@molecules/EnterpriseItem';

import SeeMoreButton from '../SeeMoreButton';

import style from './enterprisesExplorer.module.scss';
import EnterprisesList from '../EnterprisesList';

type Props = {
  list: EnterpriseItemProps[];
};

export default function EnterprisesExplorer({ list }: Props) {
  const { isSm } = useBreakpoints();
  return (
    <div className={style['enterprises-explorer']}>
      {isSm && (
        <div className={style['enterprises-explorer__see-more']}>
          <SeeMoreButton />
        </div>
      )}

      <EnterprisesHeader>
        <SeeMoreButton />
      </EnterprisesHeader>

      <EnterprisesList list={list} />
    </div>
  );
}
