import { useState } from 'react';
import { Container } from '../../components/Container';
import { useProductCategories } from '../../features/shop/hooks/useProductCategories';
import { Categories } from '../../features/shop/components/Categories';
import { ProductList } from '../../components/ProductList';
import { useProducts } from '../../features/hooks/useProducts';
import styles from './Shop.module.scss';

export const Shop = () => {
  const [productLimit] = useState(24);

  const { productCategories, isLoadingProductCategories } = useProductCategories();
  const { products, getQueryStatus, productQuantity } = useProducts({ limit: productLimit });

  const productDataStatus = getQueryStatus();

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
          <div className={styles.shop__products__header}>
            {productDataStatus === 'success' && <h6>Showing all {productQuantity} results</h6>}
          </div>
          <ProductList
            products={products}
            skeletonQuantity={productLimit}
            status={productDataStatus}
          />
        </Container>
      </div>
    </div>
  );
};
