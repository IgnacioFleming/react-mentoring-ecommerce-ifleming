import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Product } from '../../../types/products';
import { ProductCard } from '../ProductCard';

type Selector = (state: { getProductById: () => void }) => void;

const REVIEWS_MOCK = [
  {
    rating: 3,
    comment: 'some comment',
    date: new Date(),
    reviewerName: 'mockReviewer',
    reviewerEmail: 'mock.reviewer@example.com',
  },
];

const PRODUCT_MOCK: Product = {
  id: 1,
  brand: 'mockBrand 1',
  title: 'mockTitle',
  rating: 4.1,
  price: 100,
  discountPercentage: 10,
  thumbnail: 'mockThumbnail',
  availabilityStatus: 'In Stock',
  description: 'Some short description',
  reviews: REVIEWS_MOCK,
};

vi.mock('../../../stores/useProductStore', () => ({
  useProductStore: (selector: Selector) =>
    selector({
      getProductById: vi.fn().mockReturnValue(PRODUCT_MOCK),
    }),
}));

describe('ProductCardThumbnail', () => {
  const renderProductThumbnail = () => {
    return render(<ProductCard.Thumbnail id={1} />);
  };

  it('renders thumbnail correctly', () => {
    const { getByRole } = renderProductThumbnail();
    expect(getByRole('img')).toBeInTheDocument();
    expect(getByRole('img')).toHaveAttribute('src', PRODUCT_MOCK.thumbnail);
    expect(getByRole('img')).toHaveAttribute('alt', `${PRODUCT_MOCK.title} photo`);
  });

  it('renders 3 icons in thumbnail', () => {
    const { getByTestId } = renderProductThumbnail();
    expect(getByTestId('card-thumbnail').querySelectorAll('svg')).toHaveLength(3);
  });
});
