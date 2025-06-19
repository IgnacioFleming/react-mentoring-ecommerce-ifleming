import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { FeaturedCategoriesList } from './FeaturedCategoriesList';

describe('FeaturedCategoriesList', () => {
  const renderFeaturedCategoriesList = () =>
    render(
      <MemoryRouter>
        <FeaturedCategoriesList />
      </MemoryRouter>,
    );

  it('renders the component correctly', () => {
    const { getByTestId } = renderFeaturedCategoriesList();

    const featuredCategoriesList = getByTestId('featured-categories-list');

    expect(featuredCategoriesList).toBeInTheDocument();
  });

  it('renders the correct categories', () => {
    const { getByText } = renderFeaturedCategoriesList();
    expect(getByText(/men's watches/i)).toBeInTheDocument();
    expect(getByText(/women's shoes/i)).toBeInTheDocument();
    expect(getByText(/sunglasses/i)).toBeInTheDocument();
    expect(getByText(/smartphones/i)).toBeInTheDocument();
  });

  it('renders one image per category', () => {
    const { queryAllByRole } = renderFeaturedCategoriesList();
    expect(queryAllByRole('img')).toHaveLength(4);
  });

  it('navigates to the correct route when clicking each link', () => {
    const rootPath = '/shop/category';
    const { queryAllByRole } = renderFeaturedCategoriesList();
    const links = queryAllByRole('link');
    expect(links[0]).toHaveAttribute('href', `${rootPath}/mens-watches`);
    expect(links[1]).toHaveAttribute('href', `${rootPath}/womens-shoes`);
    expect(links[2]).toHaveAttribute('href', `${rootPath}/sunglasses`);
    expect(links[3]).toHaveAttribute('href', `${rootPath}/smartphones`);
  });
});
