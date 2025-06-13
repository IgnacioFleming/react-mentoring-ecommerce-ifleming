import { describe, expect, it } from 'vitest';
import { HoverCard } from './HoverCard';
import { fireEvent, render } from '@testing-library/react';

const HoverCardMock = () => (
  <HoverCard>
    <HoverCard.Trigger>
      <button>Trigger</button>
    </HoverCard.Trigger>
    <HoverCard.Content>
      <div>Content</div>
    </HoverCard.Content>
  </HoverCard>
);

describe('HoverCard', () => {
  it('should render the HoverCard correctly', () => {
    const { getByTestId } = render(<HoverCardMock />);
    expect(getByTestId('hover-card')).toBeInTheDocument();
  });

  it('should render content while hovering over trigger', () => {
    const { getByRole, getByText } = render(<HoverCardMock />);
    const trigger = getByRole('button', { name: 'Trigger' });
    expect(trigger).toBeInTheDocument();
    fireEvent.mouseEnter(trigger);
    const content = getByText('Content');
    expect(content).toBeInTheDocument();
  });
});
