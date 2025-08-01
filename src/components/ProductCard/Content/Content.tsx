import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';
import { Product } from '@/types/products';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import styles from './Content.module.scss';

type ContentProps = { id: Product['id']; children: ReactNode };

export const Content = ({ id, children }: ContentProps) => (
  <Card.Content className={styles.content}>
    {children}
    <Card.Footer className={styles.content__footer}>
      <Link to={`/product/${id}`}>
        <Button
          variant="outline"
          rounded
          rightIcon={<ChevronRight size={24} />}
          className={styles.content__footer__btn}
        >
          Learn More
        </Button>
      </Link>
    </Card.Footer>
  </Card.Content>
);
