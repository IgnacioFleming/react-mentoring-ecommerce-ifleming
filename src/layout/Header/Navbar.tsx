import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { NavLinks } from './NavLinks';
import { NavActions } from './NavActions';
import clsx from 'clsx';

type ShowMenu = boolean | null;

export const Navbar = () => {
  const [open, setOpen] = useState<ShowMenu>(null);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <div className={styles.navbar__container}>
        <div className={styles.navbar__logo}>
          <Link to="/">E-commerce</Link>
        </div>
        <Menu onClick={handleOpen} className={styles.navbar__burguer} />
      </div>

      <div
        className={clsx(
          styles.navbar__menu,
          open ? styles['navbar__menu--open'] : open === null ? '' : styles['navbar__menu--closed'],
        )}
      >
        <NavLinks />
        <NavActions />
      </div>
    </>
  );
};
