import { ReactNode } from 'react';
import { ShopProductsSelect } from './ShopProductsSelect/ShopProductsSelect';
import styles from './ShopProductsHeader.module.scss';

export type ShopProductsHeaderProps = {
  isVisible: boolean;
  total: number;
};

const Header = ({ isVisible, children }: { isVisible: boolean; children: ReactNode }) => (
  <header className={styles['shop-products-header']}>{isVisible ? children : null}</header>
);

export const ShopProductsHeader = ({ isVisible, total }: ShopProductsHeaderProps) => (
  <Header isVisible={isVisible}>
    <h6>Showing all {total} results</h6>
    <ShopProductsSelect />
  </Header>
);
