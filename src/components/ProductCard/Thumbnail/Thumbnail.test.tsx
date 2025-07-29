import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { ProductCard } from '../ProductCard';
import { PRODUCTS_MOCK } from '@tests/setup';

describe('ProductCardThumbnail', () => {
  const renderProductThumbnail = () => {
    return render(<ProductCard.Thumbnail id={1} />);
  };

  it('renders thumbnail correctly', () => {
    const { getByRole } = renderProductThumbnail();
    expect(getByRole('img')).toBeInTheDocument();
    expect(getByRole('img')).toHaveAttribute('src', PRODUCTS_MOCK[0].thumbnail);
    expect(getByRole('img')).toHaveAttribute('alt', `${PRODUCTS_MOCK[0].title} photo`);
  });

  it('renders 3 icons in thumbnail', () => {
    const { getByTestId } = renderProductThumbnail();
    expect(getByTestId('card-thumbnail').querySelectorAll('svg')).toHaveLength(3);
  });
});
