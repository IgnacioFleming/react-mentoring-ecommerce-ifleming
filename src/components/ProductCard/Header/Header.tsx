import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Product } from '../../../types/products';
import { Card } from '../../Card';
import styles from './Header.module.scss';

type HeaderProps = Pick<Product, 'brand' | 'rating'>;

export const Header = ({ brand, rating }: HeaderProps) => (
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
