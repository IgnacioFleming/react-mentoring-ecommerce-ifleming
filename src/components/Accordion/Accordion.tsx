import * as AccordionPrimitive from '@radix-ui/react-accordion';
import clsx from 'clsx';
import { ChevronDown } from 'lucide-react';
import styles from './Accordion.module.scss';

export const Accordion = ({ children, ...props }: AccordionPrimitive.AccordionSingleProps) => {
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
}: AccordionPrimitive.AccordionHeaderProps & AccordionPrimitive.AccordionTriggerProps) => (
  <AccordionPrimitive.AccordionHeader>
    <AccordionPrimitive.Trigger asChild>
      <div className={clsx(styles.accorion__trigger, className)}>
        {children}
        <ChevronDown />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.AccordionHeader>
);

Accordion.Trigger = Trigger;

const Content = ({ children, ...props }: AccordionPrimitive.AccordionContentProps) => (
  <AccordionPrimitive.Content className={props.className}>{children}</AccordionPrimitive.Content>
);

Accordion.Content = Content;
