import { describe, expect, it } from 'vitest';
import { HoverCard } from './HoverCard';
import { render } from '@testing-library/react';

const HoverCardMock = ({ open = false }) => (
  <HoverCard open={open} openDelay={0} closeDelay={0}>
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

  it('should render content when prop open is true', async () => {
    const { getByText } = render(<HoverCardMock open />);
    expect(getByText('Content')).toBeInTheDocument();
  });

  it('should hide content when prop open is false', async () => {
    const { queryByText } = render(<HoverCardMock open={false} />);
    expect(queryByText('Content')).not.toBeInTheDocument();
  });
});
