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

export type QueryParams<T> = {
  sortBy: keyof T;
  order: 'asc' | 'desc';
  limit: number;
  skip: number;
};

export type ProductQueryParams = QueryParams<Product>;

export type QueryKey = string;
