import clsx from 'clsx';
import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu';
import styles from './Dropdown.module.scss';
import { ChevronDown } from 'lucide-react';

type DropdownProps = DropdownPrimitive.DropdownMenuProps & { className?: string };

export const Dropdown = ({ children, className, ...props }: DropdownProps) => {
  return (
    <div className={className}>
      <DropdownPrimitive.Root {...props}>{children}</DropdownPrimitive.Root>
    </div>
  );
};

Dropdown.displayName = 'Dropdown';

const Trigger = ({ children }: DropdownPrimitive.DropdownMenuTriggerProps) => {
  return (
    <DropdownPrimitive.Trigger asChild>
      <div className={styles.dropdown__trigger}>
        {children}
        <ChevronDown size={20} />
      </div>
    </DropdownPrimitive.Trigger>
  );
};

Dropdown.Trigger = Trigger;

const Content = ({
  children,
  className,
}: DropdownPrimitive.DropdownMenuPortalProps & DropdownPrimitive.DropdownMenuContentProps) => {
  return (
    <DropdownPrimitive.Portal>
      <DropdownPrimitive.Content className={clsx(styles.dropdown__content, className)}>
        {children}
      </DropdownPrimitive.Content>
    </DropdownPrimitive.Portal>
  );
};

Dropdown.Content = Content;
