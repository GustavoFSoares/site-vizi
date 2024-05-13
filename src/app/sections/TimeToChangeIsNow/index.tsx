import PageSection from '@atoms/PageSection';
import SectionSubtitle from '@atoms/SectionSubtitle';
import SectionTitle from '@atoms/SectionTitle';

import Home from '@assets/icons/home.svg';
import Like from '@assets/icons/like.svg';
import Smile from '@assets/icons/smile.svg';
import Background from '@assets/time-to-change-is-now-background.png';

import TimeToChangeItem, { TimeToChangeItemProps } from './TimeToChangeItem';

import style from './timeToChangeIsNow.module.scss';

export default function TimeToChangeIsNow() {
  const items: TimeToChangeItemProps[] = [
    {
      title: 'Sua vida mais fácil',
      description:
        'Na Vizi Lotes você encontrará o lugar perfeito para realizar seus sonhos.',
      icon: Home,
    },
    {
      title: 'Lotes selecionados',
      description:
        'Buscamos as melhores opções em lotes para disponibilizar para você.',
      icon: Like,
    },
    {
      title: 'Mais próximo de você',
      description:
        'A Vizi está disponível para você o tempo todo. Oferecemos serviços exclusivos, atendimento personalizado e benefícios únicos.',
      icon: Smile,
    },
  ];

  return (
    <PageSection containerClassName={style['time-to-change-is-now__bg-color']}>
      <SectionTitle
        decorator='hide'
        className={style['time-to-change-is-now__title']}
      >
        A hora de mudar é agora
      </SectionTitle>

      <SectionSubtitle className={style['time-to-change-is-now__description']}>
        <span>Mudanças geralmente vêm para o bem. </span>
        <span>Se acontecerem de maneira mais fácil, melhor.</span>
      </SectionSubtitle>

      <ul className={style['time-to-change-is-now__items']}>
        {items.map((item, index) => (
          <TimeToChangeItem key={index} {...item} />
        ))}
      </ul>

      <figure className={style['time-to-change-is-now__figure']}>
        <div
          className={style['time-to-change-is-now__figure-image']}
          style={{
            backgroundImage: `url(${Background.src})`,
          }}
        />
      </figure>
    </PageSection>
  );
}
