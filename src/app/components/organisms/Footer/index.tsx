import PageSection from '@atoms/PageSection';

import FooterLinksList from './FooterLinksList';

import style from './footer.module.scss';

export default function Footer() {
  return (
    <PageSection
      className={style['footer']}
      containerClassName={style['footer__container']}
      element='footer'
    >
      <FooterLinksList />
    </PageSection>
  );
}
