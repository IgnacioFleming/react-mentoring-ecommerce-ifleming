import { useProductStore } from '@/stores/useProductStore';
import { calculateSkeletonQuantity } from '../../features/utils';
import { ProductCard } from '../ProductCard';
import { ProductListSkeleton } from './ProductListSkeleton';
import styles from './ProductList.module.scss';
import { ErrorSection } from '../ErrorSection';

export type ProductListProps = {
  offset: number;
};

export const ProductList = ({ offset }: ProductListProps) => {
  const products = useProductStore((state) => state.products);
  const status = useProductStore((state) => state.status);
  const total = useProductStore((state) => state.total);
  const hasProducts = products.length > 0;

  const skeletonQuantity = calculateSkeletonQuantity(total, products.length, offset);

  if (status === 'error')
    return (
      <ErrorSection title="Loading Error:" message="There was an error while loading Products" />
    );
  return (
    <ul className={styles['products-list']}>
      {hasProducts &&
        products.map((p, index) => (
          <ProductCard key={index}>
            <ProductCard.Thumbnail id={p.id} />
            <ProductCard.Content id={p.id}>
              <ProductCard.Header id={p.id} />
              <ProductCard.Main id={p.id} />
            </ProductCard.Content>
          </ProductCard>
        ))}
      {status === 'loading' && <ProductListSkeleton quantity={skeletonQuantity} />}
    </ul>
  );
};
