import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { TopRatedProducts } from './TopRatedProducts';
import { PRODUCTS } from './products';

describe('TopRatedProducts', () => {
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

  it('renders 8 product cards', () => {
    const { queryAllByTestId } = renderTopRatedProducts();
    expect(queryAllByTestId('card')).toHaveLength(8);
  });

  it('renders correctly each product', () => {
    const { getByRole } = renderTopRatedProducts();
    PRODUCTS.forEach((p) => {
      expect(getByRole('heading', { name: p.name })).toBeInTheDocument();
    });
  });
});
