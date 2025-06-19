import { Link } from 'react-router-dom';
import styles from './FeaturedCategoriesList.module.scss';
import { FeaturedCategoriesItem } from '../FeaturedCategoriesItem';

export const FeaturedCategoriesList = () => {
  return (
    <ul className={styles['featured-categories-list']} data-testid="featured-categories-list">
      <li>
        <Link to="/shop/category/mens-watches">
          <FeaturedCategoriesItem
            imagePath="/src/assets/images/featured-categories/men-watches.webp"
            alt="Men's watches photo"
            title="Men's watches"
            caption="MEN'S WATCHES"
          />
        </Link>
      </li>
      <li>
        <Link to="/shop/category/womens-shoes">
          <FeaturedCategoriesItem
            imagePath="/src/assets/images/featured-categories/women-shoes.webp"
            alt="Women's shoes photo"
            title="Women's shoes"
            caption="WOMEN'S SHOES"
          />
        </Link>
      </li>
      <li>
        <ul className={styles['featured-categories-list--stacked']}>
          <li>
            <Link to="/shop/category/sunglasses">
              <FeaturedCategoriesItem
                imagePath="/src/assets/images/featured-categories/sunglasses.webp"
                alt="Sunglasses photo"
                title="Sunglasses"
                caption="SUNGLASSES"
                stacked
              />
            </Link>
          </li>
          <li>
            <Link to="/shop/category/smartphones">
              <FeaturedCategoriesItem
                imagePath="/src/assets/images/featured-categories/smartphones.webp"
                alt="Smartphones photo"
                title="Smartphones"
                caption="SMARTPHONES"
                stacked
              />
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};
