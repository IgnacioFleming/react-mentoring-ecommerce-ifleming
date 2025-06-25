import clsx from 'clsx';
import { Phone, Mail } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { SocialMedia } from './components/SocialMedia';
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
            <Mail className={styles.banner__icon} />
            <small>test@test.com</small>
          </div>
        </div>
        <div className={clsx(styles.banner__column, styles['banner__column--center'])}>
          <h6>Follow Us and get a chance to win 80% off</h6>
        </div>
        <div className={clsx(styles.banner__column, styles['banner__column--right'])}>
          <h6>Follow Us:</h6>
          <SocialMedia />
        </div>
      </Container>
    </div>
    <div className={styles.navbar}>
      <Container>
        <Navbar />
      </Container>
    </div>
  </header>
);
