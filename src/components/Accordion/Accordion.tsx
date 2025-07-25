import clsx from 'clsx';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import styles from './Accordion.module.scss';

export const Accordion = ({
  children,
  ...props
}: AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps) => {
  return <AccordionPrimitive.Root {...props}>{children}</AccordionPrimitive.Root>;
};

Accordion.displayName = 'Accordion';

const Item = ({ children, ...props }: AccordionPrimitive.AccordionItemProps) => (
  <AccordionPrimitive.Item {...props} value={props.value} data-testid="accordion-item">
    {children}
  </AccordionPrimitive.Item>
);

Accordion.Item = Item;

const Trigger = ({
  children,
  className,
}: AccordionPrimitive.AccordionHeaderProps & AccordionPrimitive.AccordionTriggerProps) => {
  return (
    <AccordionPrimitive.AccordionHeader className={className}>
      <AccordionPrimitive.Trigger asChild>{children}</AccordionPrimitive.Trigger>
    </AccordionPrimitive.AccordionHeader>
  );
};

Accordion.Trigger = Trigger;

const Content = ({ children, ...props }: AccordionPrimitive.AccordionContentProps) => (
  <AccordionPrimitive.Content className={clsx(styles.accordion__content, props.className)}>
    {children}
  </AccordionPrimitive.Content>
);

Accordion.Content = Content;
