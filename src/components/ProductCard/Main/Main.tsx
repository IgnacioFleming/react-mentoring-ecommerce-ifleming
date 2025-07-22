import { Product } from '../../../types/products';
import { Card } from '../../Card';
import styles from './Main.module.scss';

type MainProps = Pick<Product, 'title' | 'price' | 'discountPercentage'>;

export const Main = ({ title, price, discountPercentage }: MainProps) => (
  <Card.Main className={styles['product-card-main']}>
    <h5>{title}</h5>
    <div>
      <h5 className={styles['product-card-main--price']}>${price}</h5>
      <h5 className={styles['product-card-main--discount']}>{discountPercentage}% off</h5>
    </div>
  </Card.Main>
);
