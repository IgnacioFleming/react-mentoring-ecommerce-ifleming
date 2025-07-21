import { ReactNode } from 'react';
import { Modal } from '../Modal';
import { Product } from '../../types/products';
import { ProductRating } from '../ProductRating';
import { Button } from '../Button';
import { formatCurrency } from '../../lib/api/utils';
import { Heart } from 'lucide-react';
import { Separator } from '../Separator';

type ProductQuickViewModalProps = {
  trigger: ReactNode;
  product: Product;
};

export const ProductQuickViewModal = ({ trigger, product }: ProductQuickViewModalProps) => {
  return (
    <Modal>
      <Modal.Trigger>{trigger}</Modal.Trigger>
      <Modal.Content>
        <header>
          <img src={product.thumbnail} alt="Photo of the product" />
        </header>
        <Modal.Title>{product.title}</Modal.Title>
        <ProductRating rating={product.rating} reviewCount={product.reviews.length} />
        <h3>{formatCurrency(product.price)}</h3>
        <h6>Availability: {product.availabilityStatus}</h6>
        <p>{product.description}</p>
        <Separator decorative />
        <footer>
          <Button>Add to cart</Button>
          <Heart />
        </footer>
      </Modal.Content>
    </Modal>
  );
};
