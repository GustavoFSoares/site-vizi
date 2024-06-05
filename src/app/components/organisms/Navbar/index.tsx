'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

import Link from 'next/link';
import Image from 'next/image';

import Logo from '@assets/vizi-logo.svg';
import bindClass from '@helpers/bindClass';

import NavbarButton from './NavbarButton';
import styles from './styles.module.scss';

import { useBreakpoints } from '@hooks/useBreakpoints';
import { useBackgroundColor } from '@hooks/useBackgroundColor';

interface INavOption {
  label: string;
  route: string;
}

export default function Navbar() {
  const pathname = usePathname();
  const { isSm } = useBreakpoints();
  const backgroundColor = useBackgroundColor();

  const [isOpen, setIsOpen] = useState(false);

  const navOptions: INavOption[] = [
    { label: 'Home', route: '/' },
    { label: 'Empreendimentos', route: '/empreendimentos' },
    { label: 'Sobre', route: '/sobre' },
    { label: 'Contato', route: '/contato' },
  ];

  function handleToggle() {
    setIsOpen((val) => !val);
  }

  return (
    <nav
      className={styles['navbar']}
      style={{
        backgroundColor: backgroundColor.default,
      }}
    >
      <div className={styles['navbar__content']}>
        <Link href={{ href: '/', hash: 'hero' }}>
          <Image
            className={styles['navbar__logo']}
            src={Logo}
            alt='Vizi logo'
          />
        </Link>

        {isSm && <NavbarButton isOpen={isOpen} onClick={handleToggle} />}

        <div
          className={bindClass(
            styles['nav-options__wrapper'],
            isOpen && styles['nav-options__wrapper--active']
          )}
          style={{
            backgroundColor: backgroundColor.default,
          }}
        >
          {navOptions.map((routeOption) => (
            <Link
              key={routeOption.route}
              className={bindClass(
                styles['nav-options'],
                pathname === routeOption.route && styles['nav-options--active']
              )}
              href={routeOption.route}
            >
              {routeOption.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
