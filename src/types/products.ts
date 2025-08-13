export type Category = {
  slug: string;
  name: string;
  url: string;
};

type ProductReview = {
  rating: number;
  comment: string;
  date: Date;
  reviewerName: string;
  reviewerEmail: string;
};

export type Product = {
  id: number;
  title: string;
  brand: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
  rating: number;
  availabilityStatus: 'In Stock' | 'Low Stock' | 'Out of Stock';
  description: string;
  reviews: ProductReview[];
  weight: number;
  dimensions: { height?: number; width?: number; depth?: number };
  warrantyInformation: string;
  shippingInformation: string;
  returnPolicy: string;
};

export const PRODUCT_DATA_STATUS = {
  LOADING: 'loading',
  ERROR: 'error',
  SUCCESS: 'success',
} as const;

export type DataStatus = (typeof PRODUCT_DATA_STATUS)[keyof typeof PRODUCT_DATA_STATUS];

export type QueryParams<T> = {
  sortBy?: keyof T;
  order?: 'asc' | 'desc';
  limit?: number;
  skip?: number;
};

export type ProductQueryParams = QueryParams<Product>;

export type QueryKey = string;
