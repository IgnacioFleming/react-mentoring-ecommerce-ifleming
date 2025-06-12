import { Link } from 'react-router-dom';
import { Heart, Search, ShoppingCart, User } from 'lucide-react';
import styles from './NavActions.module.scss';

export const NavActions = () => (
  <nav className={styles['nav-actions']}>
    <Link to="/my-account">
      <User className={styles['nav-actions__icon']} />
    </Link>
    <Search className={styles['nav-actions__icon']} />
    <ShoppingCart className={styles['nav-actions__icon']} />
    <Heart className={styles['nav-actions__icon']} />
  </nav>
);
