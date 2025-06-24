import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Product } from '../../../../../types/products';
import { ProductCard } from './ProductCard';
import { MemoryRouter } from 'react-router-dom';

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

  it('renders thumbnail correctly', () => {
    const { getByRole } = renderProductCard();
    expect(getByRole('img')).toBeInTheDocument();
    expect(getByRole('img')).toHaveAttribute('src', MOCK_PRODUCT.thumbnail);
  });

  it('renders 3 icons in thumbnail', () => {
    const { getByTestId } = renderProductCard();
    expect(getByTestId('card-thumbnail').querySelectorAll('svg')).toHaveLength(3);
  });

  it('renders brand name in content header', () => {
    const { getByRole } = renderProductCard();
    expect(getByRole('link', { name: MOCK_PRODUCT.brand })).toBeInTheDocument();
  });

  it('renders rating in content header', () => {
    const { getByText } = renderProductCard();
    expect(getByText(MOCK_PRODUCT.rating)).toBeInTheDocument();
  });

  it('renders product name, price and discount correctly in content main', () => {
    const { getByText } = renderProductCard();
    expect(getByText(MOCK_PRODUCT.name)).toBeInTheDocument();
    expect(getByText(`$${MOCK_PRODUCT.price}`)).toBeInTheDocument();
    expect(getByText(`${MOCK_PRODUCT.discount}% off`)).toBeInTheDocument();
  });

  it('renders footer button correctly', () => {
    const { getByRole } = renderProductCard();
    expect(getByRole('button', { name: 'Learn More' })).toBeInTheDocument();
  });
});
