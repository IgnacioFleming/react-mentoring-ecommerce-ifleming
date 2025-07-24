export const calculateSkeletonQuantity = (
  total: number | undefined,
  productsQuantity: number,
  offset: number,
) => {
  if (!total) return offset;
  const productLeft = total - productsQuantity;
  return productLeft > offset ? offset : productLeft;
};
