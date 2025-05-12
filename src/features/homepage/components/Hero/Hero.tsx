import { Container } from '../../../../components/Container';
import { Button } from '../../../../components/Button';

import styles from './Hero.module.scss';
import { Link } from 'react-router-dom';

export const Hero = () => (
  <div className={styles.hero}>
    <Container className={styles.hero__container}>
      <h5 className={styles.hero__eyebrow}>Summer 2025</h5>
      <h1 className={styles.hero__title}>New Collection</h1>
      <h4 className={styles.hero__subtitle}>
        We know how large objects will act, but things on a small scale.
      </h4>
      <div>
        <Link to="/shop">
          <Button size="md" className={styles.hero__button}>
            Shop Now
          </Button>
        </Link>
      </div>
    </Container>
  </div>
);
