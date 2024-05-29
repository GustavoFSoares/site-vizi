'use client';

import { useCallback, useMemo, useState } from 'react';

import EnterpriseItem, { EnterpriseItemProps } from '@molecules/EnterpriseItem';

import style from './enterprisesList.module.scss';
import Button from '@atoms/Button';

type Props = {
  list: EnterpriseItemProps[];
};

export default function ItemsList({ list }: Props) {
  const [showAll, setShowAll] = useState(false);

  const MAX_ITEMS = 6;

  const filteredList = useMemo<EnterpriseItemProps[]>(() => {
    if (showAll) {
      return list;
    }

    return list.slice(0, MAX_ITEMS);
  }, [list, showAll]);

  const handleSeeAll = useCallback(() => {
    setShowAll((ev) => !ev);
  }, [setShowAll]);

  return (
    <article className={style['enterprises-list__items-list']}>
      {filteredList.map((item) => (
        <EnterpriseItem key={item.id} {...item} />
      ))}

      {list.length > MAX_ITEMS && (
        <Button onClick={handleSeeAll}>
          {!showAll && <span>Ver mais</span>}
          {showAll && <span>Ver menos</span>}
        </Button>
      )}
    </article>
  );
}
