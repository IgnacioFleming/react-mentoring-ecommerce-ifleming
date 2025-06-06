import { Container } from '../../components/Container';
import { Hero } from '../../features/homepage/components/Hero';

export const Homepage = () => (
  <>
    <Hero
      eyebrow="Summer 2025"
      title="New Collection"
      subtitle="We know how large objects will act, but things on a small scale."
      cta="Shop Now"
      ctaLink="/shop"
    />
    <Container>
      <h3>Featured Categories</h3>
    </Container>
    <Container>
      <h3>Top Rated Products</h3>
    </Container>
  </>
);
