import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ProductCard } from '../ProductCard';
import { PRODUCTS_MOCK } from '@tests/setup';

describe('ProductCardHeader', () => {
  const renderProductCardHeader = () =>
    render(
      <MemoryRouter>
        <ProductCard.Header id={1} />
      </MemoryRouter>,
    );

  it('renders brand name in content header', () => {
    const { getByRole } = renderProductCardHeader();
    expect(getByRole('link', { name: PRODUCTS_MOCK[0].brand })).toBeInTheDocument();
  });

  it('renders rating in content header', () => {
    const { getByText } = renderProductCardHeader();
    expect(getByText(PRODUCTS_MOCK[0].rating)).toBeInTheDocument();
  });
});
