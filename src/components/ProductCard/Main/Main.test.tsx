import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { ProductCard } from '../ProductCard';

type Selector = (state: { getProductById: () => void }) => void;

const MOCK_TITLE = 'mockName';
const MOCK_PRICE = 100;
const MOCK_DISCOUNT = 10;

vi.mock('../../../stores/useProductStore', () => ({
  useProductStore: (selector: Selector) =>
    selector({
      getProductById: vi.fn().mockReturnValue({
        title: MOCK_TITLE,
        price: MOCK_PRICE,
        discountPercentage: MOCK_DISCOUNT,
      }),
    }),
}));

describe('ProductCardMain', () => {
  const renderProductCardMain = () => render(<ProductCard.Main id={1} />);

  it('renders product name, price and discount correctly in content main', () => {
    const { getByText } = renderProductCardMain();
    expect(getByText(MOCK_TITLE)).toBeInTheDocument();
    expect(getByText(`$${MOCK_PRICE}`)).toBeInTheDocument();
    expect(getByText(`${MOCK_DISCOUNT}% off`)).toBeInTheDocument();
  });
});
