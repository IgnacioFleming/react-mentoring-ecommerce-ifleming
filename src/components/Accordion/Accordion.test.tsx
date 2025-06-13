import { describe, expect, it } from 'vitest';
import { Accordion } from './Accordion';
import { fireEvent, render } from '@testing-library/react';

const AccordionMock = () => (
  <Accordion type="single">
    <Accordion.Item value="item-1">
      <Accordion.Trigger>
        <button>Trigger</button>
      </Accordion.Trigger>
      <Accordion.Content>
        <div>Content</div>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion>
);

describe('Accordion', () => {
  it('should render the accordion correctly', () => {
    const { getByTestId } = render(<AccordionMock />);
    expect(getByTestId('accordion-item')).toBeInTheDocument();
  });

  it('should render content when clicking on trigger', () => {
    const { getByRole, getByText } = render(<AccordionMock />);
    const trigger = getByRole('button', { name: 'Trigger' });
    expect(trigger).toBeInTheDocument();
    fireEvent.click(trigger);
    const content = getByText('Content');
    expect(content).toBeInTheDocument();
  });
});
