import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';

import style from './footerLinksGroup.module.scss';

type LinkData = {
  label: string;
  target?: string;
  id?: string | number;
};

export type FooterLinkProps = {
  title: string;
  page: string;
  links: LinkData[];
};

export default function FooterLinksGroup({
  title,
  links,
  page,
}: FooterLinkProps) {
  function formatUrl({ target, id }: LinkData): Url {
    let pathname = page;
    if (id) {
      pathname += `/${id}`;
    }

    return {
      pathname,
      hash: target,
    };
  }

  return (
    <article className={style['footer-links-group']}>
      <h5 className={style['footer-links-group__title']}>{title}</h5>

      <div className={style['footer-links-group__group']}>
        {links.map((link, index) => (
          <Link
            className={style['footer-links-group__item']}
            key={index}
            href={formatUrl(link)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </article>
  );
}
