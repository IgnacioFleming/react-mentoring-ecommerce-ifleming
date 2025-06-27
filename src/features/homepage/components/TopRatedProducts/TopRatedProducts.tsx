import { ProductsList } from '../../../../components/ProductsList';
import { useTopRatedProducts } from '../../hooks/useTopRatedProducts';
import { HomepageSection } from '../HomepageSection';

export const TopRatedProducts = () => {
  const { topRatedProducts, isLoadingTopRatedProducts } = useTopRatedProducts();

  if (isLoadingTopRatedProducts) return null;

  return (
    <HomepageSection>
      <HomepageSection.Header
        eyebrow="Featured Products"
        title="Top Rated Products"
        subtitle="Customer favorites loved for quality and style"
      />
      <HomepageSection.Content>
        <ProductsList products={topRatedProducts} />
      </HomepageSection.Content>
    </HomepageSection>
  );
};
