import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ProductQuickViewModal } from './ProductQuickViewModal';
import { PRODUCTS_MOCK } from '@tests/setup';
import { formatCurrency } from '@/lib/api/utils';

const mockTrigger = <button>Trigger</button>;

describe('ProductQuickViewModal', () => {
  const renderProductQuickViewModal = () =>
    render(<ProductQuickViewModal trigger={mockTrigger} id={1} />);

  it('should render only trigger at first', () => {
    const { getByRole, queryByTestId } = renderProductQuickViewModal();
    expect(getByRole('button', { name: 'Trigger' })).toBeInTheDocument();
    expect(queryByTestId('modal-overlay')).not.toBeInTheDocument();
  });

  it('should render the modal when user clicks the trigger', () => {
    const { getByRole, queryByTestId } = renderProductQuickViewModal();
    fireEvent.click(getByRole('button', { name: 'Trigger' }));
    expect(queryByTestId('modal-overlay')).toBeInTheDocument();
  });

  it('should display product overview in the modal', () => {
    const { getByRole, getAllByTestId, getByAltText, getByText, getByTestId } =
      renderProductQuickViewModal();
    fireEvent.click(getByRole('button', { name: 'Trigger' }));
    const { title, reviews, price, availabilityStatus, description } = PRODUCTS_MOCK[0];
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
