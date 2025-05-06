import { Link } from 'react-router-dom';
import { Container } from '../../components/Container';
import styles from './Header.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <Container className={styles.header__container}>
      <div className={styles.header__logo}>LOGO</div>
      <nav className={styles.header__nav}>
        <button className={styles.header__icon}>🛒</button>
        <Link to="/my-account">
          <button className={styles.header__icon}>👤</button>
        </Link>
      </nav>
    </Container>
  </header>
);
