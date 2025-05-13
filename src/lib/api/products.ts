import { API_BASE_URL } from './config';
import type { Category } from '../../types/products';

export const getProductCategories = async (): Promise<Category[]> => {
  const res = await fetch(`${API_BASE_URL}/products/categories`);

  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }

  return res.json();
};
