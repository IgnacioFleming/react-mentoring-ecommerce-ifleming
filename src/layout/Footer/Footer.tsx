import { Link } from 'react-router-dom';
import { Container } from '../../components/Container';
import FacebookIcon from '../../assets/icons/facebook.svg?react';
import InstagramIcon from '../../assets/icons/instagram.svg?react';
import XIcon from '../../assets/icons/x.svg?react';
import styles from './Footer.module.scss';

export const Footer = () => (
  <footer className={styles.footer}>
    <nav className={styles.footer__nav}>
      <Container>
        <div className={styles.footer__content}>
          <div className={styles.footer__content__column}>
            <h3>Get In Touch</h3>
            <div className={styles['footer__social-media']}>
              <Link to="#">
                <FacebookIcon className={styles.footer__icon} />
              </Link>
              <Link to="#">
                <InstagramIcon className={styles.footer__icon} />
              </Link>
              <Link to="#">
                <XIcon className={styles.footer__icon} />
              </Link>
            </div>
          </div>
          <div className={styles.footer__content__column}>
            <h3>Company Info</h3>
            <ul>
              <li>
                <Link to="#">About Us</Link>
              </li>
              <li>
                <Link to="#">Carrier</Link>
              </li>
              <li>
                <Link to="#">We are hiring</Link>
              </li>
              <li>
                <Link to="#">Blog</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer__content__column}>
            <h3>Features</h3>
            <ul>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="#">My Cart</Link>
              </li>
              <li>
                <Link to="#">My Account</Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
    <div className={styles.footer__copyright}>
      <Container>Copyright &copy; 2025 E-commerce. All rights reserved.</Container>
    </div>
  </footer>
);
