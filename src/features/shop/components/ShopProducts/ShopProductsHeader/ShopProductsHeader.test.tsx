import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { ShopProductsHeader } from './ShopProductsHeader';

const mockUseProductStore = vi.hoisted(() => vi.fn());

vi.mock('../../../../../stores/useProductStore', () => ({ useProductStore: mockUseProductStore }));

describe('ShopProductsHeader', () => {
  const renderShopProductsHeader = () =>
    render(
      <MemoryRouter>
        <ShopProductsHeader />
      </MemoryRouter>,
    );

  it('should not render heading and Select when total is undefined', () => {
    const mockTotal = undefined;
    mockUseProductStore.mockImplementation((selector) => selector({ total: mockTotal }));
    const { queryByRole, queryByTestId } = renderShopProductsHeader();
    expect(
      queryByRole('heading', { name: `Showing all ${mockTotal} results` }),
    ).not.toBeInTheDocument();
    expect(queryByTestId('select')).not.toBeInTheDocument();
  });

  it('should render heading and Select when total is a number', () => {
    const mockTotal = 10;
    mockUseProductStore.mockImplementation((selector) => selector({ total: mockTotal }));

    const { queryByRole, queryByTestId } = renderShopProductsHeader();
    expect(queryByRole('heading', { name: `Showing all 10 results` })).toBeInTheDocument();
    expect(queryByTestId('select')).toBeInTheDocument();
  });
});
