import { Container } from '../../components/Container';
import { useProductCategories } from '../../features/shop/hooks/useProductCategories';
import { Categories } from '../../features/shop/components/Categories';
import { ShopProducts } from '../../features/shop/components/ShopProducts';
import styles from './Shop.module.scss';

export const Shop = () => {
  const { productCategories, isLoadingProductCategories } = useProductCategories();

  if (isLoadingProductCategories) return null;

  return (
    <div className={styles.shop}>
      <div className={styles.shop__header}>
        <Container>
          <h2>Shop</h2>
          <Categories productCategories={productCategories} />
        </Container>
      </div>
      <div className={styles.shop__products}>
        <Container>
          <ShopProducts />
        </Container>
      </div>
    </div>
  );
};
