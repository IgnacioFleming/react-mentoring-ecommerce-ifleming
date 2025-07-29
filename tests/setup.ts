import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { Product } from '@/types/products';

afterEach(() => {
  cleanup();
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

const PRODUCTS_MOCK: Product[] = [
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
  },
];
const mockUseProductStore = vi
  .hoisted(() => vi.fn())
  .mockImplementation((selector) =>
    selector({
      status: 'success',
      total: 3,
      products: PRODUCTS_MOCK,
    }),
  );

vi.mock('@/stores/useProductStore', () => ({ useProductStore: mockUseProductStore }));
