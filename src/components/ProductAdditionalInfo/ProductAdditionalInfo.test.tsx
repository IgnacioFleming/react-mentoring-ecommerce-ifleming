import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ProductAdditionalInfo } from './ProductAdditionalInfo';
import { PRODUCTS_MOCK } from '@tests/setup';
import { Product } from '@/types/products';

describe('ProductAdditionalInfo', () => {
  const product = PRODUCTS_MOCK[0];
  const renderProductAdditionalInfo = ({ ...props }: Partial<Product> = {}) =>
    render(<ProductAdditionalInfo product={{ ...product, ...props }} />);

  it('should display heading and information list correctly', () => {
    const { getByText, getByRole } = renderProductAdditionalInfo();
    expect(getByRole('heading', { name: 'Additional Information:' })).toBeInTheDocument();
    expect(getByText(`${product.weight} grams`)).toBeInTheDocument();
    expect(
      getByText(
        `height: ${product.dimensions.height}, width: ${product.dimensions.width}, depth: ${product.dimensions.depth}`,
      ),
    ).toBeInTheDocument();
    expect(getByText(product.warrantyInformation)).toBeInTheDocument();
    expect(getByText(product.shippingInformation)).toBeInTheDocument();
    expect(getByText(product.returnPolicy)).toBeInTheDocument();
  });

  it('should not display the categories that are not defined', () => {
    const { queryByText } = renderProductAdditionalInfo({ warrantyInformation: undefined });
    expect(queryByText('Warranty Information:')).not.toBeInTheDocument();
    expect(queryByText(product.warrantyInformation)).not.toBeInTheDocument();
    expect(queryByText('Shipping Information:')).toBeInTheDocument();
    expect(queryByText(product.shippingInformation)).toBeInTheDocument();
  });
});
