import { useEffect } from 'react';
import { useProductStore } from '../../stores/useProductStore';
import { Product } from '../../types/products';

export const useSetProducts = (products: Product[] = []) => {
  const setProducts = useProductStore((state) => state.setProducts);

  useEffect(() => {
    if (products.length === 0) return;
    setProducts(products);
  }, [products, setProducts]);
};
