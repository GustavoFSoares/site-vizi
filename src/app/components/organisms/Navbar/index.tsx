import Image from 'next/image';
import styles from './styles.module.scss';

import Logo from '@assets/vizi-logo.svg';

interface INavOption {
  label: string;
  route: string;
}

export default function Navbar() {
  const navOptions: INavOption[] = [
    { label: 'Home', route: 'home' },
    { label: 'Empreendimentos', route: '' },
    { label: 'Sobre', route: '' },
    { label: 'Contato', route: '' },
  ];

  return (
    <nav className={styles['navbar']}>
      <div className={styles['navbar__content']}>
        <Image className={styles['navbar__logo']} src={Logo} alt='Vizi logo' />

        <div className={styles['nav-options__wrapper']}>
          {navOptions.map((routeOption) => (
            <p key={routeOption.route} className={styles['nav-options']}>
              {routeOption.label}
            </p>
          ))}
        </div>
      </div>
    </nav>
  );
}
