import type { StaticImageData } from 'next/image';

export type Benefits =
  | 'academia'
  | 'brinquedoteca'
  | 'centro-comercial'
  | 'ciclovia'
  | 'monitoramento'
  | 'piscina'
  | 'playground'
  | 'portaria'
  | 'quiosque'
  | 'salao-de-festas';

export enum Benefits2 {
  Academia = 'academia',
  Brinquedoteca = 'brinquedoteca',
  CentroComercial = 'centro-comercial',
  Ciclovia = 'ciclovia',
  Monitoramento = 'monitoramento',
  Piscina = 'piscina',
  Playground = 'playground',
  Portaria = 'portaria',
  Quiosque = 'quiosque',
  SalaoDeFestas = 'salao-de-festas',
}

export interface IEnterpriseInfrastructure {
  logo: StaticImageData;
  background: StaticImageData;
  description: string[];
  inputValue: {
    times: number;
    price: number;
  };
  status: string[];
  location: {
    city: string;
    state: string;
  };
  landPlotSize: string;
  benefits: Benefits[];
}

export interface IEnterpise {
  id: string;
  title: string;
  infrastructure: IEnterpriseInfrastructure;
}
