import clsx from 'clsx';
import { NavLinks } from '../NavLinks/NavLinks';
import { NavActions } from '../NavActions/NavActions';
import styles from './NavMenu.module.scss';

type NavMenuProps = {
  open: boolean;
  closeOnClickingLink: (e: React.MouseEvent) => void;
};

export const NavMenu = ({ open, closeOnClickingLink }: NavMenuProps) => {
  return (
    <div
      className={clsx(styles.navbar__nav, open ? styles['navbar__nav--open'] : '')}
      onClick={closeOnClickingLink}
    >
      <NavLinks />
      <NavActions />
    </div>
  );
};
