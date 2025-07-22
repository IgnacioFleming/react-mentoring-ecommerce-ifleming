import * as DialogPrimitive from '@radix-ui/react-dialog';
import { XCircleIcon } from 'lucide-react';
import styles from './Modal.module.scss';
import clsx from 'clsx';

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

const Title = ({ children, className }: DialogPrimitive.DialogTitleProps) => {
  return (
    <DialogPrimitive.Title
      className={clsx(styles.modal__title, className)}
      data-testid="modal-title"
    >
      {children}
    </DialogPrimitive.Title>
  );
};

Title.displayName = 'Modal.Title';
Modal.Title = Title;

const Content = ({
  children,
  className,
}: DialogPrimitive.DialogContentProps & DialogPrimitive.DialogPortalProps) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className={styles.modal__overlay} data-testid="modal-overlay" />
    <DialogPrimitive.Content
      aria-describedby={undefined}
      className={clsx(styles.modal__content, className)}
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
