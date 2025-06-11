import { NavLink } from 'react-router-dom';
import styles from './NavLinks.module.scss';
import clsx from 'clsx';
import { Accordion } from '../../../../components/Accordion/Accordion';

const applyNavLinkStyle = ({ isActive }: { isActive: boolean }) =>
  isActive ? styles['navbar__links--active'] : '';

export const NavLinks = () => (
  <ul className={clsx(styles.navbar__links, styles['navbar__links--spaced'])}>
    <li>
      <NavLink to={'/'} className={applyNavLinkStyle}>
        Home
      </NavLink>
    </li>
    <li>
      <Accordion type="single" collapsible>
        <Accordion.Item value="item-1">
          <Accordion.Trigger className={styles.navbar__accordion}>
            <NavLink to="/shop" className={applyNavLinkStyle}>
              Shop
            </NavLink>
          </Accordion.Trigger>
          <Accordion.Content>
            <div className={styles.navbar__accordion__content}>
              <NavLink to="/shop?orderBy=top-rated">Top Rated</NavLink>
              <NavLink to="/shop?orderBy=price-desc">Price Desc</NavLink>
              <NavLink to="/shop?orderBy=price-asc">Price Asc</NavLink>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </li>
    <li>
      <NavLink to={'/my-account'} className={applyNavLinkStyle}>
        My Account
      </NavLink>
    </li>
  </ul>
);
