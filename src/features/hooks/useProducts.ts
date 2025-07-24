import { useQuery } from '@tanstack/react-query';
import { DataStatus, ProductQueryParams } from '../../types/products';
import { getProducts } from '../../lib/api/products';
import { STALE_TIMES } from '../../lib/api/config';
import { useProductStore } from '../../stores/useProductStore';
import { useEffect } from 'react';

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
  });

  useEffect(() => {
    const getQueryStatus = (): DataStatus => {
      if (isErrorProducts) return 'error';
      if (isFetchingProducts) return 'loading';
      return 'success';
    };
    setStatus(getQueryStatus());
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
