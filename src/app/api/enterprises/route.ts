import { NextRequest } from 'next/server';
import { NextApiResponse } from 'next';

import EntepriseBackground from '@assets/enterprise-background.png';
import EntepriseLogo from '@assets/enterprise-logo.png';
import { EnterpriseItemProps } from '@molecules/EnterpriseItem';

const data: EnterpriseItemProps[] = [
  {
    id: 1,
    background: EntepriseBackground,
    title: 'LIFE GARDEN 1',
    description: 'Lotes a partir de 140, 00M²',
    location: 'São José dos Pinhais',
    logo: EntepriseLogo,
    benefits: ['PR', 'Condomínio fechado', 'Pronto para morar'],
    ctaLink: '#',
  },
  {
    id: 2,
    background: EntepriseBackground,
    title: 'LIFE GARDEN 2',
    description: 'Lotes a partir de 140, 00M²',
    location: 'São José dos Pinhais',
    logo: EntepriseLogo,
    benefits: ['PR', 'Condomínio fechado', 'Pronto para morar'],
    ctaLink: '#',
  },
  {
    id: 3,
    background: EntepriseBackground,
    title: 'LIFE GARDEN 3',
    description: 'Lotes a partir de 140, 00M²',
    location: 'São José dos Pinhais',
    logo: EntepriseLogo,
    benefits: ['PR', 'Condomínio fechado', 'Pronto para morar'],
    ctaLink: '#',
  },
  {
    id: 4,
    background: EntepriseBackground,
    title: 'LIFE GARDEN 4',
    description: 'Lotes a partir de 140, 00M²',
    location: 'São José dos Pinhais',
    logo: EntepriseLogo,
    benefits: ['PR', 'Condomínio fechado', 'Pronto para morar'],
    ctaLink: '#',
  },
  {
    id: 5,
    background: EntepriseBackground,
    title: 'LIFE GARDEN 5',
    description: 'Lotes a partir de 140, 00M²',
    location: 'São José dos Pinhais',
    logo: EntepriseLogo,
    benefits: ['PR', 'Condomínio fechado', 'Pronto para morar'],
    ctaLink: '#',
  },
  {
    id: 6,
    background: EntepriseBackground,
    title: 'LIFE GARDEN 6',
    description: 'Lotes a partir de 140, 00M²',
    location: 'São José dos Pinhais',
    logo: EntepriseLogo,
    benefits: ['PR', 'Condomínio fechado', 'Pronto para morar'],
    ctaLink: '#',
  },
  {
    id: 7,
    background: EntepriseBackground,
    title: 'LIFE GARDEN 7',
    description: 'Lotes a partir de 140, 00M²',
    location: 'São José dos Pinhais',
    logo: EntepriseLogo,
    benefits: ['PR', 'Condomínio fechado', 'Pronto para morar'],
    ctaLink: '#',
  },
  {
    id: 8,
    background: EntepriseBackground,
    title: 'LIFE GARDEN 8',
    description: 'Lotes a partir de 140, 00M²',
    location: 'São José dos Pinhais',
    logo: EntepriseLogo,
    benefits: ['PR', 'Condomínio fechado', 'Pronto para morar'],
    ctaLink: '#',
  },
];

export async function GET(req: NextRequest) {
  return Response.json(data);
}
