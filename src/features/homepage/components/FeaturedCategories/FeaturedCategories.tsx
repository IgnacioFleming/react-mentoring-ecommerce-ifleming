import { FeaturedCategoriesList } from './FeaturedCategoriesList';
import styles from './FeaturedCategories.module.scss';

export const FeaturedCategories = () => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h3>Featured Categories</h3>
        <p>Explore our most loved collections, handpicked for every style</p>
      </header>
      <FeaturedCategoriesList />
    </section>
  );
};
