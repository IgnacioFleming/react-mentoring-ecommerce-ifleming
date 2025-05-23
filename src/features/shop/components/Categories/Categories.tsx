import { Link } from 'react-router-dom';
import { CategoryCard } from './CategoryCard';
import { CategoryList } from '../CategoryList';
import { Modal } from '../../../../components/Modal';
import styles from './Categories.module.scss';

import type { Category } from '../../../../types/products';

const CATEGORIES = [
  {
    name: 'Category 1',
    slug: 'category-1',
    background: '#706f74',
  },
  {
    name: 'Category 2',
    slug: 'category-2',
    background: '#0990ac',
  },
  {
    name: 'Category 3',
    slug: 'category-3',
    background: '#ae7472',
  },
  {
    name: 'Category 4',
    slug: 'category-4',
    background: '#b88491',
  },
];

type CategoriesProps = {
  productCategories: Category[];
};

export const Categories = ({ productCategories }: CategoriesProps) => (
  <ul className={styles.categories}>
    {CATEGORIES.map((category) => (
      <li key={category.slug} className={styles.categories__item}>
        <Link to={`/shop/${category.slug}`}>
          <CategoryCard name={category.name} background={category.background} />
        </Link>
      </li>
    ))}
    <li className={styles['featured-categories__item']}>
      <Modal>
        <Modal.Trigger>
          <button className={styles.categories__item__button} onClick={() => false}>
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
