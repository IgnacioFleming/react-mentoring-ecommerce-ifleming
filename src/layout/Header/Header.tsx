import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { User, ShoppingCart, Heart, Search, Phone } from 'lucide-react';
import MailIcon from '../../assets/icons/mail.svg?react';
import InstagramIcon from '../../assets/icons/instagram.svg?react';
import YoutubeIcon from '../../assets/icons/youtube.svg?react';
import FacebookIcon from '../../assets/icons/facebook.svg?react';
import XIcon from '../../assets/icons/x.svg?react';
import { Container } from '../../components/Container';
import styles from './Header.module.scss';

export const Header = () => (
  <header>
    <div className={styles.banner}>
      <Container className={styles.banner__container}>
        <div className={clsx(styles.banner__column, styles['banner__column--left'])}>
          <div>
            <Phone className={styles.banner__icon} />
            <small>(225) 555-0118</small>
          </div>
          <div>
            <MailIcon className={styles.banner__icon} />
            <small>test@test.com</small>
          </div>
        </div>
        <div className={clsx(styles.banner__column, styles['banner__column--center'])}>
          <h6>Follow Us and get a chance to win 80% off</h6>
        </div>
        <div className={clsx(styles.banner__column, styles['banner__column--right'])}>
          <h6>Follow Us :</h6>
          <div className={styles['banner__social-media']}>
            <div>
              <Link to="#">
                <InstagramIcon className={styles.banner__icon} />
              </Link>
            </div>
            <div className={styles['banner__social-media--youtube']}>
              <Link to="#">
                <YoutubeIcon className={styles.banner__icon} />
              </Link>
            </div>
            <div className={styles['banner__social-media--facebook']}>
              <Link to="#">
                <FacebookIcon className={styles.banner__icon} />
              </Link>
            </div>
            <div className={styles['banner__social-media--x']}>
              <Link to="#">
                {' '}
                <XIcon className={styles.banner__icon} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
    <div className={styles.navbar}>
      <Container className={styles.navbar__container}>
        <div className={styles.navbar__logo}>
          <Link to="/">E-commerce</Link>
        </div>
        <nav className={styles.navbar__nav}>
          <Link to="/my-account">
            <User className={styles.navbar__nav__icon} />
          </Link>
          <Search className={styles.navbar__nav__icon} />
          <ShoppingCart className={styles.navbar__nav__icon} />
          <Heart className={styles.navbar__nav__icon} />
        </nav>
      </Container>
    </div>
  </header>
);
