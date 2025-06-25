import { Product } from '../../../../../../types/products';
import { Card } from '../../../../../../components/Card';
import styles from './ProductCardMain.module.scss';

type ProductCardMainProps = Pick<Product, 'name' | 'price' | 'discount'>;

export const ProductCardMain = ({ name, price, discount }: ProductCardMainProps) => (
  <Card.Main className={styles['product-card-main']}>
    <h5>{name}</h5>
    <div>
      <h5 className={styles['product-card-main--price']}>${price}</h5>
      <h5 className={styles['product-card-main--discount']}>{discount}% off</h5>
    </div>
  </Card.Main>
);
