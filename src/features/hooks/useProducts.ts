import { useQuery } from '@tanstack/react-query';
import { DataStatus, ProductQueryParams } from '../../types/products';
import { getProducts } from '../../lib/api/products';
import { STALE_TIMES } from '../../lib/api/config';

export const useProducts = (params: Partial<ProductQueryParams> = {}) => {
  const {
    data: { products, limit, skip, total } = { products: [], limit: 0, skip: 0, total: 0 },
    isLoading: isLoadingProducts,
    error: productsError,
    isError: isErrorProducts,
    ...rest
  } = useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts(params),
    staleTime: STALE_TIMES.DEFAULT,
  });

  const getQueryStatus = (): DataStatus => {
    if (isErrorProducts) return 'error';
    if (isLoadingProducts) return 'loading';
    return 'success';
  };

  const displayedProductQuantity = limit + skip;

  const hasMore = displayedProductQuantity < total;

  return {
    products,
    hasMore,
    displayedProductQuantity,
    isLoadingProducts,
    productsError,
    isErrorProducts,
    getQueryStatus,
    ...rest,
  };
};
