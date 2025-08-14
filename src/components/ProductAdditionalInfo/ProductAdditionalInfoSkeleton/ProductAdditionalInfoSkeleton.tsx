import { Skeleton } from '@/components/Skeleton';
import styles from './ProductAdditionalInfoSkeleton.module.scss';

export const ProductAdditionalInfoSkeleton = () => (
  <>
    <div className={styles['tabs-container']}>
      <Skeleton className={styles['tabs-container__tab']} />
    </div>
    <div className={styles.container} data-testid="product-additional-info-skeleton">
      <Skeleton className={styles.heading} />
      {Array.from({ length: 5 }).map((_, index) => (
        <Skeleton key={index} className={styles.line} />
      ))}
    </div>
  </>
);
