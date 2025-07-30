import { useParams } from 'react-router-dom';
import { useGetProductById } from './hooks/useGetProductById';
import { Container } from '@/components/Container';
import { ErrorSection } from '@/components/ErrorSection';
import { ProductDetail } from '@/components/ProductDetail';
import { ProductDetailSkeleton } from '@/components/ProductDetail/ProductDetailSkeleton';
import styles from './ProductDetailSection.module.scss';

export const ProductDetailSection = () => {
  const id = Number(useParams().id);
  const { product, dataStatus } = useGetProductById(id);

  const renderProductDetail = () => {
    if (dataStatus === 'error')
      return (
        <ErrorSection
          title="Loading Error:"
          message="There was an error while loading Product Detail"
          goBackBtn
        />
      );
    if (dataStatus === 'loading') return <ProductDetailSkeleton />;
    return <ProductDetail product={product} />;
  };

  return (
    <div className={styles.wrapper}>
      <Container>{renderProductDetail()}</Container>
    </div>
  );
};
