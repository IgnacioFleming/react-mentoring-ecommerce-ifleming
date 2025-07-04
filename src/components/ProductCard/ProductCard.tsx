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
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <li className={styles.container}>
      <Card className={styles.card}>
        <ProductCardThumbnail thumbnail={product?.thumbnail} title={product?.title} />

        <Card.Content className={styles.card__content}>
          <ProductCardHeader brand={product.brand} rating={product.rating} />
          <ProductCardMain
            title={product.title}
            price={product.price}
            discountPercentage={product.discountPercentage}
          />
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
    </li>
  );
};
