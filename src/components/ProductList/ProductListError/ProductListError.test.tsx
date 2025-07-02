import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ProductListError } from './ProductListError';

describe('ProductListError', () => {
  it('renders header and description', () => {
    const { container, getByRole, getByText } = render(<ProductListError />);
    expect(getByRole('heading', { name: 'Loading Error:' })).toBeInTheDocument();
    expect(container.querySelector('svg')).toBeInTheDocument();
    expect(getByText('There was an error while loading Products')).toBeInTheDocument();
  });
});
