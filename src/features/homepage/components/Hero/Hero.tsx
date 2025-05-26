import { Link } from 'react-router-dom';
import { Container } from '../../../../components/Container';
import { Button } from '../../../../components/Button';

import styles from './Hero.module.scss';

export type HeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  cta: string;
  ctaLink: string;
};

export const Hero = ({ eyebrow, title, subtitle, cta, ctaLink }: HeroProps) => (
  <div className={styles.hero}>
    <Container className={styles.hero__container}>
      <h5 className={styles.hero__eyebrow}>{eyebrow}</h5>
      <h1 className={styles.hero__title}>{title}</h1>
      <h4 className={styles.hero__subtitle}>{subtitle}</h4>
      <div>
        <Link to={ctaLink}>
          <Button size="md" className={styles.hero__button}>
            {cta}
          </Button>
        </Link>
      </div>
    </Container>
  </div>
);
