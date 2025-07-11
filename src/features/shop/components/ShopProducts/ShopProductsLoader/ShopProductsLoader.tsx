import { ProductList } from '../../../../../components/ProductList';
import styles from './ShopProductLoader.module.scss';

type ShopProductLoaderProps = {
  loading: boolean;
  quantity: number;
};

export const ShopProductLoader = ({ loading, quantity }: ShopProductLoaderProps) => {
  if (!loading) return null;
  return (
    <div className={styles['shop-product-loader']}>
      <ProductList products={[]} skeletonQuantity={quantity} status="loading" />
    </div>
  );
};
