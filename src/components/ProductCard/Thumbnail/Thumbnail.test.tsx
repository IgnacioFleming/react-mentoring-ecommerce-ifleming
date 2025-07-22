import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Product } from '../../../types/products';
import { ProductCard } from '../ProductCard';

describe('ProductCardThumbnail', () => {
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

  const renderProductThumbnail = () => {
    return render(<ProductCard.Thumbnail product={PRODUCT_MOCK} />);
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
