import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../../lib/api/products';
import { STALE_TIMES } from '../../../lib/api/config';

export const useTopRatedProducts = () => {
  const {
    data: { products: topRatedProducts } = { products: [] },
    isLoading: isLoadingTopRatedProducts,
    error: topRatedProductsError,
    ...rest
  } = useQuery({
    queryKey: ['topRatedProducts'],
    queryFn: () => getProducts({ params: 'sortBy=rating&order=desc&limit=8' }),
    staleTime: STALE_TIMES.DEFAULT,
  });

  return {
    topRatedProducts,
    isLoadingTopRatedProducts,
    topRatedProductsError,
    ...rest,
  };
};
