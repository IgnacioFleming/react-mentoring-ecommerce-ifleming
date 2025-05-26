import * as DialogPrimitive from '@radix-ui/react-dialog';
import { XCircleIcon } from 'lucide-react';
import styles from './Modal.module.scss';

type ModalProps = DialogPrimitive.DialogProps;

export const Modal = ({ children, ...props }: ModalProps) => {
  return <DialogPrimitive.Root {...props}>{children}</DialogPrimitive.Root>;
};
Modal.displayName = 'Modal';

const Trigger = ({ children }: DialogPrimitive.DialogTriggerProps) => {
  return <DialogPrimitive.Trigger asChild>{children}</DialogPrimitive.Trigger>;
};

Trigger.displayName = 'Modal.Trigger';
Modal.Trigger = Trigger;

const Title = ({ children }: DialogPrimitive.DialogTitleProps) => {
  return (
    <DialogPrimitive.Title className={styles.modal__title} data-testid="modal-title">
      {children}
    </DialogPrimitive.Title>
  );
};

Title.displayName = 'Modal.Title';
Modal.Title = Title;

const Content = ({
  children,
}: DialogPrimitive.DialogContentProps & DialogPrimitive.DialogPortalProps) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className={styles.modal__overlay} data-testid="modal-overlay" />
    <DialogPrimitive.Content
      aria-describedby={undefined}
      className={styles.modal__content}
      data-testid="modal-content"
    >
      <>
        <DialogPrimitive.Close asChild>
          <button className={styles.modal__close} data-testid="modal-close">
            <XCircleIcon className={styles.modal__close__icon} />
          </button>
        </DialogPrimitive.Close>
        {children}
      </>
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
);

Content.displayName = 'Modal.Content';
Modal.Content = Content;
