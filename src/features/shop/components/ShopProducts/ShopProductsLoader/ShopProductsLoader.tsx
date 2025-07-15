import { ProductList } from '../../../../../components/ProductList';

type ShopProductLoaderProps = {
  loading: boolean;
  quantity: number;
};

export const ShopProductLoader = ({ loading, quantity }: ShopProductLoaderProps) => {
  if (!loading) return null;
  return <ProductList products={[]} skeletonQuantity={quantity} status="loading" />;
};
