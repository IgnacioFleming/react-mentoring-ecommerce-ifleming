import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CategoryList, CategoryListProps } from './CategoryList';

describe('CategoryList', () => {
  const defultProps: CategoryListProps = {
    productCategories: [
      { name: 'Category 1', slug: 'category-1', url: '/category-1' },
      { name: 'Category 2', slug: 'category-2', url: '/category-2' },
      { name: 'Category 3', slug: 'category-3', url: '/category-3' },
      { name: 'Category 4', slug: 'category-4', url: '/category-4' },
      { name: 'Category 5', slug: 'category-5', url: '/category-5' },
      { name: 'Category 6', slug: 'category-6', url: '/category-6' },
      { name: 'Category 7', slug: 'category-7', url: '/category-6' },
      { name: 'Category 8', slug: 'category-8', url: '/category-8' },
    ],
  };

  it('renders with correct category names', () => {
    const { getAllByRole } = render(
      <MemoryRouter>
        <CategoryList {...defultProps} />
      </MemoryRouter>,
    );
    const listItems = getAllByRole('listitem');
    expect(listItems).toHaveLength(8);
    expect(listItems[0]).toHaveTextContent('Category 1');
    expect(listItems[1]).toHaveTextContent('Category 2');
    expect(listItems[2]).toHaveTextContent('Category 3');
  });

  it('renders with correct links', () => {
    const { getAllByRole } = render(
      <MemoryRouter>
        <CategoryList {...defultProps} />
      </MemoryRouter>,
    );
    const links = getAllByRole('link');
    expect(links).toHaveLength(8);
    expect(links[0]).toHaveAttribute('href', '/shop/category/category-1');
    expect(links[1]).toHaveAttribute('href', '/shop/category/category-2');
  });
});
