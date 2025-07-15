import { useRef } from 'react';
import { Product, ProductQueryParams } from '../../../../types/products';
import { useProducts } from '../../../hooks/useProducts';
import { useInfiniteScroll } from '../../../hooks/useInfiniteScroll';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { useHandleOffset } from '../../../hooks/useHandleOffset';
import { ProductList } from '../../../../components/ProductList';
import { ShopProductLoader } from './ShopProductsLoader';
import { ShopProductsHeader } from './ShopProductsHeader';
import { useLocation } from 'react-router-dom';

const LIMIT = 24;
const SHOP_QUERY_KEY = 'shopProducts';
const PARAMS_OPTIONS: Record<string, ProductQueryParams> = {
  'top-rated': { sortBy: 'rating', order: 'desc' },
  'price-desc': { sortBy: 'price', order: 'desc' },
  'price-asc': { sortBy: 'price', order: 'asc' },
} as const;

export const ShopProducts = () => {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const { search } = useLocation();
  const params = search.split('=')[1] || '';
  const { offset, handleOffset } = useHandleOffset(LIMIT);

  const { products, getQueryStatus, total, refetch } = useProducts({
    params: { limit: LIMIT, skip: offset, ...PARAMS_OPTIONS[params] },
    queryKey: SHOP_QUERY_KEY,
  });

  const { accItems: shopProducts, loading } = useInfiniteScroll<Product>({
    loadMore: refetch,
    offset,
    newItems: products,
    totalItems: total,
    params,
    queryKey: SHOP_QUERY_KEY,
  });

  useIntersectionObserver({ ref: sentinelRef, cb: handleOffset });

  const productDataStatus = getQueryStatus();

  const productLeft = total - shopProducts.length;
  const skeletonQuantity = productLeft > LIMIT ? LIMIT : productLeft;

  return (
    <>
      <ShopProductsHeader isVisible={productDataStatus === 'success'} total={total} />
      <ProductList products={shopProducts} skeletonQuantity={LIMIT} status={productDataStatus} />
      <ShopProductLoader loading={loading} quantity={skeletonQuantity} />
      <div ref={sentinelRef} />
    </>
  );
};
