import { Container } from '../../../../components/Container';
import { Button } from '../../../../components/Button';

import styles from './Hero.module.scss';

export const Hero = () => (
  <div className={styles.hero}>
    <Container className={styles.hero__container}>
      <h1 className={styles.hero__title}>Welcome!</h1>
      <div>
        <Button size="sm">Shop Now</Button>
      </div>
    </Container>
  </div>
);
