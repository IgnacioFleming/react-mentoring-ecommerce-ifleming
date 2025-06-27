import { ProductsList } from '../../../../components/ProductsList';
import { HomepageSection } from '../HomepageSection';
import { PRODUCTS } from './products';

export const TopRatedProducts = () => {
  return (
    <HomepageSection>
      <HomepageSection.Header
        eyebrow="Featured Products"
        title="Top Rated Products"
        subtitle="Customer favorites loved for quality and style"
      />
      <HomepageSection.Content>
        <ProductsList products={PRODUCTS} />
      </HomepageSection.Content>
    </HomepageSection>
  );
};
