import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Product } from '../../../../../types/products';
import { ProductCard } from './ProductCard';

describe('ProductCard', () => {
  const MOCK_PRODUCT: Product = {
    brand: 'mockBrand',
    name: 'mockName',
    rating: 5,
    discount: 10,
    price: 100,
    thumbnail: 'mockUrl',
  };
  const renderProductCard = () =>
    render(
      <MemoryRouter>
        <ProductCard product={MOCK_PRODUCT} />
      </MemoryRouter>,
    );
  it('renders the component correctly', () => {
    const { getByTestId } = renderProductCard();
    expect(getByTestId('card')).toBeInTheDocument();
  });

  it('renders footer button correctly', () => {
    const { getByRole } = renderProductCard();
    expect(getByRole('button', { name: 'Learn More' })).toBeInTheDocument();
  });
});
