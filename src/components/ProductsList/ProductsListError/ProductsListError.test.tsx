import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ProductsListError } from './ProductsListError';

describe('ProductsListError', () => {
  it('renders header and description', () => {
    const { container, getByRole, getByText } = render(<ProductsListError />);
    expect(getByRole('heading', { name: 'Loading Error:' })).toBeInTheDocument();
    expect(container.querySelector('svg')).toBeInTheDocument();
    expect(getByText('There was an error while loading Products')).toBeInTheDocument();
  });
});
