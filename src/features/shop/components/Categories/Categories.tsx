import { Link } from 'react-router-dom';
import { CategoryCard } from './CategoryCard';
import { CategoryList } from '../CategoryList';
import { Modal } from '../../../../components/Modal';
import styles from './Categories.module.scss';

import type { Category } from '../../../../types/products';

const CATEGORY_COLORS = ['#706f74', '#0990ac', '#ae7472', '#b88491'];

export type CategoriesProps = {
  productCategories: Category[];
};

const getRandomCategories = (categories: Category[]): [Category, Category, Category, Category] =>
  Array.from({ length: 4 }).reduce<Category[]>((acc) => {
    const availableCategories = categories.filter((cat) => !acc.includes(cat));
    const randomIndex = Math.floor(Math.random() * availableCategories.length);
    return [...acc, availableCategories[randomIndex]];
  }, []) as [Category, Category, Category, Category];

export const Categories = ({ productCategories }: CategoriesProps) => {
  const mainCategories = getRandomCategories(productCategories || []);

  return (
    <ul className={styles.categories}>
      {mainCategories.map((category, index) => (
        <li key={category.slug} className={styles.categories__item}>
          <Link to={`/shop/category/${category.slug}`}>
            <CategoryCard name={category.name} background={CATEGORY_COLORS[index]} />
          </Link>
        </li>
      ))}
      <li className={styles['featured-categories__item']}>
        <Modal>
          <Modal.Trigger>
            <button className={styles.categories__item__button}>
              <CategoryCard name="View all" background="#c24360" />
            </button>
          </Modal.Trigger>
          <Modal.Content>
            <Modal.Title>Categories</Modal.Title>
            <CategoryList productCategories={productCategories} />
          </Modal.Content>
        </Modal>
      </li>
    </ul>
  );
};
