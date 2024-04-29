'use client';

import { useBreakpoints } from '@hooks/useBreakpoints';

import EnterprisesHeader from '@molecules/EnterprisesHeader';

import SeeMoreButton from '../SeeMoreButton';

import style from './enterprisesList.module.scss';

export default function EnterprisesList() {
  const { isSm } = useBreakpoints();
  return (
    <div className={style['enterprises-list']}>
      {isSm && (
        <div className={style['enterprises-list__see-more']}>
          <SeeMoreButton />
        </div>
      )}

      <EnterprisesHeader>
        <SeeMoreButton />
      </EnterprisesHeader>
    </div>
  );
}
