import { useQuery } from '@tanstack/react-query';
import { getTopRatedProducts } from '../../../lib/api/products';
import { STALE_TIMES } from '../../../lib/api/config';

export const useTopRatedProducts = () => {
  const {
    data: { products: topRatedProducts } = { products: [] },
    isLoading: isLoadingTopRatedProducts,
    error: topRatedProductsError,
    ...rest
  } = useQuery({
    queryKey: ['topRatedProducts'],
    queryFn: getTopRatedProducts,
    staleTime: STALE_TIMES.DEFAULT,
  });

  return {
    topRatedProducts,
    isLoadingTopRatedProducts,
    topRatedProductsError,
    ...rest,
  };
};
