import { DataStatus, Product, PRODUCT_DATA_STATUS } from '../../types/products';
import { ProductCard } from '../ProductCard';
import { ProductsListError } from './ProductsListError';
import styles from './ProductsList.module.scss';

export type ProductsListProps = {
  products: Product[];
  status?: DataStatus;
  loadingQuantity?: number;
};

export const ProductsList = ({ products, status, loadingQuantity }: ProductsListProps) => {
  if (status === PRODUCT_DATA_STATUS.ERROR) return <ProductsListError />;

  const renderProductCard = (p: Product, index: number) => <ProductCard key={index} product={p} />;

  return (
    <ul className={styles['products-list']}>
      {status === PRODUCT_DATA_STATUS.LOADING
        ? Array(loadingQuantity).fill(null).map(renderProductCard)
        : products.map(renderProductCard)}
    </ul>
  );
};
