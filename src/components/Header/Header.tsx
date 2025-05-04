import styles from './Header.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.header__logo}>LOGO</div>
    <nav className={styles.header__nav}>
      <button className={styles.header__icon}>🛒</button>
      <button className={styles.header__icon}>👤</button>
    </nav>
  </header>
);
