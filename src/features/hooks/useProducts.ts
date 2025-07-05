import { useQuery } from '@tanstack/react-query';
import { DataStatus, ProductQueryParams } from '../../types/products';
import { getProducts } from '../../lib/api/products';
import { STALE_TIMES } from '../../lib/api/config';

type UseProductsProps = {
  queryKey: string;
  params?: Partial<ProductQueryParams>;
};

export const useProducts = ({ queryKey, params = {} }: UseProductsProps) => {
  const {
    data: { products, total } = { products: [], total: 0 },
    isLoading: isLoadingProducts,
    error: productsError,
    isError: isErrorProducts,
    ...rest
  } = useQuery({
    queryKey: [queryKey],
    queryFn: () => getProducts(params),
    staleTime: STALE_TIMES.DEFAULT,
  });

  const getQueryStatus = (): DataStatus => {
    if (isErrorProducts) return 'error';
    if (isLoadingProducts) return 'loading';
    return 'success';
  };

  return {
    products,
    total,
    isLoadingProducts,
    productsError,
    isErrorProducts,
    getQueryStatus,
    ...rest,
  };
};
