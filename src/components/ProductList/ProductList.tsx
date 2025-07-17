import { DataStatus, Product, PRODUCT_DATA_STATUS } from '../../types/products';
import { ProductCard } from '../ProductCard';
import { ProductListError } from './ProductListError';
import { ProductListSkeleton } from './ProductListSkeleton';
import styles from './ProductList.module.scss';

export type ProductListProps = {
  products: Product[];
  status: DataStatus;
  skeletonQuantity: number;
};

export const ProductList = ({ products, status, skeletonQuantity }: ProductListProps) => {
  const isError = status === PRODUCT_DATA_STATUS.ERROR;
  const isLoading = status === PRODUCT_DATA_STATUS.LOADING;
  const hasProducts = products.length > 0;

  if (isError) return <ProductListError />;
  return (
    <ul className={styles['products-list']}>
      {hasProducts && products.map((p, index) => <ProductCard key={index} product={p} />)}
      {isLoading && <ProductListSkeleton quantity={skeletonQuantity} />}
    </ul>
  );
};
