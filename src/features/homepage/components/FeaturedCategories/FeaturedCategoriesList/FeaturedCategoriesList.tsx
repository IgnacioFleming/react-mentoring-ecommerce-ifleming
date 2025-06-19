import { Link } from 'react-router-dom';
import {
  menWatches,
  womenShoes,
  sunglasses,
  smartphones,
} from '../../../../../assets/images/featured-categories';
import { FeaturedCategoriesItem } from '../FeaturedCategoriesItem';
import styles from './FeaturedCategoriesList.module.scss';

export const FeaturedCategoriesList = () => {
  return (
    <ul className={styles['featured-categories-list']} data-testid="featured-categories-list">
      <li>
        <Link to="/shop/category/mens-watches">
          <FeaturedCategoriesItem
            imagePath={menWatches}
            alt="Men's watches photo"
            title="Men's watches"
            caption="MEN'S WATCHES"
          />
        </Link>
      </li>
      <li>
        <Link to="/shop/category/womens-shoes">
          <FeaturedCategoriesItem
            imagePath={womenShoes}
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
                imagePath={sunglasses}
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
                imagePath={smartphones}
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
