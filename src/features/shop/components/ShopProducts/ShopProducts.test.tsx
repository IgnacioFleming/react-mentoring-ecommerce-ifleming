import { describe, expect, it, vi } from 'vitest';
import { Product } from '../../../../types/products';
import { ShopProducts } from './ShopProducts';
import { render } from '@testing-library/react';
import { useProducts } from '../../../hooks/useProducts';
import { MemoryRouter } from 'react-router-dom';

const mockUseProducts = vi.hoisted(() => vi.fn());

vi.mock('../../../hooks/useProducts', () => ({
  useProducts: mockUseProducts,
}));

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
  {
    brand: 'mockBrand 3',
    title: 'mockName 3',
    rating: 4.3,
    price: 300,
    discountPercentage: 30,
    thumbnail: 'mockURL/3',
  },
]);

describe('ShopProducts', () => {
  const renderShopProducts = () =>
    render(
      <MemoryRouter>
        <ShopProducts />
      </MemoryRouter>,
    );

  it('renders ProductListError component when data status is error', () => {
    mockUseProducts.mockImplementation(() => ({
      products: PRODUCTS_MOCK,
      getQueryStatus: vi.fn().mockReturnValue('error'),
      displayedProductQuantity: 24,
    }));
    const { getByRole } = renderShopProducts();
    expect(getByRole('heading', { name: 'Loading Error:' }));
  });

  it('renders skeletons when data status is loading', () => {
    mockUseProducts.mockImplementation(() => ({
      products: PRODUCTS_MOCK,
      getQueryStatus: vi.fn().mockReturnValue('loading'),
      displayedProductQuantity: 3,
    }));
    const { queryAllByTestId } = renderShopProducts();
    expect(queryAllByTestId('skeleton')).toHaveLength(24 * 5);
  });

  it('renders label and 3 ProductCards when data status is success', () => {
    mockUseProducts.mockImplementation(() => ({
      products: PRODUCTS_MOCK,
      getQueryStatus: vi.fn().mockReturnValue('success'),
      displayedProductQuantity: 3,
    }));
    const { displayedProductQuantity } = useProducts();
    const { getByText, queryAllByTestId } = renderShopProducts();

    expect(getByText(`Showing all ${displayedProductQuantity} results`));
    expect(getByText('mockBrand 1'));
    expect(getByText('mockBrand 2'));
    expect(getByText('mockBrand 3'));
    expect(queryAllByTestId('card')).toHaveLength(3);
  });
});
