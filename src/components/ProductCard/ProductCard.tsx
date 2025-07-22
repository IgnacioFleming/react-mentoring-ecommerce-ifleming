import { ChevronRight } from 'lucide-react';
import { Product } from '../../types/products';
import { Card } from '../Card';
import { Button } from '../Button';
import { Thumbnail } from './Thumbnail';
import { Main } from './Main';
import { Header } from './Header';
import styles from './ProductCard.module.scss';

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <li className={styles.container}>
      <Card className={styles.card}>
        <ProductCard.Thumbnail product={product} />
        <Card.Content className={styles.card__content}>
          <ProductCard.Header brand={product.brand} rating={product.rating} />
          <ProductCard.Main
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

ProductCard.Header = Header;
ProductCard.Thumbnail = Thumbnail;
ProductCard.Main = Main;
