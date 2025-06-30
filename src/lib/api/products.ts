import { API_BASE_URL } from './config';
import type { Category, Product } from '../../types/products';

type ProductsResponse = {
  products: Product[];
};

export const getProductCategories = async (): Promise<Category[]> => {
  const res = await fetch(`${API_BASE_URL}/products/categories`);

  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }

  return res.json();
};

export const getProducts = async ({ params }: { params?: string }): Promise<ProductsResponse> => {
  const res = await fetch(`${API_BASE_URL}/products${params ? '?' + params : ''}`);

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
};
