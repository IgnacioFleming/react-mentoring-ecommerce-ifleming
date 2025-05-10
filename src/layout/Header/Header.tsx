import clsx from 'clsx';
import { User, ShoppingCart, Heart, Search } from 'lucide-react';
import { Container } from '../../components/Container';
import styles from './Header.module.scss';

export const Header = () => (
  <header>
    <div className={styles.banner}>
      <Container className={styles.banner__container}>
        <div className={clsx(styles.banner__column, styles['banner__column--left'])}>1</div>
        <div className={clsx(styles.banner__column, styles['banner__column--center'])}>2</div>
        <div className={clsx(styles.banner__column, styles['banner__column--right'])}>3</div>
      </Container>
    </div>
    <div className={styles.navbar}>
      <Container className={styles.navbar__container}>
        <div className={styles.navbar__logo}>E-commerce</div>
        <nav className={styles.navbar__nav}>
          <User className={styles.navbar__nav__icon} />
          <Search className={styles.navbar__nav__icon} />
          <ShoppingCart className={styles.navbar__nav__icon} />
          <Heart className={styles.navbar__nav__icon} />
        </nav>
      </Container>
    </div>
  </header>
);
