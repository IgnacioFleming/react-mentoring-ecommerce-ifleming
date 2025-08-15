import * as TabsPrimitive from '@radix-ui/react-tabs';
import { ReactNode } from 'react';
import styles from './Tabs.module.scss';

type TabItem = {
  label: string;
  content: string | ReactNode;
};

export type TabsProps = {
  items: TabItem[];
};

export const Tabs = ({ items }: TabsProps) => {
  const triggers = items.map((tabItem, index) => (
    <TabsPrimitive.Trigger key={index} value={`tab${index}`}>
      {tabItem.label}
    </TabsPrimitive.Trigger>
  ));

  const contents = items.map((tabItem, index) => (
    <TabsPrimitive.Content key={index} value={`tab${index}`} className={styles.tabs__contents}>
      {tabItem.content}
    </TabsPrimitive.Content>
  ));

  return (
    <TabsPrimitive.Root defaultValue="tab0" className={styles.tabs}>
      <TabsPrimitive.List className={styles.tabs__triggers}>{triggers}</TabsPrimitive.List>
      {contents}
    </TabsPrimitive.Root>
  );
};
