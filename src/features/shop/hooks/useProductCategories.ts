import { useQuery } from '@tanstack/react-query';
import { getProductCategories } from '../../../lib/api/products';
import { STALE_TIMES } from '../../../lib/api/config';

export const useProductCategories = () => {
  const {
    data: productCategories,
    isLoading: isLoadingProductCategories,
    error: productCategoriesError,
    ...rest
  } = useQuery({
    queryKey: ['productCategories'],
    queryFn: getProductCategories,
    staleTime: STALE_TIMES.DEFAULT,
  });

  return {
    productCategories,
    isLoadingProductCategories,
    productCategoriesError,
    ...rest,
  };
};
