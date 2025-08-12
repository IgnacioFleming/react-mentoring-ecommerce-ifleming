import * as TabsPrimitive from '@radix-ui/react-tabs';
import { ReactNode } from 'react';

type TabItem = {
  label: string;
  content: string | ReactNode;
};

type TabsProps = {
  items: TabItem[];
};

export const Tabs = ({ items }: TabsProps) => {
  const triggers = items.map((tabItem, index) => (
    <TabsPrimitive.Trigger key={index} value={`tab${index}`}>
      {tabItem.label}
    </TabsPrimitive.Trigger>
  ));

  const contents = items.map((tabItem, index) => (
    <TabsPrimitive.Content key={index} value={`tab${index}`}>
      {tabItem.content}
    </TabsPrimitive.Content>
  ));

  return (
    <TabsPrimitive.Root defaultValue="tab0">
      <TabsPrimitive.List>{triggers}</TabsPrimitive.List>
      {contents}
    </TabsPrimitive.Root>
  );
};
