import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ProductCard } from '../ProductCard';

type Selector = (state: { getProductById: () => void }) => void;

const MOCK_BRAND = 'mockBrand';
const MOCK_RATING = 4.5;

vi.mock('../../../stores/useProductStore', () => ({
  useProductStore: (selector: Selector) =>
    selector({
      getProductById: vi.fn().mockReturnValue({ brand: MOCK_BRAND, rating: MOCK_RATING }),
    }),
}));

describe('ProductCardHeader', () => {
  const renderProductCardHeader = () =>
    render(
      <MemoryRouter>
        <ProductCard.Header id={1} />
      </MemoryRouter>,
    );

  it('renders brand name in content header', () => {
    const { getByRole } = renderProductCardHeader();
    expect(getByRole('link', { name: MOCK_BRAND })).toBeInTheDocument();
  });

  it('renders rating in content header', () => {
    const { getByText } = renderProductCardHeader();
    expect(getByText(MOCK_RATING)).toBeInTheDocument();
  });
});
