import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import { ORDER, ShopProductsSelect } from './ShopProductsSelect';

Object.defineProperty(HTMLElement.prototype, 'scrollIntoView', {
  value: vi.fn(),
  writable: true,
});

describe('ShopProductsSelect', () => {
  const renderShopProductsSelect = () =>
    render(
      <MemoryRouter>
        <ShopProductsSelect />
      </MemoryRouter>,
    );

  it('should render component correctly', () => {
    const { getByTestId } = renderShopProductsSelect();
    expect(getByTestId('select')).toBeInTheDocument();
  });

  it('should have "Default" as trigger text at first', () => {
    const { getByText } = renderShopProductsSelect();
    expect(getByText('Default')).toBeInTheDocument();
  });

  it('should display filters correctly when open select', () => {
    const { getByText, queryAllByText } = renderShopProductsSelect();
    const trigger = getByText('Default');
    fireEvent.click(trigger);

    ORDER.forEach((o) => {
      if (o.value === 'Default') return expect(queryAllByText(o.value)).toHaveLength(2);
      expect(getByText(o.value)).toBeInTheDocument();
    });
  });
});
