import { useQuery } from '@tanstack/react-query';
import { ProductQueryParams } from '../../types/products';
import { getProducts } from '../../lib/api/products';
import { STALE_TIMES } from '../../lib/api/config';
import { useProductStore } from '@/stores/useProductStore';
import { useEffect } from 'react';
import { getQueryStatus } from '@/lib/api/utils';

type UseProductsProps = {
  queryKey: string;
  params?: Partial<ProductQueryParams>;
};

export const useProducts = ({ queryKey, params = {} }: UseProductsProps) => {
  const setStatus = useProductStore((state) => state.setStatus);
  const setTotal = useProductStore((state) => state.setTotal);
  const setProducts = useProductStore((state) => state.setProducts);
  const {
    data: { products, total } = { products: [], total: 0 },
    isLoading: isLoadingProducts,
    error: productsError,
    isError: isErrorProducts,
    isFetching: isFetchingProducts,
    ...rest
  } = useQuery({
    queryKey: [queryKey],
    queryFn: () => getProducts(params),
    staleTime: STALE_TIMES.DEFAULT,
    gcTime: 0,
  });

  useEffect(() => {
    setStatus(getQueryStatus(isErrorProducts, isFetchingProducts));
  }, [isErrorProducts, isFetchingProducts, setStatus]);

  useEffect(() => {
    setTotal(total);
  }, [setTotal, total, queryKey]);

  useEffect(() => {
    setProducts([]);
  }, [queryKey, setProducts]);

  return {
    products,
    total,
    isLoadingProducts,
    isFetchingProducts,
    productsError,
    isErrorProducts,
    ...rest,
  };
};
