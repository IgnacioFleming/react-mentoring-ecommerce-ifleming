import clsx from 'clsx';
import { NavLinks } from '../NavLinks/NavLinks';
import { NavActions } from '../NavActions/NavActions';
import styles from './NavMenu.module.scss';

type NavMenuProps = {
  open: boolean;
  closeOnClickingLink: (e: React.MouseEvent) => void;
  ref: React.RefObject<HTMLDivElement | null>;
};

export const NavMenu = ({ open, closeOnClickingLink, ref }: NavMenuProps) => {
  return (
    <div
      className={clsx(styles.navbar__nav, open ? styles['navbar__nav--open'] : '')}
      onClick={closeOnClickingLink}
      ref={ref}
    >
      <NavLinks />
      <NavActions />
    </div>
  );
};
