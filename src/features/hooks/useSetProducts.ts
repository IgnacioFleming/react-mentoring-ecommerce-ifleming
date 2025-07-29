import { useEffect } from 'react';
import { useProductStore } from '@/stores/useProductStore';
import { Product } from '../../types/products';

export const useSetProducts = (products: Product[] = []) => {
  const setProducts = useProductStore((state) => state.setProducts);

  useEffect(() => {
    setProducts(products);
  }, [products, setProducts]);
};
