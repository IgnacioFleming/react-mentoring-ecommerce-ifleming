import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { ProductCardThumbnail } from './ProductCardThumbnail';

describe('ProductCardThumbnail', () => {
  const MOCK_TITLE = 'mockTitle';
  const MOCK_THUMBNAIL = 'mockThumbnail';
  const renderProductThumbnail = () => {
    return render(<ProductCardThumbnail title={MOCK_TITLE} thumbnail={MOCK_THUMBNAIL} />);
  };

  it('renders thumbnail correctly', () => {
    const { getByRole } = renderProductThumbnail();
    expect(getByRole('img')).toBeInTheDocument();
    expect(getByRole('img')).toHaveAttribute('src', MOCK_THUMBNAIL);
    expect(getByRole('img')).toHaveAttribute('alt', `${MOCK_TITLE} photo`);
  });

  it('renders 3 icons in thumbnail', () => {
    const { getByTestId } = renderProductThumbnail();
    expect(getByTestId('card-thumbnail').querySelectorAll('svg')).toHaveLength(3);
  });
});
