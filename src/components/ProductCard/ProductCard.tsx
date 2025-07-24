import { ChevronRight } from 'lucide-react';
import { Product } from '../../types/products';
import { Card } from '../Card';
import { Button } from '../Button';
import { Thumbnail } from './Thumbnail';
import { Main } from './Main';
import { Header } from './Header';
import styles from './ProductCard.module.scss';
import { useProductStore } from '../../stores/useProductStore';
import { ReactNode } from 'react';

type ProductCardProps = {
  id: Product['id'];
  children?: ReactNode;
};

export const ProductCard = ({ id }: ProductCardProps) => {
  const product = useProductStore((state) => state.getProductById)(id);
  if (!product) return null;

  return (
    <li className={styles.container}>
      <Card className={styles.card}>
        <ProductCard.Thumbnail id={id} />
        <Card.Content className={styles.card__content}>
          <ProductCard.Header id={id} />
          <ProductCard.Main id={id} />
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
