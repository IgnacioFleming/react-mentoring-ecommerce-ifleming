import { NavLink } from 'react-router-dom';
import styles from './NavLinks.module.scss';
import clsx from 'clsx';
import { MultipleOption, MultipleOptionProps } from '../MultipleOption/MultipleOption';

const trigger: MultipleOptionProps['trigger'] = {
  name: 'Shop',
  path: '/shop',
};

const items: MultipleOptionProps['items'] = [
  { name: 'Top Rated', path: '/shop?orderBy=top-rated' },
  { name: 'Price Desc', path: '/shop?orderBy=price-desc' },
  { name: 'Price Asc', path: '/shop?orderBy=price-asc' },
];

export const NavLinks = () => {
  const applyNavLinkStyle = ({ isActive }: { isActive: boolean }) =>
    isActive ? styles['navbar__links--active'] : '';

  return (
    <ul className={clsx(styles.navbar__links, styles['navbar__links--spaced'])}>
      <li>
        <NavLink to={'/'} className={applyNavLinkStyle}>
          Home
        </NavLink>
      </li>
      <li>
        <MultipleOption trigger={trigger} items={items} applyNavLinkStyle={applyNavLinkStyle} />
      </li>
      <li>
        <NavLink to={'/my-account'} className={applyNavLinkStyle}>
          My Account
        </NavLink>
      </li>
    </ul>
  );
};
