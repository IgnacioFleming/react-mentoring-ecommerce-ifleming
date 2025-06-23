import clsx from 'clsx';
import { Link } from 'react-router-dom';
import {
  menWatches,
  womenShoes,
  sunglasses,
  smartphones,
} from '../../../../../assets/images/featured-categories';
import { FeaturedCategoriesItem, FeaturedCategoriesItemProps } from '../FeaturedCategoriesItem';
import styles from './FeaturedCategoriesList.module.scss';

type Link = {
  link: string;
};

const FEATURED_CATEGORIES: (FeaturedCategoriesItemProps & Link)[] = [
  {
    imagePath: menWatches,
    alt: "Men's watches photo",
    title: "Men's watches",
    caption: "Men's Watches",
    link: '/shop/category/mens-watches',
  },
  {
    imagePath: womenShoes,
    alt: "Women's shoes photo",
    title: "Women's shoes",
    caption: "Women's Shoes",
    link: '/shop/category/womens-shoes',
  },
  {
    imagePath: sunglasses,
    alt: 'Sunglasses photo',
    title: 'Sunglasses',
    caption: 'Sunglasses',
    stacked: true,
    link: '/shop/category/sunglasses',
  },
  {
    imagePath: smartphones,
    alt: 'Smartphones photo',
    title: 'Smartphones',
    caption: 'Smartphones',
    stacked: true,
    link: '/shop/category/smartphones',
  },
];

const renderCategoryItem = (category: FeaturedCategoriesItemProps & Link, index: number) => (
  <li
    key={index}
    className={clsx(styles['featured-categories-list__item'], {
      [styles['is-large']]: !category.stacked,
    })}
  >
    <Link to={category.link}>
      <FeaturedCategoriesItem {...category} />
    </Link>
  </li>
);
export const FeaturedCategoriesList = () => {
  return (
    <ul className={styles['featured-categories-list']} data-testid="featured-categories-list">
      {FEATURED_CATEGORIES.map(renderCategoryItem)}
    </ul>
  );
};
