import clsx from 'clsx';
import { Eye, Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../../../../../../types/products';
import { Card } from '../../../../../../components/Card';
import hoverStyles from '../ProductCard.module.scss';
import styles from './ProductCardThumbnail.module.scss';

type ProductCardThumbnailProps = Pick<Product, 'thumbnail' | 'name'>;

export const ProductCardThumbnail = ({ thumbnail, name }: ProductCardThumbnailProps) => (
  <Card.Thumbnail src={thumbnail} alt={`${name} photo`} className={styles.thumbnail}>
    <div className={clsx(hoverStyles.thumbnail__icons, styles.thumbnail__icons)}>
      <Heart />
      <ShoppingCart />
      <Eye />
    </div>
  </Card.Thumbnail>
);
