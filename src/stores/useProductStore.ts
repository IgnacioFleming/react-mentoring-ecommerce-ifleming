import { create } from 'zustand';
import { DataStatus, Product } from '../types/products';

type ProductStoreState = {
  products: Product[];
  status: DataStatus;
  total: number;
};

type ProductStoreActions = {
  setProducts: (
    nextProducts:
      | ProductStoreState['products']
      | ((currentProducts: ProductStoreState['products']) => ProductStoreState['products']),
  ) => void;
  setStatus: (nextStatus: ProductStoreState['status']) => void;
  setTotal: (nextTotal: ProductStoreState['total']) => void;
  getProductById: (id: Product['id']) => Product | undefined;
};

type ProductStore = ProductStoreState & ProductStoreActions;

export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  status: 'loading',
  total: 0,
  setProducts: (nextProducts) => {
    set((state) => ({
      products: typeof nextProducts === 'function' ? nextProducts(state.products) : nextProducts,
    }));
  },
  setStatus: (nextStatus) => {
    set({ status: nextStatus });
  },
  setTotal: (nextTotal) => {
    set(() => ({ total: nextTotal }));
  },
  getProductById: (id) => get().products.find((p) => p.id === id),
}));
