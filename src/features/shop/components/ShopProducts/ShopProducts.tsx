import { useRef } from 'react';
import { Product } from '../../../../types/products';
import { useProducts } from '../../../hooks/useProducts';
import { useInfiniteScroll } from '../../../hooks/useInfiniteScroll';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { useHandleOffset } from '../../../hooks/useHandleOffset';
import { ProductList } from '../../../../components/ProductList';
import { ShopProductLoader } from './ShopProductsLoader';
import styles from './ShopProducts.module.scss';

const LIMIT = 24;

export const ShopProducts = () => {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const { offset, handleOffset } = useHandleOffset(LIMIT);

  const { products, getQueryStatus, total, refetch } = useProducts({
    params: { limit: LIMIT, skip: offset },
    queryKey: 'shopProducts',
  });

  const { accItems: shopProducts, loading } = useInfiniteScroll<Product>({
    loadMore: refetch,
    offset,
    newItems: products,
    totalItems: total,
  });

  useIntersectionObserver({ ref: sentinelRef, cb: handleOffset });

  const productDataStatus = getQueryStatus();

  const productLeft = total - shopProducts.length;
  const skeletonQuantity = productLeft > LIMIT ? LIMIT : productLeft;

  return (
    <>
      <header className={styles['shop-products__header']}>
        {productDataStatus === 'success' && <h6>Showing all {total} results</h6>}
      </header>
      <ProductList products={shopProducts} skeletonQuantity={LIMIT} status={productDataStatus} />
      <ShopProductLoader loading={loading} quantity={skeletonQuantity} />
      <div ref={sentinelRef} />
    </>
  );
};
