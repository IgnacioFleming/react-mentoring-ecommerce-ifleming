import clsx from 'clsx';
import { Eye, Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../../../types/products';
import { Card } from '../../Card';
import { ProductQuickViewModal } from '../../ProductQuickViewModal';
import hoverStyles from '../ProductCard.module.scss';
import styles from './Thumbnail.module.scss';

type ThumbnailProps = { product: Product };

export const Thumbnail = ({ product }: ThumbnailProps) => (
  <Card.Thumbnail
    src={product.thumbnail}
    alt={`${product.title} photo`}
    className={styles.thumbnail}
  >
    <div className={clsx(hoverStyles.thumbnail__icons, styles.thumbnail__icons)}>
      <Heart />
      <ShoppingCart />
      <ProductQuickViewModal trigger={<Eye />} product={product} />
    </div>
  </Card.Thumbnail>
);
