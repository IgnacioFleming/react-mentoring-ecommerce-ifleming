import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { ProductCard } from '../ProductCard';
import { MemoryRouter } from 'react-router-dom';

describe('ProductCard.Content', () => {
  const renderProductCardContent = () =>
    render(
      <MemoryRouter>
        <ProductCard.Content id={1}>
          <div>Children</div>
        </ProductCard.Content>
      </MemoryRouter>,
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
