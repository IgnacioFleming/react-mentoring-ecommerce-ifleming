import { useProducts } from '../../../hooks/useProducts';
import { ProductList } from '../../../../components/ProductList';
import { HomepageSection } from '../HomepageSection';
import { useSetProducts } from '../../../hooks/useSetProducts';

export const TopRatedProducts = () => {
  const { products } = useProducts({
    params: {
      sortBy: 'rating',
      order: 'desc',
      limit: 8,
    },
    queryKey: 'topRatedProducts',
  });

  useSetProducts(products);

  return (
    <HomepageSection>
      <HomepageSection.Header
        eyebrow="Featured Products"
        title="Top Rated Products"
        subtitle="Customer favorites loved for quality and style"
      />
      <HomepageSection.Content>
        <ProductList offset={8} />
      </HomepageSection.Content>
    </HomepageSection>
  );
};
