import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useRef, useState } from 'react';
import { useHandleOutsideClick } from '../../hooks/useHandleOutsideClick';
import { NavMenu } from './NavMenu';
import styles from './Navbar.module.scss';

export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

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
    <div className={styles.navbar__container} ref={navbarRef} onClick={closeOnClickingLink}>
      <div className={styles.navbar__main}>
        <div className={styles.navbar__logo}>
          <Link to="/">E-commerce</Link>
        </div>
        <Menu onClick={toggleMenu} className={styles.navbar__burguer} data-testid="menu-icon" />
      </div>
      <NavMenu open={open} ref={menuRef} />
    </div>
  );
};
