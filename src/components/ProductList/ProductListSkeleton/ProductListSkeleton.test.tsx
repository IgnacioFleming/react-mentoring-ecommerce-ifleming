import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ProductListSkeleton } from './ProductListSkeleton';

describe('ProductListSkeleton', () => {
  const renderProductListSkeleton = (quantity: number) =>
    render(<ProductListSkeleton quantity={quantity} />);

  it('renders the component correctly', () => {
    const { getByTestId } = render(<ProductListSkeleton quantity={1} />);
    expect(getByTestId('card')).toBeInTheDocument();
  });

  it('renders 5 skeletons per quantity', () => {
    const { unmount } = renderProductListSkeleton(1);
    expect(screen.queryAllByTestId('skeleton')).toHaveLength(5);
    unmount();
    renderProductListSkeleton(2);
    expect(screen.queryAllByTestId('skeleton')).toHaveLength(10);
  });
});
