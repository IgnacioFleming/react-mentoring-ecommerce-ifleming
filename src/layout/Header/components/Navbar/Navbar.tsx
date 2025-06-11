import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { NavMenu } from './NavMenu';

export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleMenu = () => setOpen(!open);
  const handleClose = () => setOpen(false);

  const closeOnClickingLink = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.matches('a')) return handleClose();
  };

  return (
    <>
      <div className={styles.navbar__container}>
        <div className={styles.navbar__logo}>
          <Link to="/">E-commerce</Link>
        </div>
        <Menu onClick={toggleMenu} className={styles.navbar__burguer} />
      </div>
      <NavMenu open={open} closeOnClickingLink={closeOnClickingLink} handleClose={handleClose} />
    </>
  );
};
