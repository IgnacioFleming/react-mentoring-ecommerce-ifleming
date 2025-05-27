import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { CategoryCard, CategoryCardProps } from './CategoryCard';

describe('CategoryCard', () => {
  const defaultProps: CategoryCardProps = {
    name: 'Category name',
    background: '#333',
  };

  it('renders correctly', () => {
    const { getByRole } = render(<CategoryCard {...defaultProps} />);
    expect(getByRole('heading', { level: 5 })).toHaveTextContent('Category name');
  });

  it('renders the default background color if no background is provided', () => {
    const props = {
      ...defaultProps,
      background: undefined,
    };
    const { getByTestId } = render(<CategoryCard {...props} />);
    expect(getByTestId('category-card')).toHaveStyle('background-color: #ccc');
  });

  it('renders with correct background color if provided', () => {
    const { getByTestId } = render(<CategoryCard {...defaultProps} />);
    expect(getByTestId('category-card')).toHaveStyle('background-color: #333');
  });
});
