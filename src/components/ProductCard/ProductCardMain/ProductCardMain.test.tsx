import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { ProductCardMain } from './ProductCardMain';

describe('ProductCardMain', () => {
  const MOCK_NAME = 'mockName';
  const MOCK_PRICE = 100;
  const MOCK_DISCOUNT = 10;
  const renderProductCardMain = () =>
    render(<ProductCardMain name={MOCK_NAME} price={MOCK_PRICE} discount={MOCK_DISCOUNT} />);

  it('renders product name, price and discount correctly in content main', () => {
    const { getByText } = renderProductCardMain();
    expect(getByText(MOCK_NAME)).toBeInTheDocument();
    expect(getByText(`$${MOCK_PRICE}`)).toBeInTheDocument();
    expect(getByText(`${MOCK_DISCOUNT}% off`)).toBeInTheDocument();
  });
});
