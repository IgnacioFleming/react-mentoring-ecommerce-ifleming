import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { DesktopShopLink } from './DesktopShopLink';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';

vi.mock('../../../../../components/HoverCard', () => {
  const HoverCard = ({
    children,
    className,
    openDelay = 0,
    closeDelay = 0,
    ...props
  }: HoverCardPrimitive.HoverCardProps & { className?: string }) => (
    <div data-testid="hover-card" className={className}>
      <HoverCardPrimitive.Root {...props} open openDelay={openDelay} closeDelay={closeDelay}>
        {children}
      </HoverCardPrimitive.Root>
    </div>
  );
  const MockTrigger = ({ children }: HoverCardPrimitive.HoverCardTriggerProps) => (
    <HoverCardPrimitive.Trigger asChild data-testid="trigger">
      <div>{children}</div>
    </HoverCardPrimitive.Trigger>
  );
  HoverCard.Trigger = MockTrigger;
  const MockContent = ({
    children,
    className,
  }: HoverCardPrimitive.HoverCardPortalProps & HoverCardPrimitive.HoverCardContentProps) => (
    <HoverCardPrimitive.Portal>
      <HoverCardPrimitive.Content className={className} data-testid="content">
        {children}
      </HoverCardPrimitive.Content>
    </HoverCardPrimitive.Portal>
  );
  HoverCard.Content = MockContent;
  return { HoverCard };
});

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

  const mockApplyNavLinkStyle = vi.fn(() => 'nav-link-class');

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

  it('navigates correctly when clicking on each link', () => {
    const { getByText } = renderDesktopShopLink();

    const trigger = getByText(mockTrigger.name).parentElement;
    expect(trigger).toHaveAttribute('href', mockTrigger.path);

    const firstLink = getByText(mockItems[0].name);
    expect(firstLink).toHaveAttribute('href', mockItems[0].path);

    const secondLink = getByText(mockItems[1].name);
    expect(secondLink).toHaveAttribute('href', mockItems[1].path);
  });
});
