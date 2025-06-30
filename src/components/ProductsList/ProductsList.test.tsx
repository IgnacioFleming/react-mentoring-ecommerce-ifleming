import { describe, expect, it } from 'vitest';
import { Product } from '../../types/products';
import { render } from '@testing-library/react';
import { ProductsList } from './ProductsList';
import { MemoryRouter } from 'react-router-dom';

const PRODUCTS_MOCK: Product[] = [
  {
    brand: 'mockBrand 1',
    title: 'mockName 1',
    rating: 4.1,
    price: 100,
    discountPercentage: 10,
    thumbnail: 'mockURL/1',
  },
  {
    brand: 'mockBrand 2',
    title: 'mockName 2',
    rating: 4.2,
    price: 200,
    discountPercentage: 20,
    thumbnail: 'mockURL/2',
  },
  {
    brand: 'mockBrand 3',
    title: 'mockName 3',
    rating: 4.3,
    price: 300,
    discountPercentage: 30,
    thumbnail: 'mockURL/3',
  },
];

describe('ProductsList', () => {
  const renderProductsListMock = () =>
    render(
      <MemoryRouter>
        <ProductsList products={PRODUCTS_MOCK} />
      </MemoryRouter>,
    );

  it('renders the component correctly', () => {
    const { getByRole } = renderProductsListMock();
    expect(getByRole('list')).toBeInTheDocument();
    expect(getByRole('list')).toHaveClass(/products-list/i);
  });

  it('renders the correct quantity of ProductCards', () => {
    const { getAllByRole } = renderProductsListMock();
    expect(getAllByRole('listitem')).toHaveLength(3);
  });
});
