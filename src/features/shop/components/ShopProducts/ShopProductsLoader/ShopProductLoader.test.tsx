import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { ShopProductLoader } from './ShopProductsLoader';

describe('ShopProductLoader', () => {
  const renderShopProductLoader = (loading = false, quantity = 1) =>
    render(<ShopProductLoader loading={loading} quantity={quantity} />);

  it('should return null when loading prop is false', () => {
    const { queryByTestId } = renderShopProductLoader();
    expect(queryByTestId('skeleton')).toBeNull();
  });

  it('should display skeleton cards when loading is true', () => {
    const { queryAllByTestId, getByTestId } = renderShopProductLoader(true);
    expect(getByTestId('card')).toBeInTheDocument();
    expect(queryAllByTestId('skeleton')).toHaveLength(5);
  });

  it('should display a number of cards equal to quantity prop', () => {
    const { queryAllByTestId } = renderShopProductLoader(true, 5);
    expect(queryAllByTestId('card')).toHaveLength(5);
  });
});
