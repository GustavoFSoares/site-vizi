'use client';

import { useRef, useState } from 'react';

import { useBreakpoints } from '@hooks/useBreakpoints';

import Select from '@molecules/Select';
import EnterprisesButtonsGroup from '@molecules/EnterprisesButtonsGroup';

import styles from './enterprisesHeader.module.scss';

type Props = {
  children?: JSX.Element;
};

export default function EnterprisesHeader({ children }: Props) {
  const { isXl, isLg, isSm } = useBreakpoints();

  const navbarRef = useRef<HTMLDivElement>(null);
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

  function handleSelectStatus(item: string | null) {}

  return (
    <>
      <div ref={navbarRef} className={styles['enterprises-header']}>
        <div className={styles['enterprises-header__location']}>
          {!isLg && (
            <Select
              className={styles['enterprises-header__location-states']}
              label='Estados'
              options={statesButtons}
            />
          )}

          {isLg && (
            <EnterprisesButtonsGroup
              className={styles['enterprises-header__location-states']}
              uppercase
              options={statesButtons}
            />
          )}

          <Select
            className={styles['enterprises-header__location-cities']}
            label='Cidades'
            options={cities}
          />
        </div>

        <div className={styles['enterprises-header__business-status']}>
          {!isXl && (
            <Select
              label='Status'
              options={businessStatus}
              onSelect={handleSelectStatus}
            />
          )}

          {isXl && (
            <EnterprisesButtonsGroup
              options={businessStatus}
              onSelect={handleSelectStatus}
            />
          )}
        </div>

        {!isSm && (
          <div className={styles['enterprises-header__contact-button']}>
            {children}
          </div>
        )}
      </div>

      {isSm && <div style={{ height: navbarRef.current?.clientHeight }}></div>}
    </>
  );
}
