import { ProductsList } from '../../../../components/ProductsList';
import { DataStatus } from '../../../../types/products';
import { useTopRatedProducts } from '../../hooks/useTopRatedProducts';
import { HomepageSection } from '../HomepageSection';

export const TopRatedProducts = () => {
  const { topRatedProducts, isLoadingTopRatedProducts, topRatedProductsError } =
    useTopRatedProducts();

  const dataStatus: DataStatus = isLoadingTopRatedProducts
    ? 'loading'
    : topRatedProductsError?.name
      ? 'error'
      : 'success';

  return (
    <HomepageSection>
      <HomepageSection.Header
        eyebrow="Featured Products"
        title="Top Rated Products"
        subtitle="Customer favorites loved for quality and style"
      />
      <HomepageSection.Content>
        <ProductsList products={topRatedProducts} status={dataStatus} loadingQuantity={8} />
      </HomepageSection.Content>
    </HomepageSection>
  );
};
