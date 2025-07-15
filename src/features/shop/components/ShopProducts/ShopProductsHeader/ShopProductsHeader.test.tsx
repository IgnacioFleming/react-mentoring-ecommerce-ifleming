import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { ShopProductsHeader, ShopProductsHeaderProps } from './ShopProductsHeader';

describe('ShopProductsHeader', () => {
  const mockTotal = 10;

  const renderShopProductsHeader = (props?: ShopProductsHeaderProps) => {
    const defaultProps: ShopProductsHeaderProps = {
      isVisible: false,
      total: mockTotal,
    };
    return render(
      <MemoryRouter>
        <ShopProductsHeader {...defaultProps} {...props} />
      </MemoryRouter>,
    );
  };

  it('should not render heading and Select when isVisible prop is false', () => {
    const { queryByRole, queryByTestId } = renderShopProductsHeader();
    expect(
      queryByRole('heading', { name: `Showing all ${mockTotal} results` }),
    ).not.toBeInTheDocument();
    expect(queryByTestId('select')).not.toBeInTheDocument();
  });

  it('should render heading and Select when isVisible prop is true', () => {
    const { queryByRole, queryByTestId } = renderShopProductsHeader({ isVisible: true, total: 5 });
    expect(queryByRole('heading', { name: `Showing all 5 results` })).toBeInTheDocument();
    expect(queryByTestId('select')).toBeInTheDocument();
  });
});
