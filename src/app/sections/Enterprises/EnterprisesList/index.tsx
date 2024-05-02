'use client';

import EnterpriseItem, { EnterpriseItemProps } from '@molecules/EnterpriseItem';

import EnterprisesListWrapper from './Wrapper';

import style from './enterprisesList.module.scss';
import { useBreakpoints } from '@hooks/useBreakpoints';
import { useMemo } from 'react';

type Props = {
  list: EnterpriseItemProps[];
};

export default function EnterprisesList({ list }: Props) {
  const { isSm } = useBreakpoints();

  const cardsWrapper = useMemo(() => {
    return isSm ? 'carousel' : 'normal';
  }, [isSm]);

  return (
    <div className={style['enterprises-list']}>
      <EnterprisesListWrapper
        shape={cardsWrapper}
        className={style['enterprises-list__wrapper']}
      >
        {list.map((item, index) => (
          <EnterpriseItem
            className={style['enterprises-explorer__item']}
            key={index}
            {...item}
          />
        ))}
      </EnterprisesListWrapper>
    </div>
  );
}
