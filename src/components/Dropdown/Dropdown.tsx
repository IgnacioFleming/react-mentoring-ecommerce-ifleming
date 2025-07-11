import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';
import styles from './Dropdown.module.scss';

export const Dropdown = ({
  children,
  className,
}: DropdownPrimitive.DropdownMenuProps & { className?: string }) => (
  <div className={className}>
    <DropdownPrimitive.Root>{children}</DropdownPrimitive.Root>
  </div>
);

Dropdown.displayName = 'Dropdown';

const Trigger = ({ children, className }: DropdownPrimitive.DropdownMenuTriggerProps) => (
  <DropdownPrimitive.DropdownMenuTrigger
    className={clsx(styles.dropdown__trigger, className)}
    asChild
  >
    {children}
  </DropdownPrimitive.DropdownMenuTrigger>
);

Dropdown.Trigger = Trigger;

const Content = ({
  children,
  className,
}: DropdownPrimitive.DropdownMenuContentProps & DropdownPrimitive.DropdownMenuPortalProps) => (
  <DropdownPrimitive.Portal>
    <DropdownPrimitive.Content className={clsx(styles.dropdown__content, className)}>
      {children}
    </DropdownPrimitive.Content>
  </DropdownPrimitive.Portal>
);

Dropdown.Content = Content;

const Item = ({ children, className }: DropdownPrimitive.DropdownMenuItemProps) => (
  <DropdownPrimitive.Item className={className}>{children}</DropdownPrimitive.Item>
);

Dropdown.Item = Item;

const Separator = ({ className }: DropdownPrimitive.DropdownMenuSeparatorProps) => (
  <DropdownPrimitive.DropdownMenuSeparator className={className} />
);

Dropdown.Separator = Separator;
