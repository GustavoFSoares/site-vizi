import { NextRequest } from 'next/server';

import EntepriseBackground from '@assets/enterprise-background.png';
import EntepriseLogo from '@assets/enterprise-logo.png';
import { IEnterpise } from '@interfaces/EnterpriseInterface';

type Params = {
  params: {
    id: string;
  };
};

export async function GET(req: NextRequest, { params: { id } }: Params) {
  const data: IEnterpise = {
    id: '2',
    title: 'LIFE GARDEN',
    infrastructure: {
      logo: EntepriseLogo,
      background: EntepriseBackground,
      description: [
        'O Life Garden possuí uma infraestrutura completa, para aqueles que buscam conforto, segurança e modernidade para toda a família, com diversas áreas de lazer e ótima localização na cidade de São José dos Pinhais.',
        'O empreendimento é um ótimo potencial de investimento para sua moradia.',
      ],
      inputValue: {
        times: 180,
        price: 2521.0,
      },
      status: ['Pré-lançamento', 'Loteamento'],
      location: {
        city: 'Campo Grande',
        state: 'São Paulo',
      },
      landPlotSize: '140,00M²',
      benefits: [
        'academia',
        'brinquedoteca',
        'centro-comercial',
        'ciclovia',
        'monitoramento',
        'piscina',
        'playground',
        'portaria',
        'quiosque',
        'salao-de-festas',
      ],
    },
  };

  data.id = id;
  data.title = `${data.title} ${id}`;

  return Response.json(data);
}
