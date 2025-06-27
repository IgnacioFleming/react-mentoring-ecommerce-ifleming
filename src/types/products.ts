export type Category = {
  slug: string;
  name: string;
  url: string;
};

export type Product = {
  title: string;
  brand: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
  rating: number;
};
