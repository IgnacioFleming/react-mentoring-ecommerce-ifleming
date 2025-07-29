import clsx from 'clsx';
import { Eye, Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../../../types/products';
import { Card } from '../../Card';
import { ProductQuickViewModal } from '../../ProductQuickViewModal';
import hoverStyles from '../ProductCard.module.scss';
import styles from './Thumbnail.module.scss';
import { useProductStore } from '@/stores/useProductStore';

type ThumbnailProps = { id: Product['id'] };

export const Thumbnail = ({ id }: ThumbnailProps) => {
  const product = useProductStore((state) => state.getProductById)(id)!;

  return (
    <Card.Thumbnail
      src={product.thumbnail}
      alt={`${product.title} photo`}
      className={styles.thumbnail}
    >
      <div className={clsx(hoverStyles.thumbnail__icons, styles.thumbnail__icons)}>
        <Heart />
        <ShoppingCart />
        <ProductQuickViewModal trigger={<Eye />} id={id} />
      </div>
    </Card.Thumbnail>
  );
};
