'use client';
import { useState } from 'react';

import { useBreakpoints } from '@hooks/useBreakpoints';

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

  return (
    <div className={styles['enterprises-header']}>
      {isLg && (
        <EnterprisesButtonsGroup
          options={statesButtons}
          onSelectionChange={(d) => console.log(d)}
        />
      )}
    </div>
  );
}
