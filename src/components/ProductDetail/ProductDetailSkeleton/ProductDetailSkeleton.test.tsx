import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ProductDetailSkeleton } from './ProductDetailSkeleton';

describe('ProductListSkeleton', () => {
  const renderProductListSkeleton = () => render(<ProductDetailSkeleton />);

  it('renders the component correctly', () => {
    const { getByTestId } = renderProductListSkeleton();
    expect(getByTestId('product-detail-skeleton')).toBeInTheDocument();
  });

  it('renders 5 skeletons', () => {
    const { getAllByTestId } = renderProductListSkeleton();
    expect(getAllByTestId('skeleton')).toHaveLength(7);
  });
});
