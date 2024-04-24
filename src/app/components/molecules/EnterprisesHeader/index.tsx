'use client';

import React, { useState } from 'react';

import { useBreakpoints } from '@hooks/useBreakpoints';

import Select from '@molecules/Select';
import EnterprisesButtonsGroup from '@molecules/EnterprisesButtonsGroup';

import styles from './enterprisesHeader.module.scss';

export default function EnterprisesHeader() {
  const { isLg, isSm } = useBreakpoints();

  const [statesButtons] = useState([
    { label: 'sp', value: 'sp' },
    { label: 'pr', value: 'pr' },
    { label: 'sc', value: 'sc' },
    { label: 'rs', value: 'rs' },
  ]);

  const [cities] = useState([
    { label: 'Canoas', value: 'canoas' },
    { label: 'Porto Alegre', value: 'porto-alegre' },
    { label: 'Pelotas', value: 'pelotas' },
  ]);

  const [businessStatus] = useState([
    { label: 'Pre-lançamento', value: 'Pre-lançamento' },
    { label: 'Lançamento', value: 'Lançamento' },
    { label: 'Em obra', value: 'Em obra' },
    { label: 'Pronto para morar', value: 'Pronto para morar' },
    { label: 'Pronto para construir', value: 'Pronto para construir' },
  ]);

  function handleSelectStatus(item: string | null) {
    console.log('status', item);
  }

  return (
    <div className={styles['enterprises-header']}>
      <div className={styles['enterprises-header__cities-wrapper']}>
        {isLg && <EnterprisesButtonsGroup uppercase options={statesButtons} />}

        <Select className='w-[244px]' label='Cidades' options={cities} />
      </div>

      <div className={styles['enterprises-header__business-status']}>
        {!isLg && (
          <Select
            label='Status'
            options={businessStatus}
            onSelect={handleSelectStatus}
          />
        )}

        {isLg && (
          <EnterprisesButtonsGroup
            options={businessStatus}
            onSelect={handleSelectStatus}
          />
        )}
      </div>

      <div className={styles['enterprises-header__contact-button']}></div>
    </div>
  );
}
