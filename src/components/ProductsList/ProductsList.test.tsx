import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Product } from '../../types/products';
import { ProductsList, ProductsListProps } from './ProductsList';

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
  const renderProductsListMock = (props?: Partial<ProductsListProps>) => {
    const defaultProps: ProductsListProps = {
      products: PRODUCTS_MOCK,
      skeletonQuantity: 4,
      status: 'success',
    };
    return render(
      <MemoryRouter>
        <ProductsList {...defaultProps} {...props} />
      </MemoryRouter>,
    );
  };

  it('renders the component correctly', () => {
    const { getByRole } = renderProductsListMock();
    expect(getByRole('list')).toBeInTheDocument();
    expect(getByRole('list')).toHaveClass(/products-list/i);
  });

  it('renders the correct quantity of ProductCards', () => {
    const { getAllByRole } = renderProductsListMock();
    expect(getAllByRole('listitem')).toHaveLength(3);
  });

  it('renders ProductsListError when status is error', () => {
    const { getByRole } = renderProductsListMock({ status: 'error' });
    expect(getByRole('heading', { name: 'Loading Error:' }));
  });

  it('renders skeletons when status is loading', () => {
    const { queryAllByTestId } = renderProductsListMock({ status: 'loading' });
    expect(queryAllByTestId('skeleton')).toHaveLength(5 * 4);
  });
});
