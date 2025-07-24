import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ProductQuickViewModal } from './ProductQuickViewModal';
import { Product } from '../../types/products';

type Selector = (state: { getProductById: () => void }) => void;

vi.mock('../../stores/useProductStore', () => ({
  useProductStore: (selector: Selector) =>
    selector({
      getProductById: vi.fn().mockReturnValue(mockProduct),
    }),
}));

const mockTrigger = <button>Trigger</button>;
const mockProduct: Product = {
  id: 1,
  brand: 'mockBrand',
  title: 'mockTitle',
  rating: 5,
  discountPercentage: 10,
  price: 1100.32,
  thumbnail: 'mockUrl',
  availabilityStatus: 'In Stock',
  description: 'Some short description',
  reviews: [
    {
      rating: 3,
      comment: 'some comment',
      date: new Date(),
      reviewerName: 'mockReviewer',
      reviewerEmail: 'mock.reviewer@example.com',
    },
    {
      rating: 4.2,
      comment: 'some comment',
      date: new Date(),
      reviewerName: 'mockReviewer2',
      reviewerEmail: 'mock.reviewer2@example.com',
    },
    {
      rating: 2.8,
      comment: 'some comment',
      date: new Date(),
      reviewerName: 'mockReviewer3',
      reviewerEmail: 'mock.reviewer3@example.com',
    },
  ],
};
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
    expect(getByAltText('Photo of the product')).toBeInTheDocument();
    expect(getByRole('heading', { name: 'mockTitle' })).toBeInTheDocument();
    expect(getAllByTestId('star')).toHaveLength(5);
    expect(getByRole('heading', { name: '3 Reviews' })).toBeInTheDocument();
    expect(getByRole('heading', { name: '$1,100.32' })).toBeInTheDocument();
    expect(getByRole('heading', { name: 'Availability: In Stock' })).toBeInTheDocument();
    expect(getByText('Some short description')).toBeInTheDocument();
    expect(getByRole('button', { name: 'Add to cart' })).toBeInTheDocument();
    expect(getByTestId('mark-fav')).toBeInTheDocument();
  });
});
