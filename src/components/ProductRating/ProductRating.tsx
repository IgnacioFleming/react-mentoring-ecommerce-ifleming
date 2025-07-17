import clsx from 'clsx';
import { Star } from 'lucide-react';
import { styleByRating } from './utils';
import styles from './ProductRating.module.scss';

export type ProductRatingProps = {
  rating: number;
  reviewCount: number;
};

export const ProductRating = ({ rating, reviewCount }: ProductRatingProps) => (
  <div className={styles.container}>
    <div className={styles.stars}>
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} className={styles.stars__container}>
          <Star className={styles.stars__star} />
          <Star
            className={clsx(styles.stars__star, styles[styleByRating(rating, index)])}
            data-testid="star"
          />
        </span>
      ))}
    </div>
    <h6 className={styles.reviews}>{reviewCount} Reviews</h6>
  </div>
);
