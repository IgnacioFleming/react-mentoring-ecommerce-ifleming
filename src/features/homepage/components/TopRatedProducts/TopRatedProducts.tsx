import { PRODUCTS } from './products';
import { HomepageSection } from '../HomepageSection';
import { ProductCard } from '../../../../components/ProductCard';
import styles from './TopRatedProducts.module.scss';

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
              <ProductCard product={p} hasHeader />
            </li>
          ))}
        </ul>
      </HomepageSection.Content>
    </HomepageSection>
  );
};
