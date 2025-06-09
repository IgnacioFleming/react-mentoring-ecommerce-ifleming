import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { NavLinks } from './NavLinks';
import { NavActions } from './NavActions';

export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div className={styles.navbar__container}>
      <div className={styles.navbar__logo}>
        <Link to="/">E-commerce</Link>
      </div>
      <Menu onClick={handleOpen} />
      {open && (
        <div>
          <NavLinks />
          <NavActions />
        </div>
      )}
    </div>
  );
};
