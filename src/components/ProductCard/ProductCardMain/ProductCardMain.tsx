import { Product } from '../../../types/products';
import { Card } from '../../Card';
import styles from './ProductCardMain.module.scss';

type ProductCardMainProps = Pick<Product, 'title' | 'price' | 'discountPercentage'>;

export const ProductCardMain = ({ title, price, discountPercentage }: ProductCardMainProps) => (
  <Card.Main className={styles['product-card-main']}>
    <h5>{title}</h5>
    <div>
      <h5 className={styles['product-card-main--price']}>${price}</h5>
      <h5 className={styles['product-card-main--discount']}>{discountPercentage}% off</h5>
    </div>
  </Card.Main>
);
