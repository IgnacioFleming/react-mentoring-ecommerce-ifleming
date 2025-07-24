import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Product, ProductQueryParams } from '../../../../types/products';
import { useProductStore } from '../../../../stores/useProductStore';
import { useProducts } from '../../../hooks/useProducts';
import { useSetProducts } from '../../../hooks/useSetProducts';
import { useInfiniteScroll } from '../../../hooks/useInfiniteScroll';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { useHandleOffset } from '../../../hooks/useHandleOffset';
import { ProductList } from '../../../../components/ProductList';
import { ShopProductsHeader } from './ShopProductsHeader';
import styles from './ShopProducts.module.scss';

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
  const status = useProductStore((state) => state.status);
  const total = useProductStore((state) => state.total);

  const params = new URLSearchParams(search).get('orderBy') || '';

  const { offset, handleOffset } = useHandleOffset(LIMIT);

  const { products: fetchedProducts, refetch } = useProducts({
    params: { limit: LIMIT, skip: offset, ...PARAMS_OPTIONS[params] },
    queryKey: SHOP_QUERY_KEY,
  });

  const { accItems } = useInfiniteScroll<Product>({
    loadMore: refetch,
    offset,
    newItems: fetchedProducts,
    totalItems: total,
    params,
  });

  useSetProducts(accItems);

  useIntersectionObserver({ ref: sentinelRef, cb: handleOffset });

  return (
    <>
      <ShopProductsHeader />
      <div className={styles['product-list']}>
        <ProductList offset={LIMIT} />
      </div>
      {status === 'success' && <div ref={sentinelRef} data-testid="sentinel" />}
    </>
  );
};
