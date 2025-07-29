import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { ProductCard } from '../ProductCard';
import { PRODUCTS_MOCK } from '@tests/setup';

describe('ProductCardMain', () => {
  const renderProductCardMain = () => render(<ProductCard.Main id={1} />);

  it('renders product name, price and discount correctly in content main', () => {
    const { getByText } = renderProductCardMain();
    expect(getByText(PRODUCTS_MOCK[0].title)).toBeInTheDocument();
    expect(getByText(`$${PRODUCTS_MOCK[0].price}`)).toBeInTheDocument();
    expect(getByText(`${PRODUCTS_MOCK[0].discountPercentage}% off`)).toBeInTheDocument();
  });
});
