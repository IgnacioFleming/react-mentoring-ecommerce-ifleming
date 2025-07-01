import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ProductsListSkeleton } from './ProductsListSkeleton';

describe('ProductsListSkeleton', () => {
  const renderProductsListSkeleton = (quantity: number) =>
    render(<ProductsListSkeleton quantity={quantity} />);

  it('renders the component correctly', () => {
    const { getByTestId } = render(<ProductsListSkeleton quantity={1} />);
    expect(getByTestId('card')).toBeInTheDocument();
  });

  it('renders 5 skeletons per quantity', () => {
    const { unmount } = renderProductsListSkeleton(1);
    expect(screen.queryAllByTestId('skeleton')).toHaveLength(5);
    unmount();
    renderProductsListSkeleton(2);
    expect(screen.queryAllByTestId('skeleton')).toHaveLength(10);
  });
});
