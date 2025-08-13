import { ReactNode } from 'react';
import { Product } from '@/types/products';
import styles from './ProductAdditionalInfo.module.scss';

type ProductAdditionalInfoProps = {
  product: Product;
};

const renderTerm = (term: string, description: string | number | ReactNode) => {
  if (!description) return null;
  return (
    <div className={styles.definition}>
      <dt>{term}: </dt>
      <dd>{description}</dd>
    </div>
  );
};

const renderDimensions = (dimensionsObject: Product['dimensions']) => {
  if (!dimensionsObject || Object.keys(dimensionsObject).length === 0) return null;
  return Object.entries(dimensionsObject)
    .map(([key, value]) => `${key}: ${value}`)
    .join(', ');
};

export const ProductAdditionalInfo = ({ product }: ProductAdditionalInfoProps) => (
  <div className={styles['additional-info']}>
    <h3 className={styles['additional-info__heading']}>Additional Information:</h3>
    <dl className={styles['additional-info__list']}>
      {renderTerm('Weight', product.weight ? `${product.weight} grams` : null)}
      {renderTerm('Dimensions', renderDimensions(product.dimensions))}
      {renderTerm('Warranty Information', product.warrantyInformation)}
      {renderTerm('Shipping Information', product.shippingInformation)}
      {renderTerm('Return Policy', product.returnPolicy)}
    </dl>
  </div>
);
