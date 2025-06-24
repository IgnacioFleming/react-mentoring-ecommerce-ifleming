import { describe, expect, it } from 'vitest';
import { Card } from './Card';
import { render } from '@testing-library/react';

describe('Card', () => {
  const CardMock = () => (
    <Card>
      <Card.Thumbnail src="mockSrc" alt="mockAlt" />
      <Card.Content>
        <Card.Header>
          <div>Header</div>
        </Card.Header>
        <Card.Main>
          <div>Main</div>
        </Card.Main>
        <Card.Footer>
          <div>Footer</div>
        </Card.Footer>
      </Card.Content>
    </Card>
  );

  it('renders the card correctly', () => {
    const { getByTestId } = render(<CardMock />);
    expect(getByTestId('card')).toBeInTheDocument();
  });

  it('renders thumbnail image', () => {
    const { getByRole } = render(<CardMock />);
    expect(getByRole('img')).toBeInTheDocument();
    expect(getByRole('img')).toHaveAttribute('src', 'mockSrc');
  });

  it('renders content header', () => {
    const { getByText } = render(<CardMock />);
    expect(getByText('Header')).toBeInTheDocument();
  });
  it('renders content main', () => {
    const { getByText } = render(<CardMock />);
    expect(getByText('Main')).toBeInTheDocument();
  });
  it('renders content footer', () => {
    const { getByText } = render(<CardMock />);
    expect(getByText('Footer')).toBeInTheDocument();
  });
});
