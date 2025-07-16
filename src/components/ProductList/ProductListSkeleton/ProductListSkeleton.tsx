import { Skeleton } from '../../Skeleton';
import { Card } from '../../Card';
import styles from './ProductListSkeleton.module.scss';

type ProductsSkeletonProps = { quantity: number };

export const ProductListSkeleton = ({ quantity }: ProductsSkeletonProps) => (
  <>
    {Array(quantity)
      .fill(null)
      .map((_, index) => (
        <li key={index} className={styles.container}>
          <Card>
            <Skeleton className={styles.card__thumbnail} />
            <Card.Content>
              <Skeleton className={styles.card__content} />
              <Skeleton className={styles.card__content} />
              <Skeleton className={styles.card__content} />
              <Skeleton className={styles['card__content--button']} />
            </Card.Content>
          </Card>
        </li>
      ))}
  </>
);
