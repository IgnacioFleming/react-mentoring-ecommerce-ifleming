import { API_BASE_URL } from './config';
import type { Category, Product } from '../../types/products';

type TopRatedProductResponse = {
  products: Product[];
};

export const getProductCategories = async (): Promise<Category[]> => {
  const res = await fetch(`${API_BASE_URL}/products/categories`);

  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }

  return res.json();
};

export const getTopRatedProducts = async (): Promise<TopRatedProductResponse> => {
  const res = await fetch(`${API_BASE_URL}/products?sortBy=rating&order=desc&limit=8`);

  if (!res.ok) {
    throw new Error('Failed to fetch top rated products');
  }

  return res.json();
};
