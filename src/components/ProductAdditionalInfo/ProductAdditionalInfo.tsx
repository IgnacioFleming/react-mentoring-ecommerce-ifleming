import { Product } from '@/types/products';
import { ReactNode } from 'react';

type ProductAdditionalInfoProps = {
  product: Product;
};

const renderTerm = (term: string, description: string | number | ReactNode) => {
  if (!description) return null;
  return (
    <div>
      <dt>{term}:</dt>
      <dd>{description}</dd>
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
