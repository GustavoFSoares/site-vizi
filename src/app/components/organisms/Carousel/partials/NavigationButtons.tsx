import { NextButton } from './_NextButton';
import { PrevButton } from './_PrevButton';

import styles from '../styles/buttons.module.scss';

export default function NavigationButtons() {
  return (
    <div>
      <PrevButton />

      <NextButton />
    </div>
  );
}
