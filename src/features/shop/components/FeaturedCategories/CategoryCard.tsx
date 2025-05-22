import styles from './CategoryCard.module.scss';

type CategoryCardProps = {
  name: string;
  background?: string;
};

export const CategoryCard = ({ name, background = '#ccc' }: CategoryCardProps) => (
  <div className={styles['category-card']} style={{ backgroundColor: background }}>
    <h5 className={styles['category-card__text']}>{name}</h5>
  </div>
);
