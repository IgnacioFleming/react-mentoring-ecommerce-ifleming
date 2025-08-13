import { Product } from '@/types/products';
import { ReactNode } from 'react';

type ProductAdditionalInfoProps = {
  product: Product;
};

const renderTerm = (title: string, term: string | number | ReactNode) => {
  if (!term) return null;
  return (
    <div>
      <dt>{title}:</dt>
      <dd>{term}</dd>
    </div>
  );
};

const renderDimensions = (dimensionsObject: Product['dimensions']) => {
  if (!dimensionsObject || Object.keys(dimensionsObject).length === 0) return null;
  return Object.entries(dimensionsObject).map((dimension, index) => (
    <div key={index}>
      {dimension[0]}: {dimension[1]}
    </div>
  ));
};

export const ProductAdditionalInfo = ({ product }: ProductAdditionalInfoProps) => (
  <div>
    <h3>Additional Information:</h3>
    <dl>
      {renderTerm('Weight', product.weight ? `${product.weight} grams` : null)}
      {renderTerm('Dimensions', renderDimensions(product.dimensions))}
      {renderTerm('Warranty Information', product.warrantyInformation)}
      {renderTerm('Shipping Information', product.shippingInformation)}
      {renderTerm('Return Policy', product.returnPolicy)}
    </dl>
  </div>
);
