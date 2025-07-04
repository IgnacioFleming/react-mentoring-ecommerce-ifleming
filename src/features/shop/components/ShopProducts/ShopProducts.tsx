import { useEffect, useRef, useState } from 'react';
import { Product } from '../../../../types/products';
import { useProducts } from '../../../hooks/useProducts';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { ProductList } from '../../../../components/ProductList';
import styles from './ShopProducts.module.scss';

export const ShopProducts = () => {
  const [skip, setSkip] = useState<number>(0);
  const [shopProducts, setShopProducts] = useState<Product[]>([]);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const LIMIT = 24;

  const {
    products,
    getQueryStatus,
    displayedProductQuantity,
    refetch,
    hasMore,
    isLoadingProducts,
    isFetching,
  } = useProducts({
    limit: LIMIT,
    skip,
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
        {productDataStatus === 'success' && <h6>Showing all {displayedProductQuantity} results</h6>}
      </div>
      <ProductList products={shopProducts} skeletonQuantity={LIMIT} status={productDataStatus} />
      {!isLoadingProducts && isFetching && (
        <div className={styles['shop-products__loader']}>
          <ProductList products={[]} skeletonQuantity={LIMIT} status="loading" />
        </div>
      )}
      <div ref={sentinelRef} />
    </>
  );
};
