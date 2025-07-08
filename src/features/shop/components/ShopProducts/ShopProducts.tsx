import { useRef, useState } from 'react';
import { Product } from '../../../../types/products';
import { useProducts } from '../../../hooks/useProducts';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useHandleIntersect } from '../../hooks/useHandleIntersect';
import { ProductList } from '../../../../components/ProductList';
import styles from './ShopProducts.module.scss';

const LIMIT = 24;

export const ShopProducts = () => {
  const [skip, setSkip] = useState<number>(0);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const { products, getQueryStatus, total, refetch } = useProducts({
    params: { limit: LIMIT, skip },
    queryKey: 'shopProducts',
  });

  const handleIntersect = useHandleIntersect({
    setOffset: () => setSkip((prevSkip) => prevSkip + LIMIT),
  });

  useIntersectionObserver({ ref: sentinelRef, cb: handleIntersect, rootMargin: '-200px' });

  const { accItems: shopProducts, loading } = useInfiniteScroll<Product>({
    loadMore: refetch,
    offset: skip,
    newItems: products,
    totalItems: total,
  });

  const productDataStatus = getQueryStatus();

  return (
    <>
      <header className={styles['shop-products__header']}>
        {productDataStatus === 'success' && <h6>Showing all {total} results</h6>}
      </header>
      <ProductList products={shopProducts} skeletonQuantity={LIMIT} status={productDataStatus} />
      {loading && (
        <div className={styles['shop-products__loader']}>
          <ProductList products={[]} skeletonQuantity={LIMIT} status="loading" />
        </div>
      )}
      <div ref={sentinelRef} />
    </>
  );
};
