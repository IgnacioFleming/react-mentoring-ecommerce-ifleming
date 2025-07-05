import { ProductList } from '../../../../components/ProductList';
import { useProducts } from '../../../hooks/useProducts';
import styles from './ShopProducts.module.scss';

const LIMIT = 24;

export const ShopProducts = () => {
  const { products, getQueryStatus, total } = useProducts({
    limit: LIMIT,
  });

  const productDataStatus = getQueryStatus();
  return (
    <>
      <div className={styles['shop-products__header']}>
        {productDataStatus === 'success' && <h6>Showing all {total} results</h6>}
      </div>
      <ProductList products={products} skeletonQuantity={LIMIT} status={productDataStatus} />
    </>
  );
};
