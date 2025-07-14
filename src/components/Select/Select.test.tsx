import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import { Select } from './Select';

Object.defineProperty(HTMLElement.prototype, 'scrollIntoView', {
  value: vi.fn(),
  writable: true,
});

describe('Select', () => {
  const mockOnValueChange = vi.fn();
  const SelectMock = () => (
    <Select onValueChange={mockOnValueChange}>
      <Select.Trigger>
        <Select.Value placeholder="Trigger" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="Item 1">Item 1</Select.Item>
        <Select.Item value="Item 2">Item 2</Select.Item>
        <Select.Item value="Item 3">Item 3</Select.Item>
      </Select.Content>
    </Select>
  );
  const renderSelect = () => render(<SelectMock />);

  it('should render component correctly', () => {
    const { getByTestId } = renderSelect();
    expect(getByTestId('select')).toBeInTheDocument();
  });

  it('should render only the trigger if the user have not clicked it', () => {
    const { getByText, queryByText } = renderSelect();
    // screen.debug();
    expect(getByText('Trigger')).toBeInTheDocument();
    expect(queryByText('Item 1')).not.toBeInTheDocument();
  });

  it('should render content when trigger is activated', () => {
    const { queryByText, getByTestId } = renderSelect();
    const trigger = getByTestId('select-trigger');
    fireEvent.click(trigger);
    expect(queryByText('Item 1')).toBeInTheDocument();
    expect(queryByText('Item 2')).toBeInTheDocument();
    expect(queryByText('Item 3')).toBeInTheDocument();
  });

  it('should call onValueChange when selecting a new value', () => {
    const { queryByText, getByTestId, getByText } = renderSelect();
    const trigger = getByTestId('select-trigger');
    fireEvent.click(trigger);
    const firstItem = getByText('Item 1');
    expect(firstItem).toBeInTheDocument();
    expect(queryByText('Item 2')).toBeInTheDocument();
    expect(queryByText('Item 3')).toBeInTheDocument();
    fireEvent.focus(firstItem);
    fireEvent.keyDown(firstItem, { key: 'Enter', code: 'Enter' });
    fireEvent.click(trigger);
    expect(mockOnValueChange).toHaveBeenCalled();
  });
});
