import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { MultipleCategoryProps } from '../../types/nabvar';
import { MobileShopLink } from '../MobileShopLink/MobileShopLink';
import { DesktopShopLink } from '../DesktopShopLink/DesktopShopLink';
import styles from './NavLinks.module.scss';

const trigger: MultipleCategoryProps['trigger'] = {
  name: 'Shop',
  path: '/shop',
};

const items: MultipleCategoryProps['items'] = [
  { name: 'Top Rated', path: '/shop?orderBy=top-rated' },
  { name: 'Price Desc', path: '/shop?orderBy=price-desc' },
  { name: 'Price Asc', path: '/shop?orderBy=price-asc' },
];

export const NavLinks = () => {
  const applyNavLinkStyle = ({ isActive }: { isActive: boolean }) =>
    isActive ? styles['navbar__links--active'] : '';

  return (
    <ul
      className={clsx(styles.navbar__links, styles['navbar__links--spaced'])}
      data-testid="nav-links"
    >
      <li>
        <NavLink to={'/'} className={applyNavLinkStyle}>
          Home
        </NavLink>
      </li>
      <li>
        <MobileShopLink trigger={trigger} items={items} applyNavLinkStyle={applyNavLinkStyle} />
        <DesktopShopLink trigger={trigger} items={items} applyNavLinkStyle={applyNavLinkStyle} />
      </li>
      <li>
        <NavLink to={'/my-account'} className={applyNavLinkStyle}>
          My Account
        </NavLink>
      </li>
    </ul>
  );
};
