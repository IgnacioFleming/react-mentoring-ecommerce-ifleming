import { describe, expect, it } from 'vitest';
import { FeaturedCategoriesItem, FeaturedCategoriesProps } from './FeaturedCategoriesItem';
import { render } from '@testing-library/react';

describe('FeaturedCategoriesItem', () => {
  const mockProps: FeaturedCategoriesProps = {
    title: 'mockTitle',
    alt: 'mockTitle photo',
    imagePath: '/mockPath',
    caption: 'mockCategory',
    stacked: false,
  };

  const renderMockFeaturedCategoriesItem = (props: Partial<FeaturedCategoriesProps> = {}) => {
    return render(<FeaturedCategoriesItem {...mockProps} {...props} />);
  };

  it('renders the component correctly', () => {
    const { getByRole } = renderMockFeaturedCategoriesItem();
    expect(getByRole('img')).toBeInTheDocument();
  });

  it('renders an image with correct props', () => {
    const { getByRole } = renderMockFeaturedCategoriesItem();

    const image = getByRole('img');

    expect(image.title).toBe(mockProps.title);
    expect(image).toHaveAttribute('alt', mockProps.alt);
    expect(image).toHaveAttribute('src', mockProps.imagePath);

    const caption = getByRole('heading', { name: 'mockCategory' });

    expect(caption).toBeInTheDocument();
  });

  it('renders with the correct style when stacked prop is false or true', () => {
    const { getByRole, unmount } = renderMockFeaturedCategoriesItem();
    const image = getByRole('img');
    expect(image).toHaveClass(/featured-categories-item__img/);
    expect(image).not.toHaveClass(/featured-categories-item__img--stacked/);
    unmount();
    const { getByRole: getStackedImage } = renderMockFeaturedCategoriesItem({ stacked: true });
    const stackedImage = getStackedImage('img');
    expect(stackedImage).toHaveClass(/featured-categories-item__img/);
    expect(stackedImage).toHaveClass(/featured-categories-item__img--stacked/);
  });
});
