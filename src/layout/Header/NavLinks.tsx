import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export const NavLinks = () => (
  <div className={styles.navbar__menu}>
    <ul>
      <li>
        <Link to={'/'}>Home</Link>
      </li>
      <li>
        <Link to={'/'}>Shop</Link>
        <ul>
          <li>Top Rated</li>
          <li>Price Desc</li>
          <li>Price Asc</li>
        </ul>
      </li>
      <li>
        <Link to={'/'}>My Account</Link>
      </li>
    </ul>
  </div>
);
