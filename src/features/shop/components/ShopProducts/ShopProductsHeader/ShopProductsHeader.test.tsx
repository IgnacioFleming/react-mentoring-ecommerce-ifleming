import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { ShopProductsHeader } from './ShopProductsHeader';
import { useProductStore } from '@/stores/useProductStore';
import { defaultProductStoreProps } from '@tests/setup';

const mockUseProductStore = vi.mocked(useProductStore);

describe('ShopProductsHeader', () => {
  const renderShopProductsHeader = () =>
    render(
      <MemoryRouter>
        <ShopProductsHeader />
      </MemoryRouter>,
    );

  it('should not render heading and Select when total is 0', () => {
    const mockTotal = 0;
    mockUseProductStore.mockImplementation((selector) =>
      selector({ ...defaultProductStoreProps, total: mockTotal }),
    );
    const { queryByRole, queryByTestId } = renderShopProductsHeader();
    expect(queryByRole('heading', { name: `Showing all ${3} results` })).not.toBeInTheDocument();
    expect(queryByTestId('select')).not.toBeInTheDocument();
  });

  it('should render heading and Select when total is greater than 0', () => {
    const mockTotal = 10;
    mockUseProductStore.mockImplementation((selector) =>
      selector({ ...defaultProductStoreProps, total: mockTotal }),
    );

    const { queryByRole, queryByTestId } = renderShopProductsHeader();
    expect(queryByRole('heading', { name: `Showing all 10 results` })).toBeInTheDocument();
    expect(queryByTestId('select')).toBeInTheDocument();
  });
});
