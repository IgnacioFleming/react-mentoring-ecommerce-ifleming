export type Category = {
  slug: string;
  name: string;
  url: string;
};

export type Product = {
  title: string;
  brand: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
  rating: number;
};

export const PRODUCT_DATA_STATUS = {
  LOADING: 'loading',
  ERROR: 'error',
  SUCCESS: 'success',
} as const;

export type DataStatus = (typeof PRODUCT_DATA_STATUS)[keyof typeof PRODUCT_DATA_STATUS];

interface QueryParams {
  sortBy: string;
  order: 'asc' | 'desc';
  limit: number;
}

export interface ProductQueryParams extends QueryParams {
  sortBy: keyof Product;
}
