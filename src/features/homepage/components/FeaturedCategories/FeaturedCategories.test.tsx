import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { FeaturedCategories } from './FeaturedCategories';
import { MemoryRouter } from 'react-router-dom';

describe('FeaturedCategories', () => {
  const renderFeaturedCategories = () =>
    render(
      <MemoryRouter>
        <FeaturedCategories />
      </MemoryRouter>,
    );

  it('renders the title correctly', () => {
    const { getByRole } = renderFeaturedCategories();
    expect(getByRole('heading', { name: /featured categories/i })).toBeInTheDocument();
  });

  it('renders the subtitle correctly', () => {
    const { getByText } = renderFeaturedCategories();
    const subtitle = 'Explore our most loved collections, handpicked for every style';
    expect(getByText(subtitle)).toBeInTheDocument();
  });

  it('renders FeaturedCategoriesList', () => {
    const { getByTestId } = renderFeaturedCategories();
    expect(getByTestId('featured-categories-list')).toBeInTheDocument();
  });
});
