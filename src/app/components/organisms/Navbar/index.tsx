'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

import Link from 'next/link';
import Image from 'next/image';

import Logo from '@assets/vizi-logo.svg';

import NavbarButton from './NavbarButton';
import styles from './styles.module.scss';

import { useBreakpoints } from '@hooks/useBreakpoints';

interface INavOption {
  label: string;
  route: string;
}

export default function Navbar() {
  const pathname = usePathname();
  const { isSm } = useBreakpoints();

  const [isOpen, setIsOpen] = useState(true);

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
    <nav className={styles['navbar']}>
      <div className={styles['navbar__content']}>
        <Image className={styles['navbar__logo']} src={Logo} alt='Vizi logo' />

        {isSm && <NavbarButton isOpen={isOpen} onClick={handleToggle} />}

        <div
          className={[
            styles['nav-options__wrapper'],
            isOpen && styles['nav-options__wrapper--active'],
          ].join(' ')}
        >
          {navOptions.map((routeOption) => (
            <Link
              key={routeOption.route}
              className={[
                styles['nav-options'],
                pathname === routeOption.route && styles['nav-options--active'],
              ].join(' ')}
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
