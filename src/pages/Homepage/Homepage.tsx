import { Container } from '../../components/Container';
import { Hero } from '../../features/homepage/components/Hero';

export const Homepage = () => (
  <>
    <Hero />
    <Container>
      <h3>Editor's Pick</h3>
    </Container>
    <Container>
      <h3>Bestseller Products</h3>
    </Container>
  </>
);
