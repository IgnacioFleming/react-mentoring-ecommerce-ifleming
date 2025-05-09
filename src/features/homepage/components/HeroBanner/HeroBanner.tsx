import { Container } from '../../../../components/Container';
import { Button } from '../../../../components/Button';

import styles from './HeroBanner.module.scss';

export const HeroBanner = () => (
  <div className={styles.heroBanner}>
    <Container className={styles.heroBanner__container}>
      <h1 className={styles.heroBanner__title}>Welcome!</h1>
      <div>
        <Button size="sm">Shop Now</Button>
      </div>
    </Container>
  </div>
);
