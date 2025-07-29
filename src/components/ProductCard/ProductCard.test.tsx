import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { ProductCard } from './ProductCard';

describe('ProductCard', () => {
  const renderProductCard = () =>
    render(
      <ProductCard>
        <div>Children</div>
      </ProductCard>,
    );
  it('renders the component correctly', () => {
    const { getByTestId } = renderProductCard();
    expect(getByTestId('card')).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    const { getByText } = renderProductCard();
    expect(getByText('Children')).toBeInTheDocument();
  });
});
