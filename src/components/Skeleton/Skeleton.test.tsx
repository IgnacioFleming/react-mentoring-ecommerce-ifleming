import { render, screen } from '@testing-library/react';

import { describe, expect, it } from 'vitest';
import { Skeleton } from './Skeleton';

describe('Skeleton', () => {
  it('renders Skeleton component with the correct styles', () => {
    const { container } = render(<Skeleton />);
    screen.debug();
    expect(container.firstChild).toHaveClass(/skeleton/);
  });
});
