import clsx from 'clsx';
import { NavLinks } from '../NavLinks/NavLinks';
import { NavActions } from '../NavActions/NavActions';
import styles from './NavMenu.module.scss';

type NavMenuProps = {
  open: boolean;
  ref: React.RefObject<HTMLDivElement | null>;
};

export const NavMenu = ({ open, ref }: NavMenuProps) => {
  return (
    <div
      className={clsx(styles.navbar__nav, open ? styles['navbar__nav--open'] : '')}
      ref={ref}
      data-testid="nav-menu"
    >
      <NavLinks />
      <NavActions />
    </div>
  );
};
