import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Product } from '../../types/products';
import { ProductList, ProductListProps } from './ProductList';

const REVIEWS_MOCK = [
  {
    rating: 3,
    comment: 'some comment',
    date: new Date(),
    reviewerName: 'mockReviewer',
    reviewerEmail: 'mock.reviewer@example.com',
  },
];

const PRODUCTS_MOCK: Product[] = [
  {
    id: 1,
    brand: 'mockBrand 1',
    title: 'mockName 1',
    rating: 4.1,
    price: 100,
    discountPercentage: 10,
    thumbnail: 'mockURL/1',
    availabilityStatus: 'In Stock',
    description: 'Some short description',
    reviews: REVIEWS_MOCK,
  },
  {
    id: 2,
    brand: 'mockBrand 2',
    title: 'mockName 2',
    rating: 4.2,
    price: 200,
    discountPercentage: 20,
    thumbnail: 'mockURL/2',
    availabilityStatus: 'In Stock',
    description: 'Some short description',
    reviews: REVIEWS_MOCK,
  },
  {
    id: 3,
    brand: 'mockBrand 3',
    title: 'mockName 3',
    rating: 4.3,
    price: 300,
    discountPercentage: 30,
    thumbnail: 'mockURL/3',
    availabilityStatus: 'In Stock',
    description: 'Some short description',
    reviews: REVIEWS_MOCK,
  },
];

const mockUseProductStore = vi.hoisted(() => vi.fn());

vi.mock('../../stores/useProductStore', () => ({ useProductStore: mockUseProductStore }));

vi.mock('../ProductCard', async () => {
  const actual = (await vi.importActual('../ProductCard')) as typeof import('../ProductCard');
  const ProductCardMock = actual.ProductCard;
  ProductCardMock.Thumbnail = () => <div>Thumbnail</div>;
  ProductCardMock.Header = () => <div>Header</div>;
  ProductCardMock.Main = () => <div>Main</div>;
  return { ProductCard: ProductCardMock };
});

describe('ProductList', () => {
  const renderProductListMock = (props?: Partial<ProductListProps>) => {
    const defaultProps: ProductListProps = {
      offset: 10,
    };
    return render(<ProductList {...defaultProps} {...props} />);
  };

  beforeEach(() => {
    vi.clearAllMocks();
    mockUseProductStore.mockImplementation((selector) =>
      selector({
        status: 'success',
        total: 3,
        products: PRODUCTS_MOCK,
      }),
    );
  });

  it('renders the component correctly', () => {
    const { getByRole } = renderProductListMock();
    expect(getByRole('list')).toBeInTheDocument();
    expect(getByRole('list')).toHaveClass(/products-list/i);
  });

  it('renders the correct quantity of ProductCards', () => {
    const { getAllByRole } = renderProductListMock();
    expect(getAllByRole('listitem')).toHaveLength(3);
  });

  it('renders ProductListError when status is error', () => {
    mockUseProductStore.mockImplementation((selector) =>
      selector({
        status: 'error',
        total: 3,
        products: PRODUCTS_MOCK,
      }),
    );
    const { getByRole } = renderProductListMock();
    expect(getByRole('heading', { name: 'Loading Error:' }));
  });

  it('renders skeletons when status is loading', () => {
    mockUseProductStore.mockImplementation((selector) =>
      selector({
        status: 'loading',
        total: 3,
        products: [],
      }),
    );
    const { queryAllByTestId } = renderProductListMock();
    screen.debug();
    expect(queryAllByTestId('skeleton')).toHaveLength(5 * 3);
  });
});
