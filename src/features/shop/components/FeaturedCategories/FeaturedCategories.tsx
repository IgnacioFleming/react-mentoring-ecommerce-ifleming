import { Link } from 'react-router-dom';
import { CategoryCard } from './CategoryCard';
import styles from './FeaturedCategories.module.scss';

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

export const FeaturedCategories = () => (
  <ul className={styles['featured-categories']}>
    {CATEGORIES.map((category) => (
      <li key={category.slug} className={styles['featured-categories__item']}>
        <Link to={`/shop/${category.slug}`}>
          <CategoryCard name={category.name} background={category.background} />
        </Link>
      </li>
    ))}
    <li className={styles['featured-categories__item']}>
      <button className={styles['featured-categories__item__button']} onClick={() => false}>
        <CategoryCard name="View all" background="#c24360" />
      </button>
    </li>
  </ul>
);
