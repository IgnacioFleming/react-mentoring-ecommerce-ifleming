import type { Category } from '../../../../types/products';

type CategoriesProps = {
  productCategories: Category[];
};

const Categories = ({ productCategories }: CategoriesProps) => (
  <ul>{productCategories?.map((category) => <li key={category.slug}>{category.name}</li>)}</ul>
);

export default Categories;
