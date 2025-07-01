import { useProducts } from '../../../hooks/useProducts';
import { ProductsList } from '../../../../components/ProductsList';
import { HomepageSection } from '../HomepageSection';

export const TopRatedProducts = () => {
  const { products: topRatedProducts, getQueryStatus } = useProducts({
    sortBy: 'rating',
    order: 'desc',
    limit: 8,
  });

  const status = getQueryStatus();

  return (
    <HomepageSection>
      <HomepageSection.Header
        eyebrow="Featured Products"
        title="Top Rated Products"
        subtitle="Customer favorites loved for quality and style"
      />
      <HomepageSection.Content>
        <ProductsList products={topRatedProducts} status={status} skeletonQuantity={8} />
      </HomepageSection.Content>
    </HomepageSection>
  );
};
