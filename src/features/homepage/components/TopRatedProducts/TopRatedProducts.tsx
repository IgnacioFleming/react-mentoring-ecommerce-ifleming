import { ProductCard } from './ProductCard';
import { PRODUCTS } from './products';
import styles from './TopRatedProducts.module.scss';

export const TopRatedProducts = () => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h4>Featured Products</h4>
        <h3>Top Rated Products</h3>
        <p>Customer favorites loved for quality and style</p>
      </header>
      <ul className={styles['top-rated-products']}>
        {PRODUCTS.map((p, index) => (
          <li key={index}>
            <ProductCard product={p} />
          </li>
        ))}
      </ul>
    </section>
  );
};
