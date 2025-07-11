import { describe, expect, it } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import { Dropdown } from './Dropdown';

describe('Dropdown', () => {
  const DropdownMock = () => (
    <Dropdown>
      <Dropdown.Trigger>
        <button>Trigger</button>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Item>
          <div>Item 1</div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div>Item 2</div>
        </Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item>
          <div>Item 3</div>
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  );
  const renderDropdown = () => render(<DropdownMock />);

  it('should render component correctly', () => {
    const { getByTestId } = renderDropdown();
    expect(getByTestId('dropdown')).toBeInTheDocument();
  });

  it('should render only the trigger if the user have not clicked it', () => {
    const { getByTestId, getByText, queryByText } = renderDropdown();
    expect(getByTestId('dropdown-trigger')).toBeInTheDocument();
    expect(getByText('Trigger')).toBeInTheDocument();
    expect(queryByText('Item 1')).not.toBeInTheDocument();
  });

  it('should render content when trigger is activated', () => {
    const { getByTestId, queryByText, getByRole, queryByTestId } = renderDropdown();
    const trigger = getByRole('button', { name: 'Trigger' });
    expect(queryByTestId('dropdown-content')).not.toBeInTheDocument();
    fireEvent.focus(trigger);
    fireEvent.keyDown(trigger, { key: 'Enter', code: 'Enter' });
    expect(getByTestId('dropdown-content')).toBeInTheDocument();
    expect(queryByText('Item 1')).toBeInTheDocument();
    expect(queryByText('Item 2')).toBeInTheDocument();
    expect(queryByText('Item 3')).toBeInTheDocument();
  });

  it('should close content when trigger is activated twice', () => {
    const { getByTestId, queryByText, getByRole, queryByTestId } = renderDropdown();
    const trigger = getByRole('button', { name: 'Trigger' });
    expect(queryByTestId('dropdown-content')).not.toBeInTheDocument();
    fireEvent.focus(trigger);
    fireEvent.keyDown(trigger, { key: 'Enter', code: 'Enter' });
    expect(getByTestId('dropdown-content')).toBeInTheDocument();
    expect(queryByText('Item 1')).toBeInTheDocument();
    expect(queryByText('Item 2')).toBeInTheDocument();
    expect(queryByText('Item 3')).toBeInTheDocument();
    fireEvent.focus(trigger);
    fireEvent.keyDown(trigger, { key: 'Enter', code: 'Enter' });
    expect(queryByTestId('dropdown-content')).not.toBeInTheDocument();
    expect(queryByText('Item 1')).not.toBeInTheDocument();
    expect(queryByText('Item 2')).not.toBeInTheDocument();
    expect(queryByText('Item 3')).not.toBeInTheDocument();
  });
});
