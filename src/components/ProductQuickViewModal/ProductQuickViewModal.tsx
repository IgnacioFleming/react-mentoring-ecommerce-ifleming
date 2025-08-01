import { ReactNode } from 'react';
import { Product } from '../../types/products';
import { useProductStore } from '@/stores/useProductStore';
import { Modal } from '../Modal';
import { ProductDetail } from '../ProductDetail';
import styles from './ProductQuickViewModal.module.scss';

type ProductQuickViewModalProps = {
  trigger: ReactNode;
  id: Product['id'];
};

export const ProductQuickViewModal = ({ trigger, id }: ProductQuickViewModalProps) => {
  const product = useProductStore((state) => state.getProductById)(id);
  if (!product) return null;

  return (
    <Modal>
      <Modal.Trigger>{trigger}</Modal.Trigger>
      <Modal.Content className={styles.productQuickView}>
        <ProductDetail product={product} />
      </Modal.Content>
    </Modal>
  );
};
