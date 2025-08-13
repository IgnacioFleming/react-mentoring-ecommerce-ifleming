import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { Product } from '@/types/products';
import { ProductStore } from '@/stores/useProductStore';

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

const REVIEWS_MOCK = [
  {
    rating: 3,
    comment: 'some comment',
    date: new Date(),
    reviewerName: 'mockReviewer',
    reviewerEmail: 'mock.reviewer@example.com',
  },
];

export const PRODUCTS_MOCK: Product[] = [
  {
    id: 1,
    brand: 'mockBrand 1',
    title: 'mockName 1',
    rating: 4.1,
    price: 100,
    discountPercentage: 10,
    thumbnail: 'mockURL/1',
    availabilityStatus: 'In Stock',
    description: 'Some short description',
    reviews: REVIEWS_MOCK,
    dimensions: {},
    returnPolicy: 'some text',
    shippingInformation: 'shipping in 1 day',
    warrantyInformation: '6 months warranty',
    weight: 10,
  },
  {
    id: 2,
    brand: 'mockBrand 2',
    title: 'mockName 2',
    rating: 4.2,
    price: 200,
    discountPercentage: 20,
    thumbnail: 'mockURL/2',
    availabilityStatus: 'In Stock',
    description: 'Some short description',
    reviews: REVIEWS_MOCK,
    dimensions: {},
    returnPolicy: 'some text',
    shippingInformation: 'shipping in 1 day',
    warrantyInformation: '6 months warranty',
    weight: 10,
  },
  {
    id: 3,
    brand: 'mockBrand 3',
    title: 'mockName 3',
    rating: 4.3,
    price: 300,
    discountPercentage: 30,
    thumbnail: 'mockURL/3',
    availabilityStatus: 'In Stock',
    description: 'Some short description',
    reviews: REVIEWS_MOCK,
    dimensions: {},
    returnPolicy: 'some text',
    shippingInformation: 'shipping in 1 day',
    warrantyInformation: '6 months warranty',
    weight: 10,
  },
];

export const defaultProductStoreProps: ProductStore = {
  status: 'success',
  total: 5,
  products: PRODUCTS_MOCK,
  getProductById: vi.fn().mockReturnValue(PRODUCTS_MOCK[0]),
  setProducts: vi.fn(),
  setStatus: vi.fn(),
  setTotal: vi.fn(),
};

const mockUseProductStore = vi.hoisted(() =>
  vi.fn().mockImplementation((selector) => selector({ ...defaultProductStoreProps })),
);

vi.mock('@/stores/useProductStore', () => {
  return {
    useProductStore: mockUseProductStore,
  };
});
