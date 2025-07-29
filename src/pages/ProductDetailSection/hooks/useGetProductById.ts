import { STALE_TIMES } from '@/lib/api/config';
import { getProductById } from '@/lib/api/products';
import { Product } from '@/types/products';
import { useQuery } from '@tanstack/react-query';

export const useGetProductById = (id: Product['id']) => {
  const {
    data: product,
    isLoading,
    isError,
    ...rest
  } = useQuery({
    queryKey: ['productDetail'],
    queryFn: () => getProductById(id),
    staleTime: STALE_TIMES.DEFAULT,
    gcTime: 0,
  });

  return { product, isLoading, isError, ...rest };
};
