import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Product } from '../../../types/products';
import { Card } from '../../Card';
import styles from './ProductCardHeader.module.scss';

type ProductCardHeaderProps = Pick<Product, 'brand' | 'rating'>;

export const ProductCardHeader = ({ brand, rating }: ProductCardHeaderProps) => (
  <Card.Header className={styles['product-card-header']}>
    <Link to="" className={styles['product-card-header__brand']}>
      {brand}
    </Link>
    <div className={styles['product-card-header__rating']}>
      <Star size={16} />
      <p>{rating}</p>
    </div>
  </Card.Header>
);
