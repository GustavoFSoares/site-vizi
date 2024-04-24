'use client';

import { useEffect, useState } from 'react';

import EnterpriseButton from '@atoms/EnterpriseButton';

import styles from './enterprisesButtonsGroup.module.scss';

type Props = {
  options: {
    label: string;
    value: string;
  }[];
  onSelectionChange?: (selection: string | null) => void;
};

export default function EnterprisesButtonsGroup({
  options,
  onSelectionChange,
}: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    if (onSelectionChange) {
      onSelectionChange(selected);
    }
  }, [selected, onSelectionChange]);

  function handleSelectItem(optionItem: string) {
    if (optionItem === selected) {
      setSelected(null);
      return;
    }

    setSelected(optionItem);
  }

  return (
    <div className={styles['enterprises-buttons-group']}>
      {options.map((optionItem) => (
        <EnterpriseButton
          onClick={() => handleSelectItem(optionItem.value)}
          uppercase
          selected={optionItem.value === selected}
          key={optionItem.value}
        >
          {optionItem.label}
        </EnterpriseButton>
      ))}
    </div>
  );
}
