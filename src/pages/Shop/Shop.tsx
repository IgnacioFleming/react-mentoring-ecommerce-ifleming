import { Container } from '../../components/Container';
import { useProductCategories } from '../../features/shop/hooks/useProductCategories';
import { Categories } from '../../features/shop/components/Categories';
import styles from './Shop.module.scss';
import { ProductList } from '../../components/ProductList';
import { useProducts } from '../../features/hooks/useProducts';
import { useRef, useState } from 'react';

export const Shop = () => {
  const [page] = useState(1);
  const itemsPerPage = useRef(24);

  const { productCategories, isLoadingProductCategories } = useProductCategories();
  const { products, getQueryStatus, productQuantity } = useProducts({
    limit: page * itemsPerPage.current,
  });

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
      <Container>
        {productDataStatus === 'success' && <h6>Showing all {productQuantity} results</h6>}
        <ProductList
          products={products}
          skeletonQuantity={itemsPerPage.current}
          status={productDataStatus}
        />
      </Container>
    </div>
  );
};
