import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Product } from '../../../types/products';
import { Card } from '../../Card';
import styles from './Header.module.scss';
import { useProductStore } from '../../../stores/useProductStore';

type HeaderProps = { id: Product['id'] };

export const Header = ({ id }: HeaderProps) => {
  const { brand, rating } = useProductStore((state) => state.getProductById)(id)!;

  return (
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
};
