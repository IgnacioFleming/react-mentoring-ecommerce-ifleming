import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { PRODUCTS_MOCK } from '@tests/setup';
import { formatCurrency } from '@/lib/api/utils';
import { ProductDetail } from './ProductDetail';

const mockProduct = PRODUCTS_MOCK[0];

describe('ProductQuickViewModal', () => {
  const renderProductQuickViewModal = () => render(<ProductDetail product={mockProduct} />);

  it('should render component correctly', () => {
    const { getByRole, getAllByTestId, getByAltText, getByText, getByTestId } =
      renderProductQuickViewModal();
    const { title, reviews, price, availabilityStatus, description } = mockProduct;
    expect(getByAltText('Photo of the product')).toBeInTheDocument();
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
