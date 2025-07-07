import { useEffect, useRef, useState } from 'react';
import { Product } from '../../../../types/products';
import { useProducts } from '../../../hooks/useProducts';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { ProductList } from '../../../../components/ProductList';
import styles from './ShopProducts.module.scss';

const LIMIT = 24;

const hasMore = true;

export const ShopProducts = () => {
  const [, setSkip] = useState<number>(0);
  const [shopProducts, setShopProducts] = useState<Product[]>([]);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const { products, getQueryStatus, total, isLoadingProducts, isFetching, refetch } = useProducts({
    params: { limit: LIMIT },
    queryKey: 'shopProducts',
  });

  const handleSetSkip = () => setSkip((prevSkip) => prevSkip + LIMIT);

  useInfiniteScroll({ hasMore, setOffset: handleSetSkip, loadMore: refetch, ref: sentinelRef });
  const productDataStatus = getQueryStatus();

  useEffect(() => {
    setShopProducts((prevProducts) => prevProducts.concat(products));
  }, [products]);

  return (
    <>
      <div className={styles['shop-products__header']}>
        {productDataStatus === 'success' && <h6>Showing all {total} results</h6>}
      </div>
      <ProductList products={shopProducts} skeletonQuantity={LIMIT} status={productDataStatus} />
      {!isLoadingProducts && isFetching && (
        <div className={styles['shop-products__loader']}>
          <ProductList products={[]} skeletonQuantity={LIMIT} status="loading" />
        </div>
      )}
      <div ref={sentinelRef} />
      <ProductList products={products} skeletonQuantity={LIMIT} status={productDataStatus} />
    </>
  );
};
