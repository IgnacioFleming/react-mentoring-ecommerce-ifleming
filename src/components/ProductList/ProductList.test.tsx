import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { ProductList, ProductListProps } from './ProductList';
import { useProductStore } from '@/stores/useProductStore';
import { defaultProductStoreProps } from '@tests/setup';
import { MemoryRouter } from 'react-router-dom';

const mockUseProductStore = vi.mocked(useProductStore);

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
    return render(
      <MemoryRouter>
        <ProductList {...defaultProps} {...props} />
      </MemoryRouter>,
    );
  };

  beforeEach(() => {
    vi.clearAllMocks();
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
      selector({ ...defaultProductStoreProps, status: 'error' }),
    );
    const { getByRole } = renderProductListMock();
    expect(getByRole('heading', { name: 'Loading Error:' }));
  });

  it('renders skeletons when status is loading', () => {
    mockUseProductStore.mockImplementation((selector) =>
      selector({ ...defaultProductStoreProps, status: 'loading' }),
    );
    const { queryAllByTestId } = renderProductListMock();
    expect(queryAllByTestId('skeleton')).toHaveLength(5 * 2);
  });
});
