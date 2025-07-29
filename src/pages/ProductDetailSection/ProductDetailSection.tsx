import { useParams } from 'react-router-dom';
import { useGetProductById } from './hooks/useGetProductById';
import { ProductDetail } from '@/components/ProductDetail';
import { Container } from '@/components/Container';
import styles from './ProductDetailSection.module.scss';

export const ProductDetailSection = () => {
  const id = Number(useParams().id);
  const { product, isError, isLoading } = useGetProductById(id);
  if (isError) return null;
  if (isLoading) return null;

  return (
    <div className={styles.wrapper}>
      <Container>
        <ProductDetail product={product} />
      </Container>
    </div>
  );
};
