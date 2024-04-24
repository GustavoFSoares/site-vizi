import bindClass from '@helpers/bindClass';
import style from './selectList.module.scss';

export type OptionType = {
  value: string | null;
  label: string;
};

type Props = {
  options: OptionType[];
  isOpen: boolean;
  selected: OptionType | null;
  onSelect?: (item: OptionType) => void;
};

export default function SelectList({
  options,
  isOpen,
  selected,
  onSelect,
}: Props) {
  function handleSelect(option: OptionType) {
    if (onSelect) {
      onSelect(option);
    }
  }

  return (
    <ul
      className={bindClass(
        style['select-list'],
        isOpen && style['select-list--is-open']
      )}
      role='listbox'
      id='select-dropdown'
    >
      {options.map((item, index) => (
        <li
          key={index}
          className={bindClass(
            style['select-list__item'],
            item.value === selected?.value &&
              style['select-list__item--selected']
          )}
        >
          <label>
            <input
              name='teste'
              type='radio'
              defaultChecked={item.value === selected?.value}
              onChange={() => handleSelect(item)}
            />
            {item.label}
          </label>
        </li>
      ))}
    </ul>
  );
}
