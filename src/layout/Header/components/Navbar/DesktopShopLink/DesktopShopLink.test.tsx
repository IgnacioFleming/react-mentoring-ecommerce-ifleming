import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { DesktopShopLink } from './DesktopShopLink';

describe('DesktopShopLink', () => {
  const mockTrigger = {
    name: 'mockTrigger',
    path: '/mockPath',
  };

  const mockItems = [
    {
      name: 'mockName1',
      path: '/mockPath1',
    },
    {
      name: 'mockName2',
      path: '/mockPath2',
    },
  ];

  const mockApplyNavLinkStyle = vi.fn();

  const renderDesktopShopLink = () =>
    render(
      <MemoryRouter>
        <DesktopShopLink
          trigger={mockTrigger}
          items={mockItems}
          applyNavLinkStyle={mockApplyNavLinkStyle}
        />
      </MemoryRouter>,
    );

  it('renders component correctly', () => {
    const { getByTestId } = renderDesktopShopLink();
    expect(getByTestId('hover-card')).toBeInTheDocument();
  });

  it('expands the content when hovering over trigger', () => {
    const { getByTestId } = renderDesktopShopLink();
    const trigger = getByTestId('trigger');
    fireEvent.mouseEnter(trigger);
    const content = getByTestId('content');
    expect(content).toBeInTheDocument();
  });

  // it('navigates correctly when clicking on each link', () => {
  //   const { getByText } = renderDesktopShopLink();
  //   const trigger = getByText(mockTrigger.name);
  //   fireEvent.pointerOver(trigger);
  //   const firstLink = getByText(mockItems[0].name);
  //   expect(firstLink).toHaveAttribute('href', mockItems[0].path);

  //   const secondLink = getByText(mockItems[1].name);
  //   expect(secondLink).toHaveAttribute('href', mockItems[1].path);
  // });
});
