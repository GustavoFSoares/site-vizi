'use client';

import { useEffect, useState } from 'react';

import EnterpriseButton from '@atoms/EnterpriseButton';

import styles from './enterprisesButtonsGroup.module.scss';
import bindClass from '@helpers/bindClass';

type Props = {
  className?: string;
  options: {
    label: string;
    value: string;
  }[];
  uppercase?: boolean;
  onSelect?: (selection: string | null) => void;
};

export default function EnterprisesButtonsGroup({
  className,
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
    <div className={bindClass(styles['enterprises-buttons-group'], className)}>
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
