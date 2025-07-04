import { ProductList } from '../../../../components/ProductList';
import { useProducts } from '../../../hooks/useProducts';
import styles from './ShopProducts.module.scss';

export const ShopProducts = () => {
  const limit = 24;
  const { products, getQueryStatus, displayedProductQuantity } = useProducts({
    limit,
  });

  const productDataStatus = getQueryStatus();
  return (
    <>
      <div className={styles['shop-products__header']}>
        {productDataStatus === 'success' && <h6>Showing all {displayedProductQuantity} results</h6>}
      </div>
      <ProductList products={products} skeletonQuantity={limit} status={productDataStatus} />
    </>
  );
};
