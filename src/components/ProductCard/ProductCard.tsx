import { ChevronRight } from 'lucide-react';
import { Product } from '../../types/products';
import { Card } from '../Card';
import { Button } from '../Button';
import { ProductCardThumbnail } from './ProductCardThumbnail';
import { ProductCardHeader } from './ProductCardHeader';
import { ProductCardMain } from './ProductCardMain';
import styles from './ProductCard.module.scss';

type ProductCardProps = {
  product: Product;
  hasHeader?: boolean;
};

export const ProductCard = ({ product, hasHeader }: ProductCardProps) => (
  <Card className={styles.card}>
    <ProductCardThumbnail thumbnail={product.thumbnail} name={product.name} />
    <Card.Content className={styles.card__content}>
      {hasHeader && <ProductCardHeader brand={product.brand} rating={product.rating} />}
      <ProductCardMain name={product.name} price={product.price} discount={product.discount} />
      <Card.Footer>
        <Button
          variant="outline"
          rounded
          rightIcon={<ChevronRight size={24} />}
          className={styles.card__content__footer__btn}
        >
          Learn More
        </Button>
      </Card.Footer>
    </Card.Content>
  </Card>
);
