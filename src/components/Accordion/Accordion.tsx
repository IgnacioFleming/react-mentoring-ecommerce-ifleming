import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import styles from './Accordion.module.scss';
import clsx from 'clsx';

export const Accordion = ({
  children,
  ...props
}: AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps) => {
  return <AccordionPrimitive.Root {...props}>{children}</AccordionPrimitive.Root>;
};

Accordion.displayName = Accordion;

const Item = ({ children, ...props }: AccordionPrimitive.AccordionItemProps) => (
  <AccordionPrimitive.Item {...props} value={props.value}>
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
      <AccordionPrimitive.Trigger asChild>
        <div className={styles.accordion__trigger}>
          <div>{children}</div>
          <ChevronDown className={styles.accordion__trigger__chevron} />
        </div>
      </AccordionPrimitive.Trigger>
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
