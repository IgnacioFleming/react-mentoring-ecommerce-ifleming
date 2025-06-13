import clsx from 'clsx';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import styles from './HoverCard.module.scss';

type HoverCardProps = HoverCardPrimitive.HoverCardProps & { className?: string };

export const HoverCard = ({ children, className, ...props }: HoverCardProps) => {
  return (
    <div className={className}>
      <HoverCardPrimitive.Root {...props}>{children}</HoverCardPrimitive.Root>
    </div>
  );
};

HoverCard.displayName = 'HoverCard';

const Trigger = ({ children }: HoverCardPrimitive.HoverCardTriggerProps) => {
  return (
    <HoverCardPrimitive.Trigger asChild>
      <div className={styles['hover-card__trigger']}>{children}</div>
    </HoverCardPrimitive.Trigger>
  );
};

HoverCard.Trigger = Trigger;

const Content = ({
  children,
  className,
}: HoverCardPrimitive.HoverCardPortalProps & HoverCardPrimitive.HoverCardContentProps) => {
  return (
    <HoverCardPrimitive.Portal>
      <HoverCardPrimitive.Content className={clsx(styles['hover-card__content'], className)}>
        {children}
      </HoverCardPrimitive.Content>
    </HoverCardPrimitive.Portal>
  );
};

HoverCard.Content = Content;
