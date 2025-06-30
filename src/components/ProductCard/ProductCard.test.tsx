import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Product } from '../../types/products';
import { ProductCard } from './ProductCard';

describe('ProductCard', () => {
  const MOCK_PRODUCT: Product = {
    brand: 'mockBrand',
    title: 'mockName',
    rating: 5,
    discountPercentage: 10,
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

  it('renders product props correctly', () => {
    const { getByRole, getByText } = renderProductCard();
    expect(getByRole('link', { name: MOCK_PRODUCT.brand })).toBeInTheDocument();
    expect(getByRole('heading', { name: MOCK_PRODUCT.title })).toBeInTheDocument();
    expect(getByText(MOCK_PRODUCT.rating)).toBeInTheDocument();
    expect(
      getByRole('heading', { name: `${MOCK_PRODUCT.discountPercentage}% off` }),
    ).toBeInTheDocument();
    expect(getByRole('heading', { name: `$${MOCK_PRODUCT.price}` })).toBeInTheDocument();
    expect(getByRole('img')).toHaveAttribute('src', MOCK_PRODUCT.thumbnail);
  });

  it('renders skeletons when product prop is null', () => {
    const { queryByTestId, queryAllByTestId } = render(<ProductCard product={null} />);
    expect(queryByTestId('card')).toBeInTheDocument();

    expect(queryByTestId('card-thumbnail')).toBeNull();
    expect(queryByTestId('card-header')).toBeNull();
    expect(queryByTestId('card-main')).toBeNull();
    expect(queryByTestId('card-footer')).toBeNull();

    expect(queryAllByTestId('skeleton')).toHaveLength(5);
  });
});
