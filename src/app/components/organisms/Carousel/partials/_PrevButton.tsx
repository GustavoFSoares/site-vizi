import BaseButton, { ButtonProps } from './_BaseButton';

export function PrevButton({ disabled, onClick, className }: ButtonProps) {
  return (
    <BaseButton
      position='prev'
      disabled={disabled}
      onClick={onClick}
      className={className}
    >
      <svg
        width='5'
        height='9'
        viewBox='0 0 5 9'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M0.637315 4.14645C0.442053 4.34171 0.442053 4.65829 0.637315 4.85355L3.8193 8.03553C4.01456 8.2308 4.33114 8.2308 4.5264 8.03553C4.72166 7.84027 4.72166 7.52369 4.5264 7.32843L1.69798 4.5L4.5264 1.67157C4.72166 1.47631 4.72166 1.15973 4.5264 0.964466C4.33114 0.769204 4.01456 0.769204 3.8193 0.964466L0.637315 4.14645ZM1.3999 4L0.990869 4L0.990869 5L1.3999 5L1.3999 4Z'
          fill='currentColor'
        />
      </svg>
    </BaseButton>
  );
}
