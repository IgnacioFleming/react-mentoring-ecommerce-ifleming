import { Eye, Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../../../../../../types/products';
import { Card } from '../../../../../../components/Card';
import styles from './ProductCardThumbnail.module.scss';

type ProductCardThumbnailProps = Pick<Product, 'thumbnail' | 'name'>;

const ICON_SIZE = 20;

export const ProductCardThumbnail = ({ thumbnail, name }: ProductCardThumbnailProps) => (
  <Card.Thumbnail src={thumbnail} alt={`${name} photo`} className={styles.thumbnail}>
    <div className={styles.thumbnail__icons}>
      <div>
        <Heart size={ICON_SIZE} />
      </div>
      <div>
        <ShoppingCart size={ICON_SIZE} />
      </div>
      <div>
        <Eye size={ICON_SIZE} />
      </div>
    </div>
  </Card.Thumbnail>
);
