import { ChevronRight, Eye, Heart, ShoppingCart, Star } from 'lucide-react';
import { Card } from '../../../../../components/Card';
import styles from './ProductCard.module.scss';
import { Link } from 'react-router-dom';
import { Button } from '../../../../../components/Button';
import { Product } from '../../../../../types/products';

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className={styles.card}>
      <Card.Thumbnail
        src={product.thumbnail}
        alt={`${product.name} photo`}
        className={styles.card__thumbnail}
      >
        <div className={styles.card__thumbnail__icons}>
          <div>
            <Heart size={20} />
          </div>
          <div>
            <ShoppingCart size={20} />
          </div>
          <div>
            <Eye size={20} />
          </div>
        </div>
      </Card.Thumbnail>
      <Card.Content className={styles.card__content}>
        <Card.Header className={styles.card__content__header}>
          <Link to="" className={styles.card__content__header__brand}>
            {product.brand}
          </Link>
          <div className={styles.card__content__header__rating}>
            <Star size={16} />
            <p>{product.rating}</p>
          </div>
        </Card.Header>
        <Card.Main className={styles.card__content__main}>
          <h5>{product.name}</h5>
          <div>
            <h5 className={styles['card__content__main--price']}>${product.price}</h5>
            <h5 className={styles['card__content__main--discount']}>{product.discount}% off</h5>
          </div>
        </Card.Main>
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
};
