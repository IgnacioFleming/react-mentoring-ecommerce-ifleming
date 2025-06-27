import { Product } from '../../types/products';
import { ProductCard } from '../ProductCard';
import styles from './ProductsList.module.scss';

type ProductsListProps = { products: Product[] };

export const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <ul className={styles['products-list']}>
      {products.map((p, index) => (
        <ProductCard product={p} key={index} />
      ))}
    </ul>
  );
};
