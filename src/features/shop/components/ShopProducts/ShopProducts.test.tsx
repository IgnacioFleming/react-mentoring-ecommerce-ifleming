import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Product } from '../../../../types/products';
import { ShopProducts } from './ShopProducts';

const mockUseProducts = vi.hoisted(() => vi.fn());
const mockUseProductStore = vi.hoisted(() => vi.fn());
const mockUseSetProducts = vi.hoisted(() => vi.fn());
const mockUseInfiniteScroll = vi.hoisted(() => vi.fn());
const mockUseIntersectionObserver = vi.hoisted(() => vi.fn());
const mockUseHandleOffset = vi.hoisted(() => vi.fn());

const REVIEWS_MOCK = vi.hoisted(() => [
  {
    rating: 3,
    comment: 'some comment',
    date: new Date(),
    reviewerName: 'mockReviewer',
    reviewerEmail: 'mock.reviewer@example.com',
  },
]);

const PRODUCTS_MOCK: Product[] = vi.hoisted(() => [
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
]);

vi.mock('../../../hooks/useProducts', () => ({
  useProducts: mockUseProducts,
}));

vi.mock('../../../hooks/useInfiniteScroll', () => ({
  useInfiniteScroll: mockUseInfiniteScroll,
}));

vi.mock('../../../hooks/useIntersectionObserver', () => ({
  useIntersectionObserver: mockUseIntersectionObserver,
}));

vi.mock('../../../hooks/useHandleOffset', () => ({
  useHandleOffset: mockUseHandleOffset,
}));

vi.mock('../../../../stores/useProductStore', () => ({
  useProductStore: mockUseProductStore,
}));

vi.mock('../../../hooks/useSetProducts', () => ({
  useSetProducts: mockUseSetProducts,
}));

vi.mock('../../../../components/ProductList', () => ({
  ProductList: () => <div>Product List Mock</div>,
}));

vi.mock('./ShopProductsHeader', () => ({
  ShopProductsHeader: () => <div>Header Mock</div>,
}));
describe('ShopProducts', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockUseProducts.mockReturnValue({
      products: PRODUCTS_MOCK,
      refetch: vi.fn(),
    });

    mockUseInfiniteScroll.mockReturnValue({
      accItems: PRODUCTS_MOCK,
      loading: false,
    });

    mockUseHandleOffset.mockReturnValue({
      offset: 0,
      handleOffset: vi.fn(),
    });

    mockUseSetProducts.mockReturnValue(undefined);
    mockUseIntersectionObserver.mockReturnValue(undefined);
  });

  const renderShopProducts = () =>
    render(
      <MemoryRouter>
        <ShopProducts />
      </MemoryRouter>,
    );

  it('renders ShopProductsHeader component correctly', () => {
    const { getByText } = renderShopProducts();
    expect(getByText('Header Mock')).toBeInTheDocument();
  });
  it('renders ProductList component correctly', () => {
    const { getByText } = renderShopProducts();
    expect(getByText('Product List Mock')).toBeInTheDocument();
  });

  it('renders sentinel div when status is success', () => {
    mockUseProductStore.mockImplementation((selector) =>
      selector({
        status: 'success',
        total: 3,
        products: PRODUCTS_MOCK,
      }),
    );

    const { getByTestId } = renderShopProducts();
    expect(getByTestId('sentinel')).toBeInTheDocument();
  });

  it('calls useSetProducts with accumulated items', () => {
    const mockAccItems = [...PRODUCTS_MOCK];

    mockUseProductStore.mockImplementation((selector) =>
      selector({
        products: PRODUCTS_MOCK,
      }),
    );

    mockUseInfiniteScroll.mockReturnValue({
      accItems: mockAccItems,
    });

    renderShopProducts();

    expect(mockUseSetProducts).toHaveBeenCalledWith(mockAccItems);
  });
});
