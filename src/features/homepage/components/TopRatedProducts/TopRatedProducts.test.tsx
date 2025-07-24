import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { TopRatedProducts } from './TopRatedProducts';
import { Product } from '../../../../types/products';

const REVIEWS_MOCK = vi.hoisted(() => [
  {
    rating: 3,
    comment: 'some comment',
    date: new Date(),
    reviewerName: 'mockReviewer',
    reviewerEmail: 'mock.reviewer@example.com',
  },
]);

const PRODUCTS_MOCK: Product[] = vi.hoisted(() => [
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
]);

const mockUseProducts = vi.hoisted(() =>
  vi.fn(() => ({
    products: PRODUCTS_MOCK,
  })),
);

vi.mock('../../../hooks/useProducts', () => ({
  useProducts: () => mockUseProducts(),
}));

vi.mock('../../../../components/ProductList', () => ({
  ProductList: () => <div data-testid="product-list">Product List Mock</div>,
}));

describe('TopRatedProducts', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const renderTopRatedProducts = () =>
    render(
      <MemoryRouter>
        <TopRatedProducts />
      </MemoryRouter>,
    );

  it('renders header elements correctly', () => {
    const { getByRole, getByText } = renderTopRatedProducts();
    expect(getByRole('heading', { name: 'Featured Products' })).toBeInTheDocument();
    expect(getByRole('heading', { name: 'Top Rated Products' })).toBeInTheDocument();
    expect(getByText('Customer favorites loved for quality and style')).toBeInTheDocument();
  });

  it('renders ProductList component', () => {
    const { getByTestId } = renderTopRatedProducts();
    expect(getByTestId('product-list')).toBeInTheDocument();
  });
});
