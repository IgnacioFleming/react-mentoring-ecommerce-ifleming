import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';
import clsx from 'clsx';
import { ChevronDown } from 'lucide-react';

export const NavLinks = () => (
  <ul className={clsx(styles.navbar__links, styles['navbar__links--spaced'])}>
    <li>
      <NavLink
        to={'/'}
        className={({ isActive }) => (isActive ? styles['navbar__links--active'] : '')}
      >
        Home
      </NavLink>
    </li>
    <li>
      <ul className={styles.navbar__links}>
        <NavLink
          to={'/shop'}
          className={({ isActive }) => (isActive ? styles['navbar__links--active'] : '')}
        >
          Shop <ChevronDown />
        </NavLink>
        <li>Top Rated</li>
        <li>Price Desc</li>
        <li>Price Asc</li>
      </ul>
    </li>
    <li>
      <NavLink
        to={'/my-account'}
        className={({ isActive }) => (isActive ? styles['navbar__links--active'] : '')}
      >
        My Account
      </NavLink>
    </li>
  </ul>
);
