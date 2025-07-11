import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Dropdown } from './Dropdown';

describe('Dropdown', () => {
  const DropdownMock = () => (
    <Dropdown>
      <Dropdown.Trigger>
        <div>Trigger</div>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Item>
          <div>Item 1</div>
          <div>Item 2</div>
          <Dropdown.Separator />
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
    const { getByTestId, getByText } = renderDropdown();
    expect(getByTestId('dropdown-trigger')).toBeInTheDocument();
    expect(getByText('Trigger')).toBeInTheDocument();
  });
});
