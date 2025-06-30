import { ChevronRight } from 'lucide-react';
import { Product } from '../../types/products';
import { Card } from '../Card';
import { Button } from '../Button';
import { ProductCardThumbnail } from './ProductCardThumbnail';
import { ProductCardHeader } from './ProductCardHeader';
import { ProductCardMain } from './ProductCardMain';
import styles from './ProductCard.module.scss';
import { Skeleton } from '../Skeleton';

type ProductCardProps = {
  product: Product | null;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <li className={styles.container}>
      <Card className={styles.card}>
        {product ? (
          <ProductCardThumbnail thumbnail={product?.thumbnail} title={product?.title} />
        ) : (
          <Skeleton className={styles['card__thumbnail-skeleton']} />
        )}
        <Card.Content className={styles.card__content}>
          {product ? (
            <>
              <ProductCardHeader brand={product.brand} rating={product.rating} />
              <ProductCardMain
                name={product.title}
                price={product.price}
                discount={product.discountPercentage}
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
            </>
          ) : (
            <>
              <Skeleton className={styles['card__content-skeleton']} />
              <Skeleton className={styles['card__content-skeleton']} />
              <Skeleton className={styles['card__content-skeleton']} />
              <Skeleton className={styles['card__content-skeleton--button']} />
            </>
          )}
        </Card.Content>
      </Card>
    </li>
  );
};
