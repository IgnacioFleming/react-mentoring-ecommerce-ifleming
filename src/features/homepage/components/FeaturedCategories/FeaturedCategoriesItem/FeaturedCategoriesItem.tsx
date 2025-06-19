import clsx from 'clsx';
import styles from './FeaturedCategoriesItem.module.scss';

export type FeaturedCategoriesProps = {
  imagePath: string;
  alt: string;
  title: string;
  caption: string;
  stacked?: boolean;
};

export const FeaturedCategoriesItem = ({
  imagePath,
  alt,
  title,
  caption,
  stacked,
}: FeaturedCategoriesProps) => {
  return (
    <figure className={styles['featured-categories-item']}>
      <img
        className={clsx(styles['featured-categories-item__img'], {
          [styles['featured-categories-item__img--stacked']]: stacked,
        })}
        src={imagePath}
        alt={alt}
        title={title}
      />
      <figcaption>
        <h5>{caption}</h5>
      </figcaption>
    </figure>
  );
};
