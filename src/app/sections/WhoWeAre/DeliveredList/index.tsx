'use client';

import { useMemo, useState } from 'react';
import { useBreakpoints } from '@hooks/useBreakpoints';

import DeliveredItem from '../DeliveredItem';

type Props = {
  className: string;
};

export default function DeliveredList({ className }: Props) {
  const { isLg } = useBreakpoints();

  const [deliveredItens] = useState([
    { value: '29', label: 'cidades presentes' },
    { value: '20mil', label: 'lotes viabilizados' },
    { value: '41', label: 'projetos viabilizados' },
    { value: '904m', label: 'VGV Total' },
  ]);

  const orderedDeliveredItens = useMemo(() => {
    if (isLg) {
      return [0, 2, 1, 3].map((index) => deliveredItens[index]);
    }

    return deliveredItens;
  }, [isLg, deliveredItens]);

  return (
    <div className={className}>
      {orderedDeliveredItens.map(({ label, value }, index) => (
        <DeliveredItem key={index} label={label} value={value} />
      ))}
    </div>
  );
}
