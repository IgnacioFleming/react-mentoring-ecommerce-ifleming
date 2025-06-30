import clsx from 'clsx';
import { Eye, Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../../../types/products';
import { Card } from '../../Card';
import hoverStyles from '../ProductCard.module.scss';
import styles from './ProductCardThumbnail.module.scss';

type ProductCardThumbnailProps = Pick<Product, 'thumbnail' | 'title'>;

export const ProductCardThumbnail = ({ thumbnail, title }: ProductCardThumbnailProps) => (
  <Card.Thumbnail src={thumbnail} alt={`${title} photo`} className={styles.thumbnail}>
    <div className={clsx(hoverStyles.thumbnail__icons, styles.thumbnail__icons)}>
      <Heart />
      <ShoppingCart />
      <Eye />
    </div>
  </Card.Thumbnail>
);
