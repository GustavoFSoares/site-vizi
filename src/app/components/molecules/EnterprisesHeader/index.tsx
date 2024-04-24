'use client';
import { useState } from 'react';

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

  return (
    <div className={styles['enterprises-header']}>
      {isLg && (
        <EnterprisesButtonsGroup
          options={statesButtons}
          // onSelectionChange={(d) => {}}
        />
      )}

      <Select
        className='w-[244px]'
        label='Cidades'
        options={cities}
        onSelect={(d) => console.log(d)}
      />
    </div>
  );
}
