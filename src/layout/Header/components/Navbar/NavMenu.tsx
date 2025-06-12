import clsx from 'clsx';
import { NavLinks } from './NavLinks';
import { NavActions } from './NavActions';
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
