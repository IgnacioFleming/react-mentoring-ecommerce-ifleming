import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Skeleton } from './Skeleton';

describe('Skeleton', () => {
  it('renders Skeleton component with the correct styles', () => {
    const { getByTestId } = render(<Skeleton />);
    expect(getByTestId('skeleton')).toBeInTheDocument();
    expect(getByTestId('skeleton')).toHaveClass(/skeleton/);
    const { container } = render(<Skeleton />);
    expect(container.firstChild).toHaveClass(/skeleton/);
  });
});
