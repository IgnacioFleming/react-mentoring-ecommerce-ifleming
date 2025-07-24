import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { ProductCard } from '../ProductCard';

describe('ProductCard.Content', () => {
  const renderProductCardContent = () =>
    render(
      <ProductCard.Content>
        <div>Children</div>
      </ProductCard.Content>,
    );
  it('renders children correctly', () => {
    const { getByText } = renderProductCardContent();
    expect(getByText('Children')).toBeInTheDocument();
  });

  it('renders footer button', () => {
    const { getByRole } = renderProductCardContent();
    expect(getByRole('button', { name: 'Learn More' })).toBeInTheDocument();
  });
});
