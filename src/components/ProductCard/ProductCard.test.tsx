import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Product } from '../../types/products';
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
  const renderProductCard = ({ hasHeader }: { hasHeader?: boolean } = {}) =>
    render(
      <MemoryRouter>
        <ProductCard product={MOCK_PRODUCT} hasHeader={hasHeader} />
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

  it('does not render Header when hasHeader prop is undefined', () => {
    const { queryByRole, queryByText } = renderProductCard();
    expect(queryByRole('link', { name: MOCK_PRODUCT.brand })).toBeNull();
    expect(queryByText(MOCK_PRODUCT.rating)).toBeNull();
  });

  it('render Header when hasHeader prop is true', () => {
    const { getByRole, getByText } = renderProductCard({ hasHeader: true });
    expect(getByRole('link', { name: MOCK_PRODUCT.brand })).toBeInTheDocument();
    expect(getByText(MOCK_PRODUCT.rating)).toBeInTheDocument();
  });

  it('renders product props correctly', () => {
    const { getByRole, getByText } = renderProductCard({ hasHeader: true });
    expect(getByRole('link', { name: MOCK_PRODUCT.brand })).toBeInTheDocument();
    expect(getByRole('heading', { name: MOCK_PRODUCT.name })).toBeInTheDocument();
    expect(getByText(MOCK_PRODUCT.rating)).toBeInTheDocument();
    expect(getByRole('heading', { name: `${MOCK_PRODUCT.discount}% off` })).toBeInTheDocument();
    expect(getByRole('heading', { name: `$${MOCK_PRODUCT.price}` })).toBeInTheDocument();
    expect(getByRole('img')).toHaveAttribute('src', MOCK_PRODUCT.thumbnail);
  });
});
