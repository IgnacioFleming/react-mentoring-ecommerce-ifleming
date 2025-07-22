import { ReactNode } from 'react';
import { Heart } from 'lucide-react';
import { Product } from '../../types/products';
import { Modal } from '../Modal';
import { Button } from '../Button';
import { ProductRating } from '../ProductRating';
import { Separator } from '../Separator';
import { formatCurrency } from '../../lib/api/utils';
import styles from './ProductQuickViewModal.module.scss';

type ProductQuickViewModalProps = {
  trigger: ReactNode;
  product: Product;
};

export const ProductQuickViewModal = ({ trigger, product }: ProductQuickViewModalProps) => {
  return (
    <Modal>
      <Modal.Trigger>{trigger}</Modal.Trigger>
      <Modal.Content className={styles.productQuickView}>
        <header className={styles.productQuickView__header}>
          <img src={product.thumbnail} alt="Photo of the product" />
        </header>
        <div className={styles.productQuickView__content}>
          <Modal.Title className={styles.productQuickView__content__title}>
            {product.title}
          </Modal.Title>
          <ProductRating rating={product.rating} reviewCount={product.reviews.length} />
          <div>
            <h3 className={styles.productQuickView__content__price}>
              {formatCurrency(product.price)}
            </h3>
            <h6 className={styles.productQuickView__content__availability}>
              Availability: <span>{product.availabilityStatus}</span>
            </h6>
          </div>
          <p className={styles.productQuickView__content__description}>{product.description}</p>
          <Separator decorative className={styles.productQuickView__content__separator} />
          <footer className={styles.productQuickView__footer}>
            <Button className={styles.productQuickView__footer__button}>Add to cart</Button>
            <Heart className={styles.productQuickView__footer__icon} data-testid="mark-fav" />
          </footer>
        </div>
      </Modal.Content>
    </Modal>
  );
};
