import { Container } from '../../components/Container';
// import { useProductCategories } from '../../features/shop/hooks/useProductCategories';
import { FeaturedCategories } from '../../features/shop/components/FeaturedCategories';

export const Shop = () => {
  // const { productCategories, isLoadingProductCategories, productCategoriesError } =
  //   useProductCategories();

  // if (isLoadingProductCategories) return null;
  // if (productCategoriesError) return <p>Something went wrong</p>;

  return (
    <Container>
      <h2>Shop</h2>
      <FeaturedCategories />
      {/* {productCategories && <Categories productCategories={productCategories} />} */}
    </Container>
  );
};
