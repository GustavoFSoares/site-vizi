import Button from '@atoms/Button';
import PageSection from '@atoms/PageSection';
import SectionSubtitle from '@atoms/SectionSubtitle';
import ShortSectionTitle from '@atoms/ShortSectionTitle';

import BenefitItem from './BenefitItem';

import dollar from '@assets/icons/dollar.svg';
import smartphone from '@assets/icons/smartphone.svg';
import star from '@assets/icons/star.svg';
import user from '@assets/icons/user.svg';

import style from './benefits.module.scss';

export default function Benefits() {
  const benefits = [
    { text: 'Financiamento Próprio', icon: dollar },
    { text: 'Aplicativo Bairru', icon: smartphone },
    { text: 'Programa de Vantagens', icon: star },
    { text: 'Atendimento Personalizado', icon: user },
  ];

  return (
    <PageSection className={style['benefits']}>
      <div className={style['benefits__header']}>
        <ShortSectionTitle className={style['benefits__title']}>
          Vantagens
        </ShortSectionTitle>

        <SectionSubtitle className={style['benefits__subtitle']}>
          Comprar com a Vizi é simples, seguro e prático!
        </SectionSubtitle>

        <Button className={style['benefits__cta']}>Saiba mais</Button>
      </div>

      <div className={style['benefits__list']}>
        {benefits.map((item, index) => (
          <BenefitItem key={index} text={item.text} icon={item.icon} />
        ))}
      </div>
    </PageSection>
  );
}
