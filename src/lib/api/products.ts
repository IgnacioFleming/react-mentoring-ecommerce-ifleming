import { API_BASE_URL } from './config';
import type { Category, Product, ProductQueryParams } from '../../types/products';
import { composeQueryParams } from './utils';

type ProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export const getProductCategories = async (): Promise<Category[]> => {
  const res = await fetch(`${API_BASE_URL}/products/categories`);

  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }

  return res.json();
};

export const getProducts = async (
  params: Partial<ProductQueryParams>,
): Promise<ProductsResponse> => {
  const queryParams = composeQueryParams<ProductQueryParams>(params);
  const res = await fetch(`${API_BASE_URL}/products${queryParams}`);

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
};
