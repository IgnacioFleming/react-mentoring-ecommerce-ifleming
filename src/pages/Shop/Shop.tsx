import { Container } from '../../components/Container';
import { useProductCategories } from '../../features/shop/hooks/useProductCategories';
import { Categories } from '../../features/shop/components/Categories';

export const Shop = () => {
  const { productCategories } = useProductCategories();

  return (
    <Container>
      <h2>Shop</h2>
      <Categories productCategories={productCategories} />
    </Container>
  );
};
