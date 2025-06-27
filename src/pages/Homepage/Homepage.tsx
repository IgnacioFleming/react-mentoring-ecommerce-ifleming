import { Container } from '../../components/Container';
import { FeaturedCategories } from '../../features/homepage/components/FeaturedCategories';
import { Hero } from '../../features/homepage/components/Hero';
import { TopRatedProducts } from '../../features/homepage/components/TopRatedProducts';
import styles from './Homepage.module.scss';

export const Homepage = () => (
  <>
    <Hero
      eyebrow="Summer 2025"
      title="New Collection"
      subtitle="We know how large objects will act, but things on a small scale."
      cta="Shop Now"
      ctaLink="/shop"
    />
    <div className={styles['featured-categories-container']}>
      <Container>
        <FeaturedCategories />
      </Container>
    </div>
    <Container>
      <TopRatedProducts />
    </Container>
  </>
);
