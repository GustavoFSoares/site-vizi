import Link from 'next/link';
import Image from 'next/image';

import Logo from '@assets/vizi-logo.svg';
import linkedin from '@assets/socialMedia/linkedin.svg';
import instagram from '@assets/socialMedia/instagram.svg';
import facebook from '@assets/socialMedia/facebook.svg';
import youtube from '@assets/socialMedia/youtube.svg';
import whatsapp from '@assets/socialMedia/whatsapp.svg';

import SocialMediaData from '@root/social-media.json';

import PageSection from '@atoms/PageSection';
import Copyright from '@molecules/Copyright';

import FooterLinksList from './FooterLinksList';

import style from './footer.module.scss';

export default function Footer() {
  const socialMediaIconsMap = {
    whatsapp,
    facebook,
    instagram,
    youtube,
    linkedin,
  } as any;

  return (
    <footer>
      <PageSection
        className={style['footer']}
        containerClassName={style['footer__container']}
        element='div'
      >
        <FooterLinksList />

        <span className={style['footer__separator']} />

        <div className={style['footer__content']}>
          <Image
            className={style['footer__logo']}
            src={Logo}
            alt='Logo - Vizi Lotes'
          />

          <div className={style['footer__text-content']}>
            <div className={style['footer__contact']}>
              <p className={style['footer__contact-first']}>
                <span>(41) 3779-1190</span>
                <span>contato@vizi.com.br</span>
              </p>

              <p>
                R.General Mauro Tourinho, 1805 - Sala 1601 Seminário,
                Curitiba/PR - CEP 80740-000
              </p>
            </div>

            <div className={style['footer__social-media']}>
              {SocialMediaData.map((item) => (
                <Link
                  target='_blank'
                  key={item.key}
                  className={style['social-media-item']}
                  href={item.link}
                >
                  <Image
                    className={style['social-media-item__logo']}
                    src={socialMediaIconsMap[item.key]}
                    alt={item.key}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </PageSection>

      <Copyright />
    </footer>
  );
}
