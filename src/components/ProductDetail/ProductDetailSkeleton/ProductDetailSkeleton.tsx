import { Skeleton } from '@/components/Skeleton';
import styles from './ProductDetailSkeleton.module.scss';

export const ProductDetailSkeleton = () => {
  return (
    <div className={styles.container} data-testid="product-detail-skeleton">
      <Skeleton className={styles.thumbnail} />
      <div className={styles.content}>
        <Skeleton className={styles.content__line} />
        <Skeleton className={styles.content__line} />
        <Skeleton className={styles['content__block--sm']} />
        <Skeleton className={styles['content__block--md']} />
        <div className={styles.content__footer}>
          <Skeleton className={styles.content__footer__btn} />
          <Skeleton className={styles.content__footer__fav} />
        </div>
      </div>
    </div>
  );
};
