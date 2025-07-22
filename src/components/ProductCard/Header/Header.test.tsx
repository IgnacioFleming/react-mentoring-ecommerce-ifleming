import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ProductCard } from '../ProductCard';

describe('ProductCardHeader', () => {
  const MOCK_BRAND = 'mockBrand';
  const MOCK_RATING = 4.5;
  const renderProductCardHeader = () =>
    render(
      <MemoryRouter>
        <ProductCard.Header brand={MOCK_BRAND} rating={MOCK_RATING} />
      </MemoryRouter>,
    );

  it('renders brand name in content header', () => {
    const { getByRole } = renderProductCardHeader();
    expect(getByRole('link', { name: MOCK_BRAND })).toBeInTheDocument();
  });

  it('renders rating in content header', () => {
    const { getByText } = renderProductCardHeader();
    expect(getByText(MOCK_RATING)).toBeInTheDocument();
  });
});
