import { useProducts } from '../../../hooks/useProducts';
import { ProductList } from '../../../../components/ProductList';
import { HomepageSection } from '../HomepageSection';

export const TopRatedProducts = () => {
  const { products: topRatedProducts, getQueryStatus } = useProducts({
    params: {
      sortBy: 'rating',
      order: 'desc',
      limit: 8,
    },
    queryKey: 'topRatedProducts',
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
        <ProductList products={topRatedProducts} status={status} skeletonQuantity={8} />
      </HomepageSection.Content>
    </HomepageSection>
  );
};
