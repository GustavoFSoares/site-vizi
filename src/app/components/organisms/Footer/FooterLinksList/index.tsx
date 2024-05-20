import FooterLinksGroup, { FooterLinkProps } from '../FooterLinksGroup';

import style from './footerLinksList.module.scss';

export default function FooterLinksList() {
  const linkGroups: FooterLinkProps[] = [
    {
      page: '/',
      title: 'Home',
      links: [
        { label: 'Sobre a Vizi', target: 'sobre-a-vizi' },
        { label: 'Vantagens', target: 'vantagens' },
        { label: 'Empreendimentos', target: 'empreendimentos' },
        { label: 'Entre em contato', target: 'entre-em-contato' },
        { label: 'A hora de mudar é agora', target: 'a-hora-de-mudar-e-agora' },
        { label: 'Depoimentos', target: 'depoimentos' },
        { label: 'Fale com um consultor', target: 'fale-com-um-consultor' },
      ],
    },
    {
      page: '/sobre',
      title: 'Sobre',
      links: [
        { label: 'Vizi', target: 'vizi' },
        { label: 'Diferenciais', target: 'diferenciais' },
        { label: 'Vantagens Vizi Lotes', target: 'vantagens-vizi-lotes' },
        { label: 'Programa de Vantagens', target: 'programa-de-vantagens' },
        { label: 'Outras vantagens', target: 'outras-vantagens' },
      ],
    },
    {
      page: '/empreendimentos',
      title: 'Empreendimentos',
      links: [
        { label: 'Empreendimento 1', id: '1' },
        { label: 'Empreendimento 2', id: '2' },
      ],
    },
    {
      page: '/perguntas-frequentes',
      title: 'Perguntas Frequentes',
      links: [
        { label: 'Pergunta 1', id: '1' },
        { label: 'Pergunta 2', id: '2' },
      ],
    },
  ];

  return (
    <div className={style['footer-links-list']}>
      {linkGroups.map((linkGroup) => (
        <FooterLinksGroup key={linkGroup.page} {...linkGroup} />
      ))}
    </div>
  );
}
