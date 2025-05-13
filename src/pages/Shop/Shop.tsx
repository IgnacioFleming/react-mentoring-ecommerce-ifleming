import { Container } from '../../components/Container';
import { useProductCategories } from '../../features/shop/hooks/useProductCategories';
import Categories from '../../features/shop/components/Categories/Categories';

export const Shop = () => {
  const { productCategories, isLoadingProductCategories, productCategoriesError } =
    useProductCategories();

  if (isLoadingProductCategories) return null;
  if (productCategoriesError) return <p>Something went wrong</p>;

  return (
    <Container>
      <h1>Shop</h1>
      {productCategories && <Categories productCategories={productCategories} />}
    </Container>
  );
};
