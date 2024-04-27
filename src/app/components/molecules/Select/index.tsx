'use client';

import { useMemo, useState } from 'react';

import bindClass from '@helpers/bindClass';

import EnterpriseButton from '@atoms/EnterpriseButton';

import SelectList, { OptionType } from './SelectList';

import style from './select.module.scss';

type Props = {
  label: string;
  className?: string;
  options?: OptionType[];
  onSelect?: (item: string | null) => void;
};

export default function Select({
  className,
  label,
  options = [],
  onSelect,
}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<OptionType | null>(null);

  function handleToggle() {
    setIsOpen((state) => !state);
  }

  function handleLeave() {
    setIsOpen(false);
  }

  function handleSelect(option: OptionType) {
    setIsOpen(false);
    setSelected(option);

    if (onSelect) {
      onSelect(option.value);
    }
  }

  const buttonContent = useMemo(() => {
    if (!selected) {
      return label;
    }

    return selected.label;
  }, [selected, label]);

  const preparedOptions = useMemo<OptionType[]>(() => {
    return [{ label: label, value: null }, ...options];
  }, [options, label]);

  return (
    <div
      className={bindClass(style['select'], className)}
      onMouseLeave={handleLeave}
    >
      <EnterpriseButton onClick={handleToggle}>
        <div className={style['select__button-content']}>
          <span className={style['select__button-label']}>{buttonContent}</span>

          <div
            className={bindClass(
              style['select__button-arrow'],
              isOpen && style['select__button-arrow--open']
            )}
          >
            <svg
              width='26'
              height='26'
              viewBox='0 0 26 26'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M11.9393 19.1544C12.5251 19.7402 13.4749 19.7402 14.0607 19.1544L23.6066 9.6085C24.1924 9.02271 24.1924 8.07297 23.6066 7.48718C23.0208 6.90139 22.0711 6.90139 21.4853 7.48718L13 15.9725L4.51472 7.48718C3.92893 6.90139 2.97919 6.90139 2.3934 7.48718C1.80761 8.07297 1.80761 9.02271 2.3934 9.6085L11.9393 19.1544ZM11.5 17.9053L11.5 18.0938L14.5 18.0938L14.5 17.9053L11.5 17.9053Z'
                fill='white'
                fillOpacity='0.4'
              />
            </svg>
          </div>
        </div>
      </EnterpriseButton>

      <SelectList
        selected={selected}
        isOpen={isOpen}
        options={preparedOptions}
        onSelect={handleSelect}
      />
    </div>
  );
}
