'use client';

import { useBreakpoints } from '@hooks/useBreakpoints';
import EnterpriseButton from './partials/EnterpriseButton';

export default function EnterprisesHeader() {
  const { isLg, isSm } = useBreakpoints();

  const statesButtons = ['sp', 'pr', 'sc', 'rs'];

  return (
    <div>
      <div className='states-buttons'>
        {isLg &&
          statesButtons.map((stateButton) => (
            <EnterpriseButton key={stateButton}>{stateButton}</EnterpriseButton>
          ))}
      </div>
    </div>
  );
}
