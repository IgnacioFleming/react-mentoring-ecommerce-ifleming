import { Container } from '../../components/Container';
import styles from './Footer.module.scss';

export const Footer = () => (
  <footer className={styles.footer}>
    <Container className={styles.footer__container}>
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
    </Container>
  </footer>
);
