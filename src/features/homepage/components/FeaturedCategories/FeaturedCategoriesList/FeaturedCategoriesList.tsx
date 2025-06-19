import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './FeaturedCategoriesList.module.scss';
import { FeaturedCategoriesItem } from '../FeaturedCategoriesItem';

export const FeaturedCategoriesList = () => {
  return (
    <ul className={styles['featured-categories']}>
      <li className={styles['featured-categories__item']}>
        <Link to="/shop/category/mens-watches">
          <FeaturedCategoriesItem
            className={styles['featured-categories__item__img']}
            imagePath="/src/assets/images/featured-categories/men-watches.webp"
            alt="Men's watches photo"
            title="Men's watches"
            caption="MEN'S WATCHES"
          />
        </Link>
      </li>
      <li className={styles['featured-categories__item']}>
        <Link to="/shop/category/womens-shoes">
          <FeaturedCategoriesItem
            className={styles['featured-categories__item__img']}
            imagePath="/src/assets/images/featured-categories/women-shoes.webp"
            alt="Women's shoes photo"
            title="Women's shoes"
            caption="WOMEN'S SHOES"
          />
        </Link>
      </li>
      <li className={styles['featured-categories__item']}>
        <ul className={styles['featured-categories__item--stacked']}>
          <li className={styles['featured-categories__item']}>
            <Link to="/shop/category/sunglasses">
              <FeaturedCategoriesItem
                className={clsx(
                  styles['featured-categories__item__img'],
                  styles['featured-categories__item--stacked__img'],
                )}
                imagePath="/src/assets/images/featured-categories/sunglasses.webp"
                alt="Sunglasses photo"
                title="Sunglasses"
                caption="SUNGLASSES"
              />
            </Link>
          </li>
          <li className={styles['featured-categories__item']}>
            <Link to="/shop/category/smartphones">
              <FeaturedCategoriesItem
                className={clsx(
                  styles['featured-categories__item__img'],
                  styles['featured-categories__item--stacked__img'],
                )}
                imagePath="/src/assets/images/featured-categories/smartphones.webp"
                alt="Smartphones photo"
                title="Smartphones"
                caption="SMARTPHONES"
              />
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};
