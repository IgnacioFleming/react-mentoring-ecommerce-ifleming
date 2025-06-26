import { PRODUCTS } from './products';
import { ProductCard } from './ProductCard';
import styles from './TopRatedProducts.module.scss';
import { HomepageSection } from '../HomepageSection';

export const TopRatedProducts = () => {
  return (
    <HomepageSection>
      <HomepageSection.Header
        eyebrow="Featured Products"
        title="Top Rated Products"
        subtitle="Customer favorites loved for quality and style"
      />
      <HomepageSection.Content>
        <ul className={styles['top-rated-products']}>
          {PRODUCTS.map((p, index) => (
            <li key={index}>
              <ProductCard product={p} />
            </li>
          ))}
        </ul>
      </HomepageSection.Content>
    </HomepageSection>
  );
};
