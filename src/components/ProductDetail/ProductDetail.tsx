import { formatCurrency } from '@/lib/api/utils';
import { ProductRating } from '../ProductRating';
import styles from './ProductDetail.module.scss';
import { Separator } from '../Separator';
import { Button } from '../Button';
import { Heart } from 'lucide-react';
import { useProductStore } from '@/stores/useProductStore';
import { Product } from '@/types/products';

type ProductDetailProps = {
  id: Product['id'];
};

export const ProductDetail = ({ id }: ProductDetailProps) => {
  const product = useProductStore((state) => state.getProductById)(id);
  if (!product) return null;
  return (
    <div className={styles['product-detail']}>
      <header className={styles['product-detail__header']}>
        <img src={product.thumbnail} alt="Photo of the product" />
      </header>
      <div className={styles['product-detail__content']}>
        <h4 className={styles['product-detail__content__title']}>{product.title}</h4>
        <ProductRating rating={product.rating} reviewCount={product.reviews.length} />
        <div>
          <h3 className={styles['product-detail__content__price']}>
            {formatCurrency(product.price)}
          </h3>
          <h6 className={styles['product-detail__content__availability']}>
            Availability: <span>{product.availabilityStatus}</span>
          </h6>
        </div>
        <p className={styles['product-detail__content__description']}>{product.description}</p>
        <Separator decorative className={styles['product-detail__content__separator']} />
        <footer className={styles['product-detail__footer']}>
          <Button className={styles['product-detail__footer__button']}>Add to cart</Button>
          <Heart className={styles['product-detail__footer__icon']} data-testid="mark-fav" />
        </footer>
      </div>
    </div>
  );
};
