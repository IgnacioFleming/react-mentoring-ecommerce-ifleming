import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu';

type DropdownProps = DropdownPrimitive.DropdownMenuProps;

export const Dropdown = ({ children, ...props }: DropdownProps) => {
  return <DropdownPrimitive.Root {...props}>{children}</DropdownPrimitive.Root>;
};

Dropdown.displayName = 'Dropdown';

const Trigger = ({ children }: DropdownPrimitive.DropdownMenuTriggerProps) => {
  return <DropdownPrimitive.Trigger asChild>{children}</DropdownPrimitive.Trigger>;
};

Dropdown.Trigger = Trigger;

const Content = ({
  children,
  className,
}: DropdownPrimitive.DropdownMenuPortalProps & DropdownPrimitive.DropdownMenuContentProps) => {
  return (
    <DropdownPrimitive.Portal>
      <DropdownPrimitive.Content className={className}>{children}</DropdownPrimitive.Content>
    </DropdownPrimitive.Portal>
  );
};

Dropdown.Content = Content;
