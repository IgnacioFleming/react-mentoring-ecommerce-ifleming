import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { Heart, Search, ShoppingCart, User } from 'lucide-react';

export const NavActions = () => (
  <nav className={styles.navbar__nav}>
    <Link to="/my-account">
      <User className={styles.navbar__nav__icon} />
    </Link>
    <Search className={styles.navbar__nav__icon} />
    <ShoppingCart className={styles.navbar__nav__icon} />
    <Heart className={styles.navbar__nav__icon} />
  </nav>
);
