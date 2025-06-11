import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { Menu } from 'lucide-react';
import { useRef, useState } from 'react';
import { NavMenu } from './NavMenu';
import { useHandleOutsideClick } from '../../hooks/useHandleOutsideClick';

export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useHandleOutsideClick(navbarRef, handleClose);

  const closeOnClickingLink = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.matches('a')) return handleClose();
  };

  return (
    <div className={styles.navbar__container} ref={navbarRef}>
      <div className={styles.navbar__main}>
        <div className={styles.navbar__logo}>
          <Link to="/">E-commerce</Link>
        </div>
        <Menu onClick={toggleMenu} className={styles.navbar__burguer} />
      </div>
      <NavMenu open={open} closeOnClickingLink={closeOnClickingLink} />
    </div>
  );
};
