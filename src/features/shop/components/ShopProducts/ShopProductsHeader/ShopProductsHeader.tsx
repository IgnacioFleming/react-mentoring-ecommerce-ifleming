import { ReactNode } from 'react';
import { ShopProductsSelect } from './ShopProductsSelect/ShopProductsSelect';
import styles from './ShopProductsHeader.module.scss';
import { useProductStore } from '../../../../../stores/useProductStore';

const Header = ({ isVisible, children }: { isVisible: boolean; children: ReactNode }) => (
  <header className={styles['shop-products-header']}>{isVisible ? children : null}</header>
);

export const ShopProductsHeader = () => {
  const total = useProductStore((state) => state.total);

  return (
    <Header isVisible={total !== undefined}>
      <h6>Showing all {total} results</h6>
      <ShopProductsSelect />
    </Header>
  );
};
