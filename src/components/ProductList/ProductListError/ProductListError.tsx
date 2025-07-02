import { CircleX } from 'lucide-react';
import styles from './ProductListError.module.scss';

export const ProductListError = () => (
  <div className={styles.error}>
    <header className={styles.error__header}>
      <CircleX />
      <h4>Loading Error:</h4>
    </header>
    <p>There was an error while loading Products</p>
  </div>
);
