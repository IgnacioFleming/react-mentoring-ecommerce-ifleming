import { render } from '@testing-library/react';
import { PRODUCTS_MOCK } from '@tests/setup';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ProductDetailSection } from './ProductDetailSection';
import { MemoryRouter } from 'react-router-dom';
import { formatCurrency } from '@/lib/api/utils';

const mockProduct = PRODUCTS_MOCK[0];
const mockUseGetProductById = vi.hoisted(() => vi.fn());

vi.mock('react-router-dom', async () => {
  const actual = await import('react-router-dom');
  return { ...actual, useParams: vi.fn().mockImplementation(() => ({ id: 1 })) };
});

vi.mock('./hooks/useGetProductById', () => ({ useGetProductById: mockUseGetProductById }));

describe('ProductDetailSection', () => {
  const renderProductDetailSection = () =>
    render(
      <MemoryRouter>
        <ProductDetailSection />
      </MemoryRouter>,
    );
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render ErrorSection if status is error', () => {
    mockUseGetProductById.mockImplementation(() => ({
      product: mockProduct,
      dataStatus: 'error',
    }));
    const { getByText } = renderProductDetailSection();
    expect(getByText('Loading Error:')).toBeInTheDocument();
  });

  it('should render ProductDetailSkeleton if status is loading', () => {
    mockUseGetProductById.mockImplementation(() => ({
      product: mockProduct,
      dataStatus: 'loading',
    }));
    const { getByTestId } = renderProductDetailSection();
    expect(getByTestId('product-detail-skeleton')).toBeInTheDocument();
  });

  it('should render ProductDetail correctly if status is success', () => {
    mockUseGetProductById.mockImplementation(() => ({
      product: mockProduct,
      dataStatus: 'success',
    }));

    const { getByTestId, getByAltText, getByRole, getAllByTestId, getByText } =
      renderProductDetailSection();

    const { title, reviews, price, availabilityStatus, description } = mockProduct;

    expect(getByAltText(`Photo of ${title}`)).toBeInTheDocument();
    expect(getByRole('heading', { name: title })).toBeInTheDocument();
    expect(getAllByTestId('star')).toHaveLength(5);
    expect(getByRole('heading', { name: `${reviews.length} Reviews` })).toBeInTheDocument();
    expect(getByRole('heading', { name: formatCurrency(price) })).toBeInTheDocument();
    expect(
      getByRole('heading', { name: `Availability: ${availabilityStatus}` }),
    ).toBeInTheDocument();
    expect(getByText(description)).toBeInTheDocument();
    expect(getByRole('button', { name: 'Add to cart' })).toBeInTheDocument();
    expect(getByTestId('mark-fav')).toBeInTheDocument();
  });
});
