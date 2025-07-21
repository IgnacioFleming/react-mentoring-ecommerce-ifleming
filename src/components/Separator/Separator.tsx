import * as SeparatorPrimitive from '@radix-ui/react-separator';

export const Separator = ({ className }: SeparatorPrimitive.SeparatorProps) => (
  <SeparatorPrimitive.Root className={className} />
);

Separator.displayName = 'Separator';
