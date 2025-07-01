import { Skeleton } from '../../Skeleton';
import { Card } from '../../Card';
import styles from './ProductsListSkeleton.module.scss';

type ProductsSkeletonProps = { quantity: number };

export const ProductsListSkeleton = ({ quantity }: ProductsSkeletonProps) => {
  return (
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
};
