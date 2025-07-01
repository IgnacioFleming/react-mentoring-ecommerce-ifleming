import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { TopRatedProducts } from './TopRatedProducts';
import { Product } from '../../../../types/products';

const PRODUCTS_MOCK: Product[] = vi.hoisted(() => [
  {
    brand: 'mockBrand 1',
    title: 'mockName 1',
    rating: 4.1,
    price: 100,
    discountPercentage: 10,
    thumbnail: 'mockURL/1',
  },
  {
    brand: 'mockBrand 2',
    title: 'mockName 2',
    rating: 4.2,
    price: 200,
    discountPercentage: 20,
    thumbnail: 'mockURL/2',
  },
]);

const mockUseProducts = vi.hoisted(() =>
  vi.fn(() => ({
    products: PRODUCTS_MOCK,
    getQueryStatus: vi.fn(() => 'success'),
  })),
);

vi.mock('../../../hooks/useProducts', () => ({
  useProducts: () => mockUseProducts(),
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

  it('renders 2 product cards if getQueryStatus is success', () => {
    const { getByText, queryAllByTestId } = renderTopRatedProducts();
    expect(queryAllByTestId('card')).toHaveLength(2);
    expect(getByText('mockBrand 1')).toBeInTheDocument();
    expect(getByText('mockBrand 2')).toBeInTheDocument();
  });

  it('renders 8 loading ProductCards if getQueryStatus', () => {
    mockUseProducts.mockImplementation(() => ({
      products: PRODUCTS_MOCK,
      getQueryStatus: vi.fn(() => 'loading'),
    }));
    const { queryAllByTestId } = renderTopRatedProducts();
    expect(queryAllByTestId('skeleton')).toHaveLength(8 * 5);
  });
});
