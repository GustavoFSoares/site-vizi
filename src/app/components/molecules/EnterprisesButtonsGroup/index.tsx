'use client';

import { useEffect, useState } from 'react';

import EnterpriseButton from '@atoms/EnterpriseButton';

import styles from './enterprisesButtonsGroup.module.scss';

type Props = {
  options: {
    label: string;
    value: string;
  }[];
  uppercase?: boolean;
  onSelect?: (selection: string | null) => void;
};

export default function EnterprisesButtonsGroup({
  options,
  onSelect,
  uppercase,
}: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    if (onSelect) {
      onSelect(selected);
    }
  }, [selected, onSelect]);

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
          uppercase={uppercase}
          selected={optionItem.value === selected}
          key={optionItem.value}
        >
          {optionItem.label}
        </EnterpriseButton>
      ))}
    </div>
  );
}
