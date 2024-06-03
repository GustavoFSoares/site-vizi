import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';

import bindClass from '@helpers/bindClass';

import SocialMediaData from '@root/social-media.json';

import WhatsappLogo from '@assets/whatsapp-logo.svg';

import style from './whatsappButton.module.scss';

type Props = {
  className?: string;
  wide?: boolean;
};

export default function WhatsappButton({ className, wide }: Props) {
  const whatsappLink = useMemo<string>(() => {
    const item = SocialMediaData.find((item) => {
      return item.key === 'whatsapp';
    });

    return item?.link || '';
  }, []);

  return (
    <Link
      href={whatsappLink}
      target='_blank'
      className={bindClass(
        style['whatsapp-button'],
        wide && style['whatsapp-button--wide'],
        className
      )}
    >
      {wide && <span className={style['whatsapp-button__text']}>Whatsapp</span>}

      <Image
        src={WhatsappLogo}
        alt='Whatsapp Logo'
        className={style['whatsapp-button__content']}
      />
    </Link>
  );
}
