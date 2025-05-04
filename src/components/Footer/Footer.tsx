import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__logo}>LOGO</div>
      <nav className={styles.footer__links}>
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="#">Contact</a>
      </nav>
      <div className={styles.footer__social}>
        <span>🌐</span>
        <span>📘</span>
        <span>📸</span>
      </div>
    </footer>
  );
};
