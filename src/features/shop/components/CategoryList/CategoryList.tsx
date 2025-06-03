import { Link } from 'react-router-dom';
import type { Category } from '../../../../types/products';

import styles from './CategoryList.module.scss';

export type CategoryListProps = {
  productCategories: Category[];
};

export const CategoryList = ({ productCategories }: CategoryListProps) => (
  <ul className={styles['category-list']}>
    {productCategories?.map((category) => (
      <li key={category.slug}>
        <Link to={`/shop/category/${category.slug}`} className={styles['category-list__link']}>
          {category.name}
        </Link>
      </li>
    ))}
  </ul>
);
