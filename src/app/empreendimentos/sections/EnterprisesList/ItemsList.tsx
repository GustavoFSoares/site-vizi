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

  const showButton = useMemo<Boolean>(() => {
    return list.length > MAX_ITEMS;
  }, [list]);

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
    <article>
      <div className={style['enterprises-list__items-list']}>
        {filteredList.map((item) => (
          <EnterpriseItem key={item.id} {...item} />
        ))}
      </div>

      {showButton && (
        <div className={style['enterprises-list__load-button-container']}>
          <Button
            className={style['enterprises-list__load-button']}
            onClick={handleSeeAll}
          >
            {!showAll && <span>Ver mais</span>}
            {showAll && <span>Ver menos</span>}
          </Button>
        </div>
      )}
    </article>
  );
}
