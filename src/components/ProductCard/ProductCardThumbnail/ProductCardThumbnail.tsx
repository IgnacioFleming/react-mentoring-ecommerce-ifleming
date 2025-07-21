import clsx from 'clsx';
import { Eye, Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../../../types/products';
import { Card } from '../../Card';
import hoverStyles from '../ProductCard.module.scss';
import styles from './ProductCardThumbnail.module.scss';
import { ProductQuickViewModal } from '../../ProductQuickViewModal';

type ProductCardThumbnailProps = { product: Product };

export const ProductCardThumbnail = ({ product }: ProductCardThumbnailProps) => (
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
