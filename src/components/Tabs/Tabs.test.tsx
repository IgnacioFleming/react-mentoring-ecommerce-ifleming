import { describe, expect, it } from 'vitest';
import { Tabs, TabsProps } from './Tabs';
import { fireEvent, render } from '@testing-library/react';

describe('Tabs', () => {
  const MOCK_TAB_ITEMS: TabsProps['items'] = [
    { label: 'Tab1', content: 'content for tab1' },
    { label: 'Tab2', content: 'content for tab2' },
    { label: 'Tab3', content: 'content for tab3' },
  ];

  const renderTabs = (items: TabsProps['items'] = []) =>
    render(<Tabs items={items.length > 0 ? items : MOCK_TAB_ITEMS} />);

  it('should render all tab labels correctly', () => {
    const { getByText } = renderTabs();
    expect(getByText(MOCK_TAB_ITEMS[0].label)).toBeInTheDocument();
    expect(getByText(MOCK_TAB_ITEMS[1].label)).toBeInTheDocument();
    expect(getByText(MOCK_TAB_ITEMS[2].label)).toBeInTheDocument();
  });

  it('should display first item content by default', () => {
    const { queryByText } = renderTabs();
    expect(queryByText('content for tab1')).toBeInTheDocument();
    expect(queryByText('content for tab2')).not.toBeInTheDocument();
    expect(queryByText('content for tab3')).not.toBeInTheDocument();
  });

  it('should display another content if clicked the correspondent tab trigger', () => {
    const { getByText, queryByText } = renderTabs();
    const tab2Trigger = getByText(MOCK_TAB_ITEMS[1].label);
    fireEvent.mouseDown(tab2Trigger);
    expect(queryByText('content for tab2')).toBeInTheDocument();
    expect(queryByText('content for tab1')).not.toBeInTheDocument();
    expect(queryByText('content for tab3')).not.toBeInTheDocument();
  });
});
