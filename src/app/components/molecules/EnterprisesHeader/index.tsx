'use client';

import { useState } from 'react';

import { useBreakpoints } from '@hooks/useBreakpoints';

import Select from '@molecules/Select';
import EnterprisesButtonsGroup from '@molecules/EnterprisesButtonsGroup';

import styles from './enterprisesHeader.module.scss';
import bindClass from '@helpers/bindClass';

type Props = {
  children?: JSX.Element;
  isDark?: boolean;
};

export default function EnterprisesHeader({ children, isDark }: Props) {
  const { isXl, isLg, isSm } = useBreakpoints();

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
    <div
      className={bindClass(
        styles['enterprises-header'],
        styles['enterprises-header--is-dark']
      )}
    >
      <div className={styles['enterprises-header__content']}>
        <div className={styles['enterprises-header__location']}>
          {!isLg && (
            <Select
              className={styles['enterprises-header__location-states']}
              label='Estados'
              options={statesButtons}
              isDark={isDark}
            />
          )}

          {isLg && (
            <EnterprisesButtonsGroup
              className={styles['enterprises-header__location-states']}
              uppercase
              options={statesButtons}
              isDark={isDark}
            />
          )}

          <Select
            className={styles['enterprises-header__location-cities']}
            label='Cidades'
            options={cities}
            isDark={isDark}
          />
        </div>

        <div className={styles['enterprises-header__business-status']}>
          {!isXl && (
            <Select
              label='Status'
              options={businessStatus}
              onSelect={handleSelectStatus}
              isDark={isDark}
            />
          )}

          {isXl && (
            <EnterprisesButtonsGroup
              options={businessStatus}
              onSelect={handleSelectStatus}
              isDark={isDark}
            />
          )}
        </div>

        {!isSm && (
          <div className={styles['enterprises-header__contact-button']}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
