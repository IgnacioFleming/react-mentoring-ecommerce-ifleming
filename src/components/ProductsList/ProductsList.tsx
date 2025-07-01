import { DataStatus, Product, PRODUCT_DATA_STATUS } from '../../types/products';
import { ProductCard } from '../ProductCard';
import { ProductsListError } from './ProductsListError';
import { ProductsListSkeleton } from './ProductsListSkeleton';
import styles from './ProductsList.module.scss';

export type ProductsListProps = {
  products: Product[];
  status: DataStatus;
  skeletonQuantity: number;
};

export const ProductsList = ({ products, status, skeletonQuantity }: ProductsListProps) => {
  const isError = status === PRODUCT_DATA_STATUS.ERROR;
  const isLoading = status === PRODUCT_DATA_STATUS.LOADING;

  if (isError) return <ProductsListError />;
  return (
    <ul className={styles['products-list']}>
      {isLoading ? (
        <ProductsListSkeleton quantity={skeletonQuantity} />
      ) : (
        products.map((p, index) => <ProductCard key={index} product={p} />)
      )}
    </ul>
  );
};
