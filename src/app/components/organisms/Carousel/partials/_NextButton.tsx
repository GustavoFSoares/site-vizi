import BaseButton, { ButtonProps } from './_BaseButton';

export function NextButton({ onClick, disabled }: ButtonProps) {
  return (
    <BaseButton position='next' disabled={disabled} onClick={onClick}>
      <svg
        width='5'
        height='9'
        viewBox='0 0 5 9'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M4.36256 4.85355C4.55782 4.65829 4.55782 4.34171 4.36256 4.14645L1.18058 0.964467C0.98532 0.769204 0.668738 0.769204 0.473476 0.964467C0.278213 1.15973 0.278213 1.47631 0.473476 1.67157L3.3019 4.5L0.473475 7.32843C0.278213 7.52369 0.278213 7.84027 0.473475 8.03553C0.668738 8.2308 0.98532 8.2308 1.18058 8.03553L4.36256 4.85355ZM3.59998 5L4.00901 5L4.00901 4L3.59998 4L3.59998 5Z'
          fill='white'
        />
      </svg>
    </BaseButton>
  );
}
