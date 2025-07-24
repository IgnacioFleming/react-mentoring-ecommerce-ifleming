import { useProductStore } from '../../stores/useProductStore';
import { calculateSkeletonQuantity } from '../../features/utils';
import { ProductCard } from '../ProductCard';
import { ProductListError } from './ProductListError';
import { ProductListSkeleton } from './ProductListSkeleton';
import styles from './ProductList.module.scss';

export type ProductListProps = {
  offset: number;
};

export const ProductList = ({ offset }: ProductListProps) => {
  const products = useProductStore((state) => state.products);
  const status = useProductStore((state) => state.status);
  const total = useProductStore((state) => state.total);

  const hasProducts = products.length > 0;

  const skeletonQuantity = calculateSkeletonQuantity(total, products.length, offset);

  if (status === 'error') return <ProductListError />;
  return (
    <ul className={styles['products-list']}>
      {hasProducts && products.map((p, index) => <ProductCard key={index} id={p.id} />)}
      {status === 'loading' && <ProductListSkeleton quantity={skeletonQuantity} />}
    </ul>
  );
};
