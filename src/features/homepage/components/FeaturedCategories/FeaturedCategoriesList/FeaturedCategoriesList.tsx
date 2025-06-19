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

const featuredCategories: (FeaturedCategoriesItemProps & Link)[] = [
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

export const FeaturedCategoriesList = () => {
  const largeCategories = featuredCategories.filter((c) => !c.stacked);
  const stackedCategories = featuredCategories.filter((c) => c.stacked);
  return (
    <ul className={styles['featured-categories-list']} data-testid="featured-categories-list">
      {largeCategories.map((c, index) => (
        <li key={index}>
          <Link to={c.link}>
            <FeaturedCategoriesItem
              imagePath={c.imagePath}
              alt={c.alt}
              title={c.title}
              caption={c.caption}
            />
          </Link>
        </li>
      ))}

      <li>
        <ul className={styles['featured-categories-list--stacked']}>
          {stackedCategories.map((c, index) => (
            <li key={index}>
              <Link to={c.link}>
                <FeaturedCategoriesItem
                  imagePath={c.imagePath}
                  alt={c.alt}
                  title={c.title}
                  caption={c.caption}
                  stacked={c.stacked}
                />
              </Link>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};
