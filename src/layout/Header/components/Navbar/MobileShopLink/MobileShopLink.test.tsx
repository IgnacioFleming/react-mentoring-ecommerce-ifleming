import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MobileShopLink } from './MobileShopLink';

describe('MobileShopLink', () => {
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

  const renderMobileShopLink = () =>
    render(
      <MemoryRouter>
        <MobileShopLink
          trigger={mockTrigger}
          items={mockItems}
          applyNavLinkStyle={mockApplyNavLinkStyle}
        />
      </MemoryRouter>,
    );

  it('renders component correctly', () => {
    const { getByTestId } = renderMobileShopLink();
    expect(getByTestId('mobile-shop-link')).toBeInTheDocument();
  });

  it('expands the content when clicking trigger', () => {
    const { getByTestId } = renderMobileShopLink();
    const trigger = getByTestId('trigger');
    fireEvent.click(trigger);
    const content = getByTestId('content');
    expect(content).toBeInTheDocument();
  });

  it('navigates correctly when clicking on each link', () => {
    const { getByTestId, getByRole } = renderMobileShopLink();
    const trigger = getByTestId('trigger');
    fireEvent.click(trigger);
    const firstLink = getByRole('link', { name: mockItems[0].name });
    expect(firstLink).toHaveAttribute('href', mockItems[0].path);

    const secondLink = getByRole('link', { name: mockItems[1].name });
    expect(secondLink).toHaveAttribute('href', mockItems[1].path);
  });
});
