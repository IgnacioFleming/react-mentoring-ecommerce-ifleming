import * as SelectPrimitive from '@radix-ui/react-select';
import clsx from 'clsx';
import styles from './Select.module.scss';

export const Select = ({
  children,
  className,
  onValueChange,
}: SelectPrimitive.SelectProps & { className?: string }) => (
  <div className={className} data-testid="select">
    <SelectPrimitive.Root onValueChange={onValueChange}>{children}</SelectPrimitive.Root>
  </div>
);

Select.displayName = 'Select';

const Trigger = ({ children, className }: SelectPrimitive.SelectTriggerProps) => (
  <SelectPrimitive.SelectTrigger
    className={clsx(styles.select__trigger, className)}
    data-testid="select-trigger"
  >
    {children}
  </SelectPrimitive.SelectTrigger>
);

Select.Trigger = Trigger;

const Value = ({ className, placeholder }: SelectPrimitive.SelectValueProps) => (
  <SelectPrimitive.Value
    className={className}
    placeholder={placeholder}
    data-testid="select-value"
  />
);

Select.Value = Value;

const Icon = ({ className, children }: SelectPrimitive.SelectIconProps) => (
  <SelectPrimitive.Icon className={className}>{children}</SelectPrimitive.Icon>
);

Select.Icon = Icon;

const Content = ({
  children,
  className,
}: SelectPrimitive.SelectContentProps & SelectPrimitive.SelectPortalProps) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content position="popper" side="bottom">
      <SelectPrimitive.Viewport className={clsx(styles.select__viewport, className)}>
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
);

Select.Content = Content;

const Item = ({ children, className, value }: SelectPrimitive.SelectItemProps) => (
  <SelectPrimitive.Item
    value={value}
    className={clsx(styles.select__item, className)}
    data-testid="select-item"
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
);

Select.Item = Item;

const Separator = ({ className }: SelectPrimitive.SelectSeparatorProps) => (
  <SelectPrimitive.Separator className={className} data-testid="select-separator" />
);

Select.Separator = Separator;
