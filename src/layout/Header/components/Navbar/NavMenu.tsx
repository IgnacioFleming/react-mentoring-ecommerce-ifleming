import clsx from 'clsx';
import { useRef } from 'react';
import { NavLinks } from './NavLinks';
import { NavActions } from './NavActions';
import { useHandleOutsideClick } from '../../hooks/useHandleOutsideClick';
import styles from './NavMenu.module.scss';

type NavMenuProps = {
  open: boolean;
  closeOnClickingLink: (e: React.MouseEvent) => void;
  handleClose: () => void;
};

export const NavMenu = ({ open, closeOnClickingLink, handleClose }: NavMenuProps) => {
  const menuRef = useRef(null);
  useHandleOutsideClick(menuRef, handleClose);
  return (
    <div
      className={clsx(styles.navbar__menu, open ? styles['navbar__menu--open'] : '')}
      onClick={closeOnClickingLink}
      ref={menuRef}
    >
      <NavLinks />
      <NavActions />
    </div>
  );
};
