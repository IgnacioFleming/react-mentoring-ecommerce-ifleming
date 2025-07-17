import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ProductRating, ProductRatingProps } from './ProductRating';

describe('ProductRating', () => {
  const mockReviewCount = 10;
  const mockRating = 3;
  const renderProductRating = (props?: ProductRatingProps) =>
    render(<ProductRating rating={mockRating} reviewCount={mockReviewCount} {...props} />);
  it('should render 5 stars', () => {
    const { getAllByTestId } = renderProductRating();
    expect(getAllByTestId('star')).toHaveLength(5);
  });

  it('should render reviews correctly', () => {
    const { getByRole } = renderProductRating();
    expect(getByRole('heading', { name: '10 Reviews' })).toBeInTheDocument();
  });

  it('should render all stars filled if rating is grater than 4.5', () => {
    const { getAllByTestId } = renderProductRating({ rating: 4.6, reviewCount: mockReviewCount });
    const stars = getAllByTestId('star');
    stars.forEach((s) => {
      expect(s).toHaveClass(/filled/);
    });
  });

  it('should render all stars empty if rating is 0', () => {
    const { getAllByTestId } = renderProductRating({ rating: 0, reviewCount: mockReviewCount });
    const stars = getAllByTestId('star');
    stars.forEach((s) => {
      expect(s).not.toHaveClass(/filled/);
      expect(s).not.toHaveClass(/half-filled/);
    });
  });

  it('should render a half filled star if rating decimal is set between 0 and 0.5', () => {
    const { getAllByTestId } = renderProductRating({ rating: 3.5, reviewCount: mockReviewCount });
    expect(getAllByTestId('star')[3]).toHaveClass(/half-filled/);
  });

  it('should render a filled star if rating decimal is greater than 0.5', () => {
    const { getAllByTestId } = renderProductRating({ rating: 3.6, reviewCount: mockReviewCount });
    expect(getAllByTestId('star')[3]).toHaveClass(/filled/);
  });
});
